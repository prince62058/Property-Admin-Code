import { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../store/themeConfigSlice";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import IconX from "../components/Icon/IconX";
import IconPencil from "../components/Icon/IconPencil";
import IconTrash from "../components/Icon/IconTrash";
import Swal from "sweetalert2";
import { BASE_URL } from "../config";

type HomeImageItem = {
  _id: string;
  HomeImage: Array<{
    _id: string;
    url: string;
    createdAt?: string;
    updatedAt?: string;
  }>;
  disable?: boolean;
  createdAt: string;
  updatedAt: string;
  __v?: number;
};

type HomeImagesResponse = {
  success: boolean;
  total?: number;
  message?: string;
  page?: number;
  limit?: number;
  totalPages?: number;
  data: HomeImageItem[];
};

type UploadHomeImageResponse = {
  success: boolean;
  message?: string;
  data?: HomeImageItem;
};

type DeleteResponse = {
  success: boolean;
  message?: string;
  data?: {
    deleted?: boolean;
  };
};

const toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  showCloseButton: true,
});

const Sliders = () => {
  const dispatch = useDispatch();

  const [images, setImages] = useState<HomeImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editFile, setEditFile] = useState<File | null>(null);
  const [editing, setEditing] = useState(false);
  const [currentEditId, setCurrentEditId] = useState<string | null>(null);
  const [imageId, setImageId] = useState("");

  // Pagination state
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(setPageTitle("Sliders"));
  }, [dispatch]);

  const fetchHomeImages = async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);

    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("accessToken") ||
        "";

      const res = await fetch(`${BASE_URL}/getAllHomeImages?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        ...(signal ? { signal } : {}),
      });
      console.log("response of all images", res)
      if (!res.ok) {
        let detailsText = "";
        try {
          detailsText = await res.text();
        } catch {
          detailsText = "";
        }

        let detailsMsg = "";
        try {
          const maybeJson = detailsText
            ? (JSON.parse(detailsText) as { message?: string })
            : null;
          detailsMsg = maybeJson?.message || "";
        } catch {
          detailsMsg = "";
        }

        const suffix = detailsMsg
          ? `: ${detailsMsg}`
          : detailsText
            ? `: ${detailsText}`
            : "";
        throw new Error(`Failed to fetch sliders (${res.status})${suffix}`);
      }

      const json = (await res.json()) as HomeImagesResponse;
      console.log("Fetch response JSON:", json);
      if (!json?.success) {
        throw new Error(json?.message || "Failed to fetch sliders");
      }

      // Update pagination info
      setTotalPages(json.totalPages || 1);
      setTotal(json.total || 0);

      // Transform flat API data into nested structure for UI compatibility
      const transformedData = (json.data || []).map((item: any) => ({
        _id: item.homeId || item._id,
        HomeImage: [{
          _id: item._id,
          url: item.url,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
        }],
        disable: item.disable,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
      }));

      console.log("Fetched images (transformed):", transformedData);
      setImages(Array.isArray(transformedData) ? transformedData : []);
    } catch (err) {
      if ((err as Error)?.name !== "AbortError") {
        setError((err as Error)?.message || "Failed to fetch sliders");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    fetchHomeImages(controller.signal);
    return () => controller.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const flatImages = useMemo(() => {
    const allImages: Array<{
      idx: number;
      parentId: string;
      imageId: string;
      url: string;
      createdAt: string;
      updatedAt: string;
      disable: boolean;
    }> = [];

    images.forEach((img, parentIdx) => {
      // Check if HomeImage array exists and has items
      if (img.HomeImage && Array.isArray(img.HomeImage)) {
        img.HomeImage.forEach((imageObj, imageIdx) => {
          allImages.push({
            idx: allImages.length,
            parentId: img._id,
            imageId: imageObj._id,
            url: imageObj.url,
            createdAt: imageObj.createdAt || img.createdAt,
            updatedAt: imageObj.updatedAt || img.updatedAt,
            disable: img.disable || false,
          });
        });
      }
    });

    // Sort by updatedAt descending (latest on top)
    // When using server-side pagination, sorting usually happens on the server.
    // However, we maintain this to sort the current page if it's not already sorted.
    allImages.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
    allImages.forEach((item, i) => {
      item.idx = (page - 1) * limit + i;
    });

    return allImages;
  }, [images]);

  const openUpload = () => {
    setError(null);
    setUploadFiles([]);
    setIsUploadOpen(true);
  };

  const closeUpload = () => {
    if (uploading) return;
    setIsUploadOpen(false);
  };

  const openEdit = (parentId: string, imageId: string) => {
    setError(null);
    setEditFile(null);
    setCurrentEditId(parentId);
    setImageId(imageId);
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    if (editing) return;
    setIsEditOpen(false);
    setCurrentEditId(null);
    setImageId("");
  };




  const handleDelete = async (parentId: string, imageId: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This slider image will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      try {
        const token =
          localStorage.getItem("token") ||
          localStorage.getItem("accessToken") ||
          "";

        const res = await fetch(
          `${BASE_URL}/home-image/${imageId}/${parentId}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          }
        );

        if (!res.ok) {
          let detailsText = "";
          try {
            detailsText = await res.text();
          } catch {
            detailsText = "";
          }

          let detailsMsg = "";
          try {
            const maybeJson = detailsText
              ? (JSON.parse(detailsText) as { message?: string })
              : null;
            detailsMsg = maybeJson?.message || "";
          } catch {
            detailsMsg = "";
          }

          const suffix = detailsMsg
            ? `: ${detailsMsg}`
            : detailsText
              ? `: ${detailsText}`
              : "";
          throw new Error(`Failed to delete slider (${res.status})${suffix}`);
        }

        const json = (await res.json()) as DeleteResponse;
        if (!json?.success) {
          throw new Error(json?.message || "Failed to delete slider");
        }

        toast.fire({ icon: "success", title: "Slider deleted successfully" });
        await fetchHomeImages();
      } catch (err) {
        toast.fire({
          icon: "error",
          title: (err as Error)?.message || "Failed to delete slider"
        });
      }
    }
  };

  const onSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editFile) {
      setError("Please select an image");
      return;
    }
    setEditing(true);
    setError(null);
    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("accessToken") ||
        "";

      const formData = new FormData();
      formData.append("HomeImage", editFile);

      console.log("Updating slider:", {
        parentId: currentEditId,
        imageId: imageId,
        file: editFile.name
      });

      const res = await fetch(
        `${BASE_URL}/home-image/${imageId}/${currentEditId}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: formData,
        }
      );

      if (!res.ok) {
        let detailsText = "";
        try {
          detailsText = await res.text();
        } catch {
          detailsText = "";
        }

        let detailsMsg = "";
        try {
          const maybeJson = detailsText
            ? (JSON.parse(detailsText) as { message?: string })
            : null;
          detailsMsg = maybeJson?.message || "";
        } catch {
          detailsMsg = "";
        }

        const suffix = detailsMsg
          ? `: ${detailsMsg}`
          : detailsText
            ? `: ${detailsText}`
            : "";
        throw new Error(`Failed to update slider (${res.status})${suffix}`);
      }

      const json = (await res.json()) as UploadHomeImageResponse;
      if (!json?.success) {
        throw new Error(json?.message || "Failed to update slider");
      }

      toast.fire({ icon: "success", title: "Slider updated successfully" });
      setIsEditOpen(false);
      setCurrentEditId(null);
      setImageId("");
      await fetchHomeImages();
    } catch (err) {
      setError((err as Error)?.message || "Failed to update slider");
    } finally {
      setEditing(false);
    }
  };

  const onSubmitUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFiles || uploadFiles.length === 0) {
      setError("Please select at least one image");
      return;
    }
    setUploading(true);
    setError(null);
    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("accessToken") ||
        "";

      const formData = new FormData();
      // Append each selected file
      uploadFiles.forEach((file) => formData.append("HomeImage", file));

      console.log("Uploading files:", uploadFiles.length);

      const res = await fetch(`${BASE_URL}/uploadHomeImage`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: formData,
      });

      if (!res.ok) {
        let detailsText = "";
        try {
          detailsText = await res.text();
        } catch {
          detailsText = "";
        }

        let detailsMsg = "";
        try {
          const maybeJson = detailsText
            ? (JSON.parse(detailsText) as { message?: string })
            : null;
          detailsMsg = maybeJson?.message || "";
        } catch {
          detailsMsg = "";
        }

        const suffix = detailsMsg
          ? `: ${detailsMsg}`
          : detailsText
            ? `: ${detailsText}`
            : "";
        throw new Error(`Failed to upload slider (${res.status})${suffix}`);
      }

      const json = (await res.json()) as UploadHomeImageResponse;
      if (!json?.success) {
        throw new Error(json?.message || "Failed to upload slider");
      }

      toast.fire({ icon: "success", title: "Slider uploaded successfully" });
      setIsUploadOpen(false);
      await fetchHomeImages();
    } catch (err) {
      setError((err as Error)?.message || "Failed to upload slider");
    } finally {
      setUploading(false);
    }
  };


  const handleToggleStatus = async (id: string) => {
    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("accessToken") ||
        "";

      const res = await fetch(`${BASE_URL}/home-image-toggle/${id}`, {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!res.ok) {
        let detailsText = "";
        try {
          detailsText = await res.text();
        } catch {
          detailsText = "";
        }

        let detailsMsg = "";
        try {
          const maybeJson = detailsText
            ? (JSON.parse(detailsText) as { message?: string })
            : null;
          detailsMsg = maybeJson?.message || "";
        } catch {
          detailsMsg = "";
        }

        const suffix = detailsMsg
          ? `: ${detailsMsg}`
          : detailsText
            ? `: ${detailsText}`
            : "";
        throw new Error(`Failed to toggle slider status (${res.status})${suffix}`);
      }

      const json = (await res.json()) as UploadHomeImageResponse;
      if (!json?.success) {
        throw new Error(json?.message || "Failed to toggle slider status");
      }

      toast.fire({ icon: "success", title: "Slider status toggled successfully" });
      await fetchHomeImages();
    } catch (err) {
      setError((err as Error)?.message || "Failed to toggle slider status");
    }
  }


  return (
    <div>
      <div className="panel">
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">
            Sliders
          </h5>
          <button
            type="button"
            className="btn btn-primary"
            onClick={openUpload}
          >
            Upload Slider
          </button>
        </div>

        {error && (
          <div className="alert alert-danger mb-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-danger"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-danger">{error}</p>
              </div>
            </div>
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
          </div>
        ) : flatImages.length === 0 ? (
          <div className="flex justify-center items-center py-8">
            <div className="text-white-dark">No sliders found</div>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table-striped">
                <thead>
                  <tr>
                    <th className="!text-center">#</th>
                    <th>Image</th>
                    <th>Status</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th>Active/Inactive</th>
                    <th className="!text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {flatImages.map((item) => (
                    <tr key={`${item.parentId}_${item.imageId}`}>
                      <td className="!text-center">{item.idx + 1}</td>
                      <td>
                        <div className="flex items-center">
                          <div className="w-20 h-20 rounded overflow-hidden border border-gray-200 dark:border-gray-700">
                            {item.url ? (
                              <img
                                src={item.url}
                                alt={`Slider ${item.idx + 1}`}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = `https://via.placeholder.com/80x80?text=Image+${item.idx + 1}`;
                                }}
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                                <span className="text-gray-400 text-xs">
                                  No Image
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                      {/* <td>
                        <div className="font-mono text-xs">{item.imageId}</div>
                      </td>
                      <td>
                        <div className="font-mono text-xs">{item.parentId}</div>
                      </td> */}
                      <td>
                        <span className={`badge ${item.disable ? 'bg-danger text-danger' : 'bg-success text-success'} rounded-full px-3 py-1 text-xs`}>
                          {item.disable ? 'Inactive' : 'Active'}
                        </span>
                      </td>
                      <td>
                        <div className="text-xs">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(item.createdAt).toLocaleTimeString()}
                        </div>
                      </td>
                      <td>
                        <div className="text-xs">
                          {new Date(item.updatedAt).toLocaleDateString()}
                        </div>
                        <div className="text-xs text-gray-500">
                          {new Date(item.updatedAt).toLocaleTimeString()}
                        </div>
                      </td>
                      <td>
                        <button
                          type="button"
                          onClick={() => handleToggleStatus(item.imageId)}
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${!item.disable ? 'bg-success' : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          title={item.disable ? 'Click to activate' : 'Click to deactivate'}
                        >
                          <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform duration-200 ${!item.disable ? 'translate-x-6' : 'translate-x-1'
                              }`}
                          />
                        </button>
                      </td>
                      <td className="!text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                            onClick={() => openEdit(item.parentId, item.imageId)}
                            title="Edit"
                            disabled={item.disable}
                          >
                            <IconPencil className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-sm btn-danger"
                            onClick={() =>
                              handleDelete(item.parentId, item.imageId)
                            }
                            title="Delete"
                            disabled={item.disable}
                          >
                            <IconTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center justify-end gap-2 mt-5 p-4 border-t">
              <button
                type="button"
                className="btn btn-outline-primary"
                disabled={page <= 1 || loading}
                onClick={() => setPage(p => Math.max(1, p - 1))}
              >
                Prev
              </button>
              {/* <div className="text-white-dark text-sm mx-2">
                Page {page} of {totalPages}
              </div> */}
              <button
                type="button"
                className="btn btn-outline-primary"
                disabled={page >= totalPages || loading}
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>

      {/* Upload Dialog */}
      <Transition appear show={isUploadOpen} as={Fragment}>
        <Dialog as="div" open={isUploadOpen} onClose={closeUpload}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </TransitionChild>

          <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
            <div className="flex min-h-screen items-start justify-center px-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  as="div"
                  className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark"
                >
                  <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                    <div className="text-lg font-bold">Upload Slider</div>
                    <button
                      type="button"
                      className="text-white-dark hover:text-dark"
                      onClick={closeUpload}
                      disabled={uploading}
                    >
                      <IconX />
                    </button>
                  </div>

                  <form className="p-5 space-y-4" onSubmit={onSubmitUpload}>
                    <div>
                      <label className="text-white-dark text-xs">Images (Multiple)</label>
                      <input
                        className="form-input"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const files = Array.from(e.target.files || []);
                          setUploadFiles(files);
                        }}
                        multiple
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        You can select multiple images at once
                      </p>

                      {uploadFiles.length > 0 && (
                        <div className="mt-4">
                          <div className="text-xs text-white-dark mb-2">
                            Previews ({uploadFiles.length} files):
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {uploadFiles.map((file, index) => (
                              <div key={`${file.name}_${index}`} className="flex flex-col">
                                <img
                                  src={URL.createObjectURL(file)}
                                  alt={`Preview ${index + 1}`}
                                  className="w-full h-32 object-cover rounded"
                                />
                                <div className="mt-2 text-xs text-white-dark truncate">
                                  {file.name} ({(file.size / 1024).toFixed(1)} KB)
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    {error && <div className="text-danger text-sm">{error}</div>}

                    <div className="mt-6 flex items-center justify-end gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={closeUpload}
                        disabled={uploading}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={uploading}
                      >
                        {uploading ? "Uploading..." : "Upload Images"}
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>

      {/* Edit Dialog */}
      <Transition appear show={isEditOpen} as={Fragment}>
        <Dialog as="div" open={isEditOpen} onClose={closeEdit}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0" />
          </TransitionChild>

          <div className="fixed inset-0 z-[999] overflow-y-auto bg-[black]/60">
            <div className="flex min-h-screen items-start justify-center px-4">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  as="div"
                  className="panel my-8 w-full max-w-lg overflow-hidden rounded-lg border-0 p-0 text-black dark:text-white-dark"
                >
                  <div className="flex items-center justify-between bg-[#fbfbfb] px-5 py-3 dark:bg-[#121c2c]">
                    <div className="text-lg font-bold">Update Slider Image</div>
                    <button
                      type="button"
                      className="text-white-dark hover:text-dark"
                      onClick={closeEdit}
                      disabled={editing}
                    >
                      <IconX />
                    </button>
                  </div>

                  <form className="p-5 space-y-4" onSubmit={onSubmitEdit}>
                    <div>
                      <label className="text-white-dark text-xs">
                        Select New Image
                      </label>
                      <input
                        className="form-input"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          setEditFile(file);
                        }}
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Select a new image to replace the existing one
                      </p>

                      {editFile && (
                        <div className="mt-4">
                          <div className="text-xs text-white-dark mb-2">
                            Preview:
                          </div>
                          <img
                            src={URL.createObjectURL(editFile)}
                            alt="Preview"
                            className="w-full h-48 object-cover rounded"
                          />
                          <div className="mt-2 text-xs text-white-dark truncate">
                            {editFile.name} ({(editFile.size / 1024).toFixed(1)} KB)
                          </div>
                        </div>
                      )}
                    </div>

                    {error && <div className="text-danger text-sm">{error}</div>}

                    <div className="mt-6 flex items-center justify-end gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={closeEdit}
                        disabled={editing}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={editing}
                      >
                        {editing ? "Updating..." : "Update Image"}
                      </button>
                    </div>
                  </form>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Sliders;