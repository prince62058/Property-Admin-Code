import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../store/themeConfigSlice";
import Swal from "sweetalert2";
import { X, Edit, Trash2 } from "lucide-react";
import { BASE_URL } from "../config";

const toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  showCloseButton: true,
});

type PropertyItem = {
  _id: string;
  userId?: string;
  thumbnail?: string;
  images?: string[];
  listingType?: string;
  title?: string;
  propertyCategory?: string | { _id: string; name?: string };
  area?: string;
  rentPrice?: number;
  price?: number;
  rentType?: string;
  negotialble?: string;
  bedRoom?: number;
  bathRoom?: number;
  balconies?: string;
  buildUpArea?: {
    value: number;
    unit: string;
  };
  plotSize?: {
    value: number;
    unit: string;
  };
  floorNo?: number;
  totalFloor?: number;
  preferance?: {
    all?: boolean;
    girl?: boolean;
    boy?: boolean;
    family?: boolean;
    student?: boolean;
    bank?: boolean;
  };
  description?: string;
  instruction?: string;
  carPraking?: string;
  garageSize?: number;
  facing?: string;
  buildYear?: string;
  furnished?: string;
  appliances?: {
    fridge?: boolean;
    tv?: boolean;
    ac?: boolean;
    gym?: boolean;
    shower?: boolean;
    tvCabel?: boolean;
  };
  facilities?: {
    parkingLot?: boolean;
    gym?: boolean;
    patAllowed?: boolean;
    garden?: boolean;
    park?: boolean;
  };
  location?: string;
  phoneNumber?: string | number;
  disable?: boolean;
  avgRating?: number;
  totalRating?: number;
  premium?: boolean;
  viewers?: Array<{
    user: string;
    viewedAt: Date;
    duration: number;
  }>;
  city?: string;
  categoryId?: Array<{ _id: string; name?: string; type?: string; disable?: boolean; createdAt?: string; updatedAt?: string; categoryImage?: string }> | { _id: string; name?: string; type?: string; disable?: boolean; createdAt?: string; updatedAt?: string; categoryImage?: string };
  locationCorrdination?: {
    type: string;
    coordinates: [number, number];
  };
  verified?: boolean;
  status?: string;
  sold?: boolean;
  user?: {
    _id: string;
    name?: string;
    phoneNumber?: string;
    permissions?: any[];
    otp?: string;
    role?: string;
    userImage?: string;
    favoriteProperty?: string[];
    isOnline?: boolean;
    createPropertyLimit?: number;
    hasUsedFreePlan?: boolean;
    disable?: boolean;
    isRoleActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
    currentSubscription?: string;
    subscriptionExpiry?: string;
    email?: string;
  };
};

type CategoryItem = {
  _id: string;
  name?: string;
};

type CityItem = {
  _id: string;
  name?: string;
};

type PropertiesApiResponse = {
  success: boolean;
  message?: string;
  total?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
  data?: PropertyItem[];
};

interface PropertyFormData {
  listingType: string;
  title: string;
  propertyCategory: string;
  area: string;
  rentPrice: string;
  price: string;
  rentType: string;
  negotialble: string;
  bedRoom: string;
  bathRoom: string;
  balconies: string;
  buildUpAreaValue: string;
  buildUpAreaUnit: string;
  plotSizeValue: string;
  plotSizeUnit: string;
  floorNo: string;
  totalFloor: string;
  preferanceAll: boolean;
  preferanceGirl: boolean;
  preferanceBoy: boolean;
  preferanceFamily: boolean;
  preferanceStudent: boolean;
  preferanceBank: boolean;
  description: string;
  instruction: string;
  carPraking: string;
  garageSize: string;
  facing: string;
  buildYear: string;
  furnished: string;
  appliancesFridge: boolean;
  appliancesTv: boolean;
  appliancesAc: boolean;
  appliancesGym: boolean;
  appliancesShower: boolean;
  appliancesTvCabel: boolean;
  facilitiesParkingLot: boolean;
  facilitiesGym: boolean;
  facilitiesPatAllowed: boolean;
  facilitiesGarden: boolean;
  facilitiesPark: boolean;
  location: string;
  phoneNumber: string;
  disable: boolean;
  thumbNail: File | string | null;
  images: Array<File | string> | null;
  city: string;
  lat: string;
  lng: string;
  premium: boolean;
  status: string;
}

const PropertiesList = () => {
  const dispatch = useDispatch();

  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingProperty, setEditingProperty] = useState<PropertyItem | null>(
    null
  );
  const [togglingPropertyIds, setTogglingPropertyIds] = useState<
    Record<string, boolean>
  >({});

  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [cities, setCities] = useState<CityItem[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  const initialFormData: PropertyFormData = {
    listingType: "",
    title: "",
    propertyCategory: "",
    area: "",
    rentPrice: "",
    price: "",
    rentType: "",
    negotialble: "",
    bedRoom: "",
    bathRoom: "",
    balconies: "",
    buildUpAreaValue: "",
    buildUpAreaUnit: "SQFT",
    plotSizeValue: "",
    plotSizeUnit: "SQFT",
    floorNo: "",
    totalFloor: "",
    preferanceAll: false,
    preferanceGirl: false,
    preferanceBoy: false,
    preferanceFamily: false,
    preferanceStudent: false,
    preferanceBank: false,
    description: "",
    instruction: "",
    carPraking: "",
    garageSize: "",
    facing: "",
    buildYear: "",
    furnished: "",
    appliancesFridge: false,
    appliancesTv: false,
    appliancesAc: false,
    appliancesGym: false,
    appliancesShower: false,
    appliancesTvCabel: false,
    facilitiesParkingLot: false,
    facilitiesGym: false,
    facilitiesPatAllowed: false,
    facilitiesGarden: false,
    facilitiesPark: false,
    location: "",
    phoneNumber: "",
    disable: false,
    thumbNail: null,
    images: null,
    city: "",
    lat: "",
    lng: "",
    premium: false,
    status: "",
  };

  const [formData, setFormData] = useState<PropertyFormData>(initialFormData);

  useEffect(() => {
    dispatch(setPageTitle("Properties"));
  }, [dispatch]);

  // Fetch categories
  useEffect(() => {
    const controller = new AbortController();
    const fetchCategories = async () => {
      setCategoriesLoading(true);
      setCategoriesError(null);
      try {
        const token = localStorage.getItem("token");
        const url =
          `${BASE_URL}/getAllCategory?page=1&limit=1000`;

        const res = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch categories: ${res.status}`);
        }

        const json = await res.json();
        if (!json?.success) {
          throw new Error(json?.message || "Failed to fetch categories");
        }

        const data = Array.isArray(json.data) ? json.data : [];
        setCategories(data.map((c: any) => ({ _id: c._id, name: c.name })));
      } catch (err) {
        if ((err as Error)?.name !== "AbortError") {
          setCategoriesError(
            (err as Error)?.message || "Failed to fetch categories"
          );
        }
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();

    return () => controller.abort();
  }, []);

  // Fetch cities
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const fetchCities = async () => {
  //     setCitiesLoading(true);
  //     setCitiesError(null);
  //     try {
  //       const token = localStorage.getItem("token");
  //       const url =
  //         "https://api.property.framekarts.com/api/v1/getAllCity?page=1&limit=1000";

  //       const res = await fetch(url, {
  //         method: "GET",
  //         headers: {
  //           Accept: "application/json",
  //           ...(token ? { Authorization: `Bearer ${token}` } : {}),
  //         },
  //         signal: controller.signal,
  //       });

  //       if (!res.ok) {
  //         throw new Error(`Failed to fetch cities: ${res.status}`);
  //       }

  //       const json = await res.json();
  //       if (!json?.success) {
  //         throw new Error(json?.message || "Failed to fetch cities");
  //       }

  //       const data = Array.isArray(json.data) ? json.data : [];
  //       setCities(data.map((c: any) => ({ _id: c._id, name: c.name })));
  //     } catch (err) {
  //       if ((err as Error)?.name !== "AbortError") {
  //         setCitiesError((err as Error)?.message || "Failed to fetch cities");
  //       }
  //     } finally {
  //       setCitiesLoading(false);
  //     }
  //   };

  //   fetchCities();

  //   return () => controller.abort();
  // }, []);

  const controller = new AbortController();
  useEffect(() => {
    fetchProperties();
  }, [page, limit]);

  const fetchProperties = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");

      const url = new URL(
        `${BASE_URL}/getAllProperties`
      );
      url.searchParams.set("page", String(page));
      url.searchParams.set("limit", String(limit));

      const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: controller.signal,
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
        throw new Error(`Failed to fetch properties (${res.status})${suffix}`);
      }

      const json = (await res.json()) as PropertiesApiResponse;
      if (!json?.success) {
        throw new Error(json?.message || "Failed to fetch properties");
      }

      setProperties(Array.isArray(json?.data) ? json.data : []);
      setTotalPages(json?.totalPages || 1);
    } catch (err) {
      if ((err as Error)?.name !== "AbortError") {
        setError((err as Error)?.message || "Failed to fetch properties");
      }
    } finally {
      setLoading(false);
    }
  };
  const onToggleSold = async (property: PropertyItem) => {
    const nextSold = !Boolean(property.disable || property.sold);

    setError(null);
    setTogglingPropertyIds((prev) => ({ ...prev, [property._id]: true }));
    setProperties((prev) =>
      prev.map((p) =>
        p._id === property._id ? { ...p, disable: nextSold } : p
      )
    );

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        `${BASE_URL}/disableProperty/${property._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        }
      );

      if (!res.ok) {
        throw new Error(`Failed to update property status: ${res.status}`);
      }

      const json = await res.json();
      if (!json?.success) {
        throw new Error(json?.message || "Failed to update property status");
      }

      toast.fire({
        icon: "success",
        title: nextSold ? "Property disabled" : "Property enabled",
      });
    } catch (err) {
      setProperties((prev) =>
        prev.map((p) =>
          p._id === property._id ? { ...p, disable: property.disable } : p
        )
      );
      setError((err as Error)?.message || "Failed to update property status");

      toast.fire({
        icon: "error",
        title: (err as Error)?.message || "Failed to update property status",
      });
    } finally {
      setTogglingPropertyIds((prev) => {
        const next = { ...prev };
        delete next[property._id];
        return next;
      });
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsEditMode(false);
    setEditingProperty(null);
    setFormData(initialFormData);
  };      

  const handleEdit = (property: PropertyItem) => {
    setIsOpen(true);
    setIsEditMode(true);
    setEditingProperty(property);

    // Handle categoryId which can be an array or object
    let categorId = "";
    if (property.categoryId) {
      if (Array.isArray(property.categoryId) && property.categoryId.length > 0) {
        categorId = property.categoryId[0]._id || "";
      } else if (typeof property.categoryId === "object" && "_id" in property.categoryId) {
        categorId = property.categoryId._id || "";
      }
    } else if (property.propertyCategory && typeof property.propertyCategory === "object") {
      categorId = (property.propertyCategory as any)._id || "";
    }

    setFormData({
      listingType: property.listingType || "",
      title: property.title || "",
      propertyCategory: categorId,
      area: property.area || "",
      rentPrice: property.rentPrice?.toString() || "",
      price: property.price?.toString() || "",
      rentType: property.rentType || "",
      negotialble: property.negotialble || "",
      bedRoom: property.bedRoom?.toString() || "",
      bathRoom: property.bathRoom?.toString() || "",
      balconies: property.balconies || "",
      buildUpAreaValue: property.buildUpArea?.value?.toString() || "",
      buildUpAreaUnit: property.buildUpArea?.unit || "SQFT",
      plotSizeValue: property.plotSize?.value?.toString() || "",
      plotSizeUnit: property.plotSize?.unit || "SQFT",
      floorNo: property.floorNo?.toString() || "",
      totalFloor: property.totalFloor?.toString() || "",
      preferanceAll: property.preferance?.all || false,
      preferanceGirl: property.preferance?.girl || false,
      preferanceBoy: property.preferance?.boy || false,
      preferanceFamily: property.preferance?.family || false,
      preferanceStudent: property.preferance?.student || false,
      preferanceBank: property.preferance?.bank || false,
      description: property.description || "",
      instruction: property.instruction || "",
      carPraking: property.carPraking || "",
      garageSize: property.garageSize?.toString() || "",
      facing: property.facing || "",
      buildYear: property.buildYear || "",
      furnished: property.furnished || "",
      appliancesFridge: property.appliances?.fridge || false,
      appliancesTv: property.appliances?.tv || false,
      appliancesAc: property.appliances?.ac || false,
      appliancesGym: property.appliances?.gym || false,
      appliancesShower: property.appliances?.shower || false,
      appliancesTvCabel: property.appliances?.tvCabel || false,
      facilitiesParkingLot: property.facilities?.parkingLot || false,
      facilitiesGym: property.facilities?.gym || false,
      facilitiesPatAllowed: property.facilities?.patAllowed || false,
      facilitiesGarden: property.facilities?.garden || false,
      facilitiesPark: property.facilities?.park || false,
      location: property.location || "",
      phoneNumber: property.phoneNumber?.toString() || "",
      disable: property.disable || false,
      thumbNail: property.thumbnail || null,
      images:
        property.images && Array.isArray(property.images)
          ? property.images
          : null,
      city: property.city || "",
      lat: property.locationCorrdination?.coordinates?.[1]?.toString() || "",
      lng: property.locationCorrdination?.coordinates?.[0]?.toString() || "",
      premium: property.premium || false,
      status: property.status || "",
    });
  };

  const handleDelete = async (propertyId: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `${BASE_URL}/delete/${propertyId}`,
          {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to delete property");
        }

        setProperties((prev) => prev.filter((p) => p._id !== propertyId));

        toast.fire({
          icon: "success",
          title: "Property deleted successfully",
        });
        fetchProperties();
      } catch (err) {
        toast.fire({
          icon: "error",
          title: "Failed to delete property",
        });
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, thumbNail: file }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : null;
    setFormData((prev) => ({ ...prev, images: files }));
  };

  const appendIfExists = (fd: FormData, key: string, value: any) => {
    if (
      value !== undefined &&
      value !== null &&
      value !== "" &&
      !(typeof value === "number" && isNaN(value))
    ) {
      fd.append(key, value.toString());
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataPayload = new FormData();
      const token = localStorage.getItem("token");

      /* ================= BASIC FIELDS ================= */
      appendIfExists(formDataPayload, "listingType", formData.listingType);
      appendIfExists(formDataPayload, "title", formData.title);
      appendIfExists(formDataPayload, "categoryId", formData.propertyCategory);
      appendIfExists(formDataPayload, "area", formData.area);
      appendIfExists(formDataPayload, "rentType", formData.rentType);
      appendIfExists(formDataPayload, "negotialble", formData.negotialble);
      appendIfExists(formDataPayload, "description", formData.description);
      appendIfExists(formDataPayload, "instruction", formData.instruction);
      appendIfExists(formDataPayload, "carPraking", formData.carPraking);
      appendIfExists(formDataPayload, "facing", formData.facing);
      appendIfExists(formDataPayload, "buildYear", formData.buildYear);
      appendIfExists(formDataPayload, "furnished", formData.furnished);
      appendIfExists(formDataPayload, "location", formData.location);
      appendIfExists(formDataPayload, "status", formData.status);
      appendIfExists(formDataPayload, "city", formData.city);

      /* ================= NUMBERS ================= */
      appendIfExists(formDataPayload, "rentPrice", formData.rentPrice);
      appendIfExists(formDataPayload, "price", formData.price);
      appendIfExists(formDataPayload, "bedRoom", formData.bedRoom);
      appendIfExists(formDataPayload, "bathRoom", formData.bathRoom);
      appendIfExists(formDataPayload, "balconies", formData.balconies);
      appendIfExists(formDataPayload, "floorNo", formData.floorNo);
      appendIfExists(formDataPayload, "totalFloor", formData.totalFloor);
      appendIfExists(formDataPayload, "garageSize", formData.garageSize);
      appendIfExists(formDataPayload, "phoneNumber", formData.phoneNumber);

      /* ================= BOOLEANS ================= */
      appendIfExists(formDataPayload, "disable", formData.disable);
      appendIfExists(formDataPayload, "premium", formData.premium);

      /* ================= BUILD UP AREA ================= */
      if (formData.buildUpAreaValue) {
        appendIfExists(
          formDataPayload,
          "buildUpArea[value]",
          formData.buildUpAreaValue
        );
        appendIfExists(
          formDataPayload,
          "buildUpArea[unit]",
          formData.buildUpAreaUnit
        );
      }

      /* ================= PLOT SIZE ================= */
      if (formData.plotSizeValue) {
        appendIfExists(
          formDataPayload,
          "plotSize[value]",
          formData.plotSizeValue
        );
        appendIfExists(
          formDataPayload,
          "plotSize[unit]",
          formData.plotSizeUnit
        );
      }

      /* ================= PREFERENCES ================= */
      formDataPayload.append("preferance[all]", String(formData.preferanceAll));
      formDataPayload.append(
        "preferance[girl]",
        String(formData.preferanceGirl)
      );
      formDataPayload.append("preferance[boy]", String(formData.preferanceBoy));
      formDataPayload.append(
        "preferance[family]",
        String(formData.preferanceFamily)
      );
      formDataPayload.append(
        "preferance[student]",
        String(formData.preferanceStudent)
      );
      formDataPayload.append(
        "preferance[bank]",
        String(formData.preferanceBank)
      );

      /* ================= APPLIANCES ================= */
      formDataPayload.append(
        "appliances[fridge]",
        String(formData.appliancesFridge)
      );
      formDataPayload.append("appliances[tv]", String(formData.appliancesTv));
      formDataPayload.append("appliances[ac]", String(formData.appliancesAc));
      formDataPayload.append("appliances[gym]", String(formData.appliancesGym));
      formDataPayload.append(
        "appliances[shower]",
        String(formData.appliancesShower)
      );
      formDataPayload.append(
        "appliances[tvCabel]",
        String(formData.appliancesTvCabel)
      );

      /* ================= FACILITIES ================= */
      formDataPayload.append(
        "facilities[parkingLot]",
        String(formData.facilitiesParkingLot)
      );
      formDataPayload.append("facilities[gym]", String(formData.facilitiesGym));
      formDataPayload.append(
        "facilities[patAllowed]",
        String(formData.facilitiesPatAllowed)
      );
      formDataPayload.append(
        "facilities[garden]",
        String(formData.facilitiesGarden)
      );
      formDataPayload.append(
        "facilities[park]",
        String(formData.facilitiesPark)
      );

      /* ================= LOCATION COORDINATES ================= */
      if (formData.lat && formData.lng) {
        formDataPayload.append("locationCorrdination[type]", "Point");
        formDataPayload.append("lng", formData.lng);
        formDataPayload.append("lat", formData.lat);
      }

      /* ================= FILES ================= */
      if (formData.thumbNail && typeof formData.thumbNail !== "string") {
        formDataPayload.append("thumbnail", formData.thumbNail);
      }
      formDataPayload.append('role', 'ADMIN');

      if (formData.images?.length) {
        formData.images.forEach((img) => {
          if (typeof img !== "string") {
            formDataPayload.append("images", img);
          }
        });
      }

      /* ================= API CALL ================= */
      const url =
        isEditMode && editingProperty
          ? `${BASE_URL}/updateProperty/${editingProperty._id}`
          : `${BASE_URL}/addProperty`;

      const response = await fetch(url, {
        method: isEditMode ? "PUT" : "POST",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: formDataPayload,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message);

      toast.fire({
        icon: "success",
        title: isEditMode
          ? "Property updated successfully"
          : "Property added successfully",
      });
      fetchProperties();
      setIsOpen(false);
    } catch (error: any) {
      console.error(error);
      toast.fire({
        icon: "error",
        title: error.message || "Something went wrong",
      });
    }
  };
  console.log(properties);
  return (
    <div>
      <div className="panel">
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-semibold text-lg dark:text-white-light">
            Properties
          </h5>
          <div className="relative">
            <button className="btn btn-primary" onClick={handleOpen}>
              + Add Properties
            </button>
            {isOpen && (
              <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
                <div className="bg-white w-full max-w-3xl rounded-xl shadow-xl p-6 overflow-y-auto max-h-[90vh]">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">
                      {isEditMode ? "Edit Property" : "Add Property Listing"}
                    </h2>
                    <X
                      className="h-6 w-6 cursor-pointer"
                      onClick={() => {
                        setIsOpen(false);
                        setIsEditMode(false);
                        setEditingProperty(null);
                        setFormData(initialFormData);
                      }}
                    />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Listing Type */}
                      <div>
                        <label className="label">Listing Type *</label>
                        <select
                          name="listingType"
                          value={formData.listingType}
                          onChange={handleChange}
                          className="input"
                          required
                        >
                          <option value="">Select type</option>
                          <option value="RENT">Rent</option>
                          <option value="SALE">Sale</option>
                          <option value="NEW_PROJECT">New Project</option>
                        </select>
                      </div>

                      {/* Title */}
                      <div>
                        <label className="label">Title *</label>
                        <input
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="input"
                          required
                        />
                      </div>

                      {/* Property Category */}
                      <div>
                        <label className="label">Property Category *</label>
                        <select
                          name="propertyCategory"
                          value={formData.propertyCategory}
                          onChange={handleChange}
                          className="input"
                          required
                        >
                          <option value="">
                            {categoriesLoading
                              ? "Loading..."
                              : "Select category"}
                          </option>
                          {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                              {cat.name || cat._id}
                            </option>
                          ))}
                        </select>
                        {categoriesError && (
                          <div className="text-danger text-sm mt-1">
                            {categoriesError}
                          </div>
                        )}
                      </div>

                      {/* Area */}
                      <div>
                        <label className="label">Area</label>
                        <select
                          name="area"
                          value={formData.area}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select area type</option>
                          <option value="1BHK">1BHK</option>
                          <option value="2BHK">2BHK</option>
                          <option value="3BHK">3BHK</option>
                          <option value="4BHK">4BHK</option>
                        </select>
                      </div>

                      {/* Rent Price */}
                      <div>
                        <label className="label">Rent Price</label>
                        <input
                          name="rentPrice"
                          type="number"
                          value={formData.rentPrice}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Sale Price */}
                      <div>
                        <label className="label">Sale Price</label>
                        <input
                          name="price"
                          type="number"
                          value={formData.price}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Rent Type */}
                      <div>
                        <label className="label">Rent Type</label>
                        <select
                          name="rentType"
                          value={formData.rentType}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select type</option>
                          <option value="MONTHLY">Monthly</option>
                          <option value="YEARLY">Yearly</option>
                        </select>
                      </div>

                      {/* Negotiable */}
                      <div>
                        <label className="label">Negotiable</label>
                        <select
                          name="negotialble"
                          value={formData.negotialble}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select</option>
                          <option value="NEGOTIABLE">Negotiable</option>
                          <option value="NONNEGOTIABLE">Non-Negotiable</option>
                        </select>
                      </div>

                      {/* Bedrooms */}
                      <div>
                        <label className="label">Bedrooms</label>
                        <select
                          name="bedRoom"
                          value={formData.bedRoom}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      {/* Bathrooms */}
                      <div>
                        <label className="label">Bathrooms</label>
                        <select
                          name="bathRoom"
                          value={formData.bathRoom}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      {/* Balconies */}
                      <div>
                        <label className="label">Balconies</label>
                        <select
                          name="balconies"
                          value={formData.balconies}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </div>

                      {/* Build Up Area Value */}
                      <div>
                        <label className="label">Build Up Area Value</label>
                        <input
                          name="buildUpAreaValue"
                          type="number"
                          value={formData.buildUpAreaValue}
                          onChange={handleChange}
                          className="input"
                          placeholder="Enter value"
                        />
                      </div>

                      {/* Build Up Area Unit */}
                      <div>
                        <label className="label">Build Up Area Unit</label>
                        <select
                          name="buildUpAreaUnit"
                          value={formData.buildUpAreaUnit}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="SQFT">SQFT</option>
                          <option value="SQM">SQM</option>
                        </select>
                      </div>

                      {/* Plot Size Value */}
                      <div>
                        <label className="label">Plot Size Value</label>
                        <input
                          name="plotSizeValue"
                          type="number"
                          value={formData.plotSizeValue}
                          onChange={handleChange}
                          className="input"
                          placeholder="Enter value"
                        />
                      </div>

                      {/* Plot Size Unit */}
                      <div>
                        <label className="label">Plot Size Unit</label>
                        <select
                          name="plotSizeUnit"
                          value={formData.plotSizeUnit}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="SQFT">SQFT</option>
                          <option value="SQM">SQM</option>
                        </select>
                      </div>

                      {/* Floor No */}
                      <div>
                        <label className="label">Floor No</label>
                        <input
                          name="floorNo"
                          type="number"
                          value={formData.floorNo}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Total Floor */}
                      <div>
                        <label className="label">Total Floors</label>
                        <input
                          name="totalFloor"
                          type="number"
                          value={formData.totalFloor}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Car Parking */}
                      <div>
                        <label className="label">Car Parking</label>
                        <select
                          name="carPraking"
                          value={formData.carPraking}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select</option>
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </select>
                      </div>

                      {/* Garage Size */}
                      <div>
                        <label className="label">Garage Size</label>
                        <input
                          name="garageSize"
                          type="number"
                          value={formData.garageSize}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Facing */}
                      <div>
                        <label className="label">Facing Direction</label>
                        <select
                          name="facing"
                          value={formData.facing}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select direction</option>
                          <option value="EAST">East</option>
                          <option value="WEST">West</option>
                          <option value="NORTH">North</option>
                          <option value="SOUTH">South</option>
                        </select>
                      </div>

                      {/* Build Year */}
                      <div>
                        <label className="label">Build Year</label>
                        <input
                          name="buildYear"
                          value={formData.buildYear}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Furnished */}
                      <div>
                        <label className="label">Furnished</label>
                        <select
                          name="furnished"
                          value={formData.furnished}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select</option>
                          <option value="FURNISHED">Furnished</option>
                          <option value="SEMIFURNISHED">Semi-Furnished</option>
                          <option value="UNFURNISHED">Unfurnished</option>
                        </select>
                      </div>

                      {/* City */}
                      {/* <div>
                        <label className="label">City</label>
                        <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">{citiesLoading ? "Loading..." : "Select city"}</option>
                          {cities.map((city) => (
                            <option key={city._id} value={city._id}>
                              {city.name || city._id}
                            </option>
                          ))}
                        </select>
                        {citiesError && <div className="text-danger text-sm mt-1">{citiesError}</div>}
                      </div> */}

                      {/* Phone Number */}
                      <div>
                        <label className="label">Phone Number</label>
                        <input
                          name="phoneNumber"
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Location */}
                      <div>
                        <label className="label">Location</label>
                        <input
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Latitude */}
                      <div>
                        <label className="label">Latitude</label>
                        <input
                          name="lat"
                          value={formData.lat}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Longitude */}
                      <div>
                        <label className="label">Longitude</label>
                        <input
                          name="lng"
                          value={formData.lng}
                          onChange={handleChange}
                          className="input"
                        />
                      </div>

                      {/* Premium */}
                      <div>
                        <label className="label">Premium Property</label>
                        <select
                          name="premium"
                          value={formData.premium ? "true" : "false"}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              premium: e.target.value === "true",
                            }))
                          }
                          className="input"
                        >
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </select>
                      </div>

                      {/* Status */}
                      <div>
                        <label className="label">Status</label>
                        <select
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                          className="input"
                        >
                          <option value="">Select status</option>
                          <option value="TOP">Top</option>
                          <option value="BOTTOM">Bottom</option>
                        </select>
                      </div>

                      {/* Disable */}
                      <div>
                        <label className="label">Disabled</label>
                        <select
                          name="disable"
                          value={formData.disable ? "true" : "false"}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              disable: e.target.value === "true",
                            }))
                          }
                          className="input"
                        >
                          <option value="false">No</option>
                          <option value="true">Yes</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferences Section */}
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Preferences</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="preferanceAll"
                            checked={formData.preferanceAll}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">All</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="preferanceGirl"
                            checked={formData.preferanceGirl}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Girl</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="preferanceBoy"
                            checked={formData.preferanceBoy}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Boy</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="preferanceFamily"
                            checked={formData.preferanceFamily}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Family</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="preferanceStudent"
                            checked={formData.preferanceStudent}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Student</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="preferanceBank"
                            checked={formData.preferanceBank}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Bank</label>
                        </div>
                      </div>
                    </div>

                    {/* Appliances Section */}
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Appliances</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="appliancesFridge"
                            checked={formData.appliancesFridge}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Fridge</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="appliancesTv"
                            checked={formData.appliancesTv}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">TV</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="appliancesAc"
                            checked={formData.appliancesAc}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">AC</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="appliancesGym"
                            checked={formData.appliancesGym}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Gym</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="appliancesShower"
                            checked={formData.appliancesShower}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Shower</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="appliancesTvCabel"
                            checked={formData.appliancesTvCabel}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">TV Cable</label>
                        </div>
                      </div>
                    </div>

                    {/* Facilities Section */}
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-3">Facilities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="facilitiesParkingLot"
                            checked={formData.facilitiesParkingLot}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Parking Lot</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="facilitiesGym"
                            checked={formData.facilitiesGym}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Gym</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="facilitiesPatAllowed"
                            checked={formData.facilitiesPatAllowed}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Pet Allowed</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="facilitiesGarden"
                            checked={formData.facilitiesGarden}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Garden</label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            name="facilitiesPark"
                            checked={formData.facilitiesPark}
                            onChange={handleChange}
                            className="form-checkbox"
                          />
                          <label className="ml-2">Park</label>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="label">Description</label>
                      <textarea
                        name="description"
                        rows={4}
                        value={formData.description}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>

                    {/* Instruction */}
                    <div>
                      <label className="label">Instruction</label>
                      <textarea
                        name="instruction"
                        rows={3}
                        value={formData.instruction}
                        onChange={handleChange}
                        className="input"
                      />
                    </div>

                    {/* Thumbnail Upload */}
                    <div>
                      <label className="label">Thumbnail Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleThumbnailChange}
                        className="w-full"
                      />
                      {formData.thumbNail && (
                        <img
                          src={
                            typeof formData.thumbNail === "string"
                              ? formData.thumbNail
                              : URL.createObjectURL(formData.thumbNail)
                          }
                          alt="Thumbnail Preview"
                          className="mt-2 h-32 rounded-lg object-cover"
                        />
                      )}
                    </div>

                    {/* Multiple Images */}
                    <div>
                      <label className="label">Property Images</label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImagesChange}
                        className="w-full"
                      />
                      {formData.images && (
                        <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-2">
                          {formData.images.map((img, idx) => {
                            const src =
                              typeof img === "string" ? img : URL.createObjectURL(img);
                            return (
                              <img
                                key={idx}
                                src={src}
                                className="h-24 w-full object-cover rounded-lg"
                                alt={`Property image ${idx + 1}`}
                              />
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4 border-t">
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          setIsEditMode(false);
                          setEditingProperty(null);
                          setFormData(initialFormData);
                        }}
                        className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                      >
                        {isEditMode ? "Update Property" : "Add Property"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {error && <div className="text-danger mb-4">{error}</div>}

        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Image</th>
                <th>Title</th>
                <th>Listing</th>
                <th>Category</th>
                <th>Location</th>
                <th>Area</th>
                <th>Rent</th>
                <th>Bed/Bath</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={11} className="text-center py-8">
                    <div className="flex justify-center items-center">
                      <div className="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                    </div>
                  </td>
                </tr>
              ) : properties.length === 0 ? (
                <tr>
                  <td colSpan={11} className="text-center py-8">
                    No properties found
                  </td>
                </tr>
              ) : (
                properties.map((row, index) => (
                  <tr key={row._id}>
                    <td>{(page - 1) * limit + index + 1}</td>
                    <td>
                      {row.thumbnail && (
                        <img
                          src={row.thumbnail}
                          alt={row.title}
                          className="w-14 h-10 rounded object-cover"
                        />
                      )}
                    </td>
                    <td>
                      <div className="whitespace-nowrap font-medium">
                        {row?.title || "-"}
                      </div>
                    </td>
                    <td>{row?.listingType || "-"}</td>
                    <td>{typeof row?.propertyCategory === "object" ? row?.propertyCategory?.name : row?.propertyCategory || "-"}</td>
                    <td>{row?.location || "-"}</td>
                    <td>{row?.area || "-"}</td>
                    <td>
                      {typeof row.rentPrice === "number" ? (
                        <div className="whitespace-nowrap font-semibold">
                          ₹ {row?.rentPrice.toLocaleString()}{" "}
                          {row?.rentType ? `/${row?.rentType}` : ""}
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      {row?.bedRoom || row?.bathRoom ? (
                        <div className="whitespace-nowrap">
                          {row?.bedRoom || "0"} Beds / {row?.bathRoom || "0"}{" "}
                          Baths
                        </div>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td>
                      <button
                        type="button"
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          row?.disable ? "bg-red-500" : "bg-green-500"
                        } ${
                          Boolean(togglingPropertyIds[row?._id])
                            ? "opacity-60 cursor-not-allowed"
                            : "cursor-pointer"
                        }`}
                        onClick={() => onToggleSold(row)}
                        disabled={Boolean(togglingPropertyIds[row?._id])}
                        aria-pressed={!row?.disable}
                      >
                        <span
                          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
                            row?.disable ? "translate-x-0.5" : "translate-x-5"
                          }`}
                        />
                      </button>
                    </td>
                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(row)}
                          className="btn btn-sm btn-outline-primary"
                          title="Edit property"
                        >
                          <Edit className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(row._id)}
                          className="btn btn-sm btn-outline-danger"
                          title="Delete property"
                        >
                          <Trash2 className="h-4 w-4" />
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
    </div>
  );
};

export default PropertiesList;
