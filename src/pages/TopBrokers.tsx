import { Fragment, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../store/themeConfigSlice";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import IconEdit from "../components/Icon/IconEdit";
import IconX from "../components/Icon/IconX";
import Swal from "sweetalert2";
import { BASE_URL } from "../config";
import TableHeaderActions from "../components/TableHeaderActions";

type BrokerItem = {
  _id?: string;
  id?: string;
  name?: string;
  fullName?: string;
  brokerName?: string;
  phone?: string;
  phoneNumber?: string;
  email?: string;
  city?: string;
  location?: string;
  rating?: number;
  score?: number;
  totalProperties?: number;
  totalListings?: number;
  totalLeads?: number;
  totalDeals?: number;
  totalEarnings?: number;
  userImage?: string;
  image?: string;
  profileImage?: string;
  avatar?: string;
  [key: string]: unknown;
};

const toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 2500,
  showCloseButton: true,
});

type TopBrokersApiResponse = {
  success: boolean;
  message?: string;
  data?: BrokerItem[];
  pagination?: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
};

type UpdateUserResponse = {
  success: boolean;
  message?: string;
  data?: BrokerItem;
};

const TopBrokers = () => {
  const dispatch = useDispatch();

  const [brokers, setBrokers] = useState<BrokerItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // track which brokers are currently being toggled so we can disable the switch
  const [togglingBrokerIds, setTogglingBrokerIds] = useState<Record<string, boolean>>({});

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingBrokerId, setEditingBrokerId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhoneNumber, setEditPhoneNumber] = useState("");
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [editImagePreview, setEditImagePreview] = useState("");
  const [editDisable, setEditDisable] = useState(false);
  const [saving, setSaving] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  
  // Pagination state
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [totalBrokers, setTotalBrokers] = useState(0);
  useEffect(() => {
    dispatch(setPageTitle("Top Brokers"));
  }, [dispatch]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchTopBrokers = async () => {
      setLoading(true);
      setError(null);

      try {
        const token =
          localStorage.getItem("token") ||
          localStorage.getItem("accessToken") ||
          "";

        const url = new URL(`${BASE_URL}/brokers/top`);
        url.searchParams.set('page', String(page));
        url.searchParams.set('limit', String(limit));
        if (searchQuery.trim()) {
            url.searchParams.set('search', searchQuery.trim());
        }

        const res = await fetch(
          url.toString(),
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            signal: controller.signal,
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
          throw new Error(
            `Failed to fetch top brokers (${res.status})${suffix}`
          );
        }

        const json = (await res.json()) as TopBrokersApiResponse;
        if (!json?.success) {
          throw new Error(json?.message || "Failed to fetch top brokers");
        }

        setBrokers(Array.isArray(json?.data) ? json.data : []);
        if (json.pagination) {
            setTotalPages(json.pagination.totalPages || 1);
            setTotalBrokers(json.pagination.total || 0);
        }
      } catch (err) {
        if ((err as Error)?.name !== "AbortError") {
          setError((err as Error)?.message || "Failed to fetch top brokers");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTopBrokers();

    return () => controller.abort();
  }, [page, limit, searchQuery]);

  // Reset to page 1 on search
  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const rows = useMemo(() => {
    return brokers.map((b, idx) => {
      const displayName = (b.brokerName ||
        b.fullName ||
        b.name ||
        "-") as string;
      const phone = (b.phoneNumber || b.phone || "-") as string;
      const email = (b.email || "-") as string;
      const city = ((b.city || b.location || "-") as string) || "-";
      const score = (
        typeof b.score === "number"
          ? b.score
          : typeof b.rating === "number"
            ? b.rating
            : null
      ) as number | null;
      const listings = (
        typeof b.totalListings === "number"
          ? b.totalListings
          : typeof b.totalProperties === "number"
            ? b.totalProperties
            : null
      ) as number | null;
      const leads = (typeof b.totalLeads === "number" ? b.totalLeads : null) as
        | number
        | null;
      const deals = (typeof b.totalDeals === "number" ? b.totalDeals : null) as
        | number
        | null;

      return {
        idx,
        id: (b._id || b.id || "-") as string,
        name: displayName,
        phone,
        email,
        city,
        score,
        listings,
        leads,
        deals,
        image: (b.userImage || b.image || b.profileImage || b.avatar || ""),
        broker: b,
        disable: Boolean((b as { disable?: boolean }).disable),
      };
    });
  }, [brokers]);

  const displayedRows = rows;

  const openEdit = (broker: BrokerItem) => {
    const id = (broker._id || broker.id || "") as string;
    if (!id) return;

    setError(null);
    setEditingBrokerId(id);
    setEditName(
      String(broker.name || broker.fullName || broker.brokerName || "")
    );
    setEditEmail(String(broker.email || ""));
    setEditPhoneNumber(String(broker.phoneNumber || broker.phone || ""));
    setEditImagePreview(String(broker.userImage || broker.image || broker.profileImage || broker.avatar || ""));
    setEditImageFile(null);
    setEditDisable(Boolean((broker as { disable?: boolean }).disable));
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    if (saving) return;
    setIsEditOpen(false);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setEditImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setEditImageFile(null);
    setEditImagePreview("");
  };

  const onToggleBroker = async (broker: BrokerItem) => {
    // flip disable state using /admin/:userId endpoint
    const id = (broker._id || broker.id || "") as string;
    if (!id) return;

    const nextDisable = !Boolean(broker.disable);

    setError(null);
    setTogglingBrokerIds((prev) => ({ ...prev, [id]: true }));
    setBrokers((prev) =>
      prev.map((b) => {
        const bid = (b._id || b.id || "") as string;
        if (bid !== id) return b;
        return { ...b, disable: nextDisable };
      })
    );

    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("token") ||
        localStorage.getItem("accessToken") ||
        "";

      const url = `${BASE_URL}/admin/${id}`; // provided by user
      const payload = { disable: nextDisable };

      const res = await fetch(url, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(payload),
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
        throw new Error(`Failed to toggle broker (${res.status})${suffix}`);
      }

      const json = (await res.json()) as UpdateUserResponse;
      if (!json?.success) {
        throw new Error(json?.message || "Failed to toggle broker");
      }

      const updated = json?.data;
      if ((updated?._id || updated?.id) && id) {
        setBrokers((prev) =>
          prev.map((b) => {
            const bid = (b._id || b.id || "") as string;
            if (bid !== id) return b;
            return { ...b, ...updated };
          })
        );
      }

      toast.fire({
        icon: 'success',
        title: nextDisable ? 'Broker disabled' : 'Broker enabled',
      });
    } catch (err) {
      // rollback
      setBrokers((prev) =>
        prev.map((b) => {
          const bid = (b._id || b.id || "") as string;
          if (bid !== id) return b;
          return { ...b, disable: Boolean(broker.disable) };
        })
      );
      setError((err as Error)?.message || 'Failed to toggle broker');
      toast.fire({
        icon: 'error',
        title: (err as Error)?.message || 'Failed to update broker status',
      });
    } finally {
      setTogglingBrokerIds((prev) => {
        const next = { ...prev };
        delete next[id];
        return next;
      });
    }
  };

  const onSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingBrokerId) return;

    setSaving(true);
    setError(null);
    try {
      const token =
        localStorage.getItem("token") ||
        localStorage.getItem("token") ||
        localStorage.getItem("accessToken") ||
        "";

      const url = `${BASE_URL}/updateUser/${editingBrokerId}`;

      // Add image to payload if selected
      if (editImageFile) {
        const formData = new FormData();
        formData.append('name', editName.trim());
        formData.append('email', editEmail.trim());
        formData.append('phoneNumber', editPhoneNumber.trim());
        formData.append('disable', String(editDisable));
        formData.append('userImage', editImageFile);

        const res = await fetch(url, {
          method: "PUT",
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
          throw new Error(`Failed to update broker (${res.status})${suffix}`);
        }

        const json = (await res.json()) as UpdateUserResponse;
        if (!json?.success) {
          throw new Error(json?.message || "Failed to update broker");
        }

        const updated = json?.data;
        if ((updated?._id || updated?.id) && editingBrokerId) {
          setBrokers((prev) =>
            prev.map((b) => {
              const id = (b._id || b.id || "") as string;
              if (id !== editingBrokerId) return b;
              return { ...b, ...updated };
            })
          );
        }
      } else {
        // No image selected - send JSON data
        const payload = {
          name: editName.trim(),
          email: editEmail.trim(),
          phoneNumber: editPhoneNumber.trim(),
          image: editImagePreview.trim(),
          disable: editDisable,
        };

        const res = await fetch(url, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(payload),
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
          throw new Error(`Failed to update broker (${res.status})${suffix}`);
        }

        const json = (await res.json()) as UpdateUserResponse;
        if (!json?.success) {
          throw new Error(json?.message || "Failed to update broker");
        }

        const updated = json?.data;
        if ((updated?._id || updated?.id) && editingBrokerId) {
          setBrokers((prev) =>
            prev.map((b) => {
              const id = (b._id || b.id || "") as string;
              if (id !== editingBrokerId) return b;
              return { ...b, ...updated };
            })
          );
        }
      }

      toast.fire({
        icon: 'success',
        title: 'Broker updated successfully'
      });
      setIsEditOpen(false);
    } catch (err) {
      setError((err as Error)?.message || "Failed to update broker");
    } finally {
      setSaving(false);
    }
  };

  const handleDownload = async (endpoint: string, fileType: "pdf" | "excel" | "csv") => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        }
      });
      if (!res.ok) {
        throw new Error(`Failed to download ${fileType}`);
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      let extension = "pdf";

      if (fileType === "excel") extension = "xlsx";
      if (fileType === "csv") extension = "csv";

      a.download = `topbrokers_${new Date().getTime()}.${extension}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.fire({ icon: 'success', title: 'Downloaded successfully' });
    } catch (error) {
      console.error(error);
      toast.fire({ icon: 'error', title: `Failed to download ${fileType}` });
    }
  };

  return (
    <div>
      <div className="panel">
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">
            Top Brokers
          </h5>
          <TableHeaderActions
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onDownload={handleDownload}
            pdfEndpoint="brokers/export-pdf"
            excelEndpoint="brokers/export-excel"
            csvEndpoint="brokers/export-csv"
            placeholder="Search partners..."
          />
        </div>

        {error && <div className="text-danger mb-4">{error}</div>}

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th className="text-center">Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th className="text-center">Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={10} className="text-center py-8">
                    <div className="flex justify-center items-center">
                      <div className="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                    </div>
                  </td>
                </tr>
              ) : displayedRows.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-8 text-gray-500">
                    No brokers found
                  </td>
                </tr>
              ) : (
                displayedRows.map((r, i) => (
                  <tr key={r.id !== "-" ? r.id : String(r.idx)}>
                    <td>{(page - 1) * limit + i + 1}</td>
                    {/* IMAGE COLUMN */}
                    <td>
                      <div className="flex items-center justify-center">
                        {r.image ? (
                          <img
                            src={r.image}
                            alt={r.name}
                            className="h-10 w-10 rounded-full object-cover border"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "/assets/images/user-profile.png";
                            }}
                          />
                        ) : (
                          <img
                            src="/assets/images/user-profile.png"
                            alt={r.name}
                            className="h-10 w-10 rounded-full object-cover border"
                          />
                        )}
                      </div>
                    </td>
                    <td>
                      <div className="whitespace-nowrap">{r.name}</div>
                    </td>
                    <td>{r.phone}</td>
                    <td>
                      <div className="whitespace-nowrap">{r.email}</div>
                    </td>

                    <td className="text-center">
                      <button
                        type="button"
                        disabled={Boolean(togglingBrokerIds[r.id])}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors
    ${r.disable ? 'bg-red-500' : 'bg-green-500'}
    ${Boolean(togglingBrokerIds[r.id]) ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
  `}
                        onClick={() => onToggleBroker(r.broker)}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${r.disable ? 'translate-x-6' : 'translate-x-1'
                            }`}
                        />
                      </button>
                    </td>
                    <td className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => openEdit(r.broker)}
                        >
                          <IconEdit />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-end gap-2 mt-5">
          <button
            type="button"
            className="btn btn-outline-primary"
            disabled={page <= 1 || loading}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Prev
          </button>
          <div className="text-white-dark text-sm">
            Page {page} of {totalPages}
          </div>
          <button
            type="button"
            className="btn btn-outline-primary"
            disabled={page >= totalPages || loading}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
        </div>
      </div>

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
                    <div className="text-lg font-bold">Edit Broker</div>
                    <button
                      type="button"
                      className="text-white-dark hover:text-dark"
                      onClick={closeEdit}
                      disabled={saving}
                    >
                      <IconX />
                    </button>
                  </div>

                  <form className="p-5 space-y-4" onSubmit={onSubmitEdit}>
                    <div>
                      <label className="text-white-dark text-xs text-center block">Profile Image</label>
                      <div className="space-y-2 text-center">
                        {editImagePreview && (
                          <div className="relative inline-block">
                            <img
                              src={editImagePreview}
                              alt="Profile preview"
                              className="w-20 h-20 rounded-full object-cover border"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = "/assets/images/user-profile.png";
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => document.getElementById('broker-image-input')?.click()}
                              className="absolute bottom-0 right-0 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-primary/90 border-2 border-white dark:border-gray-800"
                            >
                              <IconEdit className="w-3 h-3" />
                            </button>
                          </div>
                        )}
                        {!editImagePreview && (
                          <button
                            type="button"
                            onClick={() => document.getElementById('broker-image-input')?.click()}
                            className="btn btn-sm btn-outline-primary inline-flex items-center gap-2 rounded-full h-25 w-25"
                          >
                            <IconEdit />
                            Add Image
                          </button>
                        )}
                        <input
                          id="broker-image-input"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                          className="hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-white-dark text-xs">Name</label>
                      <input
                        className="form-input"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                        type="text"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-white-dark text-xs">Email</label>
                      <input
                        className="form-input"
                        value={editEmail}
                        onChange={(e) => setEditEmail(e.target.value)}
                        type="email"
                      />
                    </div>

                    <div>
                      <label className="text-white-dark text-xs">
                        Phone Number
                      </label>
                      <input
                        className="form-input"
                        type="tel"
                        value={editPhoneNumber}
                        onChange={(e) => {
                          const value = e.target.value;

                          // sirf numbers aur max 10 digits
                          if (/^\d{0,10}$/.test(value)) {
                            setEditPhoneNumber(value);
                          }
                        }}
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        id="broker-disabled"
                        type="checkbox"
                        className="form-checkbox"
                        checked={editDisable}
                        onChange={(e) => setEditDisable(e.target.checked)}
                      />
                      <label htmlFor="broker-disabled" className="text-white-dark text-sm">
                        Disabled
                      </label>
                    </div>

                    {error && <div className="text-danger">{error}</div>}

                    <div className="mt-6 flex items-center justify-end gap-2">
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={closeEdit}
                        disabled={saving}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        disabled={saving}
                      >
                        {saving ? "Saving..." : "Save"}
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

export default TopBrokers;
