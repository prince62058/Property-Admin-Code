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

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingBrokerId, setEditingBrokerId] = useState<string | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhoneNumber, setEditPhoneNumber] = useState("");
  const [editImageFile, setEditImageFile] = useState<File | null>(null);
  const [editImagePreview, setEditImagePreview] = useState("");
  const [editDisable, setEditDisable] = useState(false);
  const [saving, setSaving] = useState(false);

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
          localStorage.getItem("token") ||
          localStorage.getItem("accessToken") ||
          "";

        const res = await fetch(
          `${BASE_URL}/brokers/top`,
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
  }, []);

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
      };
    });
  }, [brokers]);

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

  return (
    <div>
      <div className="panel">
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">
            Top Brokers
          </h5>
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
              ) : rows.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-8">
                    <div className="flex justify-center items-center">
                      <div className="animate-spin border-2 border-[#2596be] dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                    </div>
                  </td>
                </tr>
              ) : (
                rows.map((r) => (
                  <tr key={r.id !== "-" ? r.id : String(r.idx)}>
                    <td>{r.idx + 1}</td>
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
                            className="btn btn-sm btn-outline-primary inline-flex items-center gap-2"
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

                    {/* <div className="flex items-center gap-2">
                                            <input id="broker-disabled" type="checkbox" className="form-checkbox" checked={editDisable} onChange={(e) => setEditDisable(e.target.checked)} />
                                            <label htmlFor="broker-disabled" className="text-white-dark text-sm">
                                                Disabled
                                            </label>
                                        </div> */}

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
