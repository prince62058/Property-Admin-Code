import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../store/themeConfigSlice";
import Swal from "sweetalert2";
import { X, Edit, Trash2, Calendar, MapPin, Phone, Download } from "lucide-react";
import { BASE_URL } from "../config";

const toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2500,
  showCloseButton: true,
});

// Dynamic Field Type
type DynamicField = {
  _id?: string;
  title: string;
  key: string;
  fieldType: string;
  options: string[];
  required: boolean;
  icon?: string;
};

// Property Item type with mandatory fields
type PropertyItem = {
  _id: string;
  title?: string;
  thumbnail?: string;
  categoryName: string;
  images?: string[];
  negotialble: string;
  rentType: string;
  facing: string;
  listingType?: string;
  categoryId?:
  | Array<{
    _id: string;
    name?: string;
    dynamicFields?: DynamicField[];
  }>
  | {
    _id: string;
    name?: string;
    dynamicFields?: DynamicField[];
  };
  price?: number;
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
  status: string;
  garageSize?: number;
  buildYear?: string;
  amenities?: Record<string, boolean>; // For amenities
  location?: string;
  phoneNumber?: string;
  locationCorrdination?: {
    type: string;
    coordinates: [number, number];
  };
  disable?: boolean;
  createdAt?: string;
  dynamicFieldsData?: Record<string, any>;
  sold?: boolean;
};

type CategoryItem = {
  _id: string;
  name?: string;
  dynamicFields?: DynamicField[];
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
  // Mandatory static fields
  listingType: string;
  categoryName: string;
  title: string;
  propertyCategory: string;
  price: string;
  status: string;
  floorNo: string;
  totalFloor: string;
  facing: string;
  preferanceAll: boolean;
  negotialble: string;
  rentType: string;
  preferanceGirl: boolean;
  preferanceBoy: boolean;
  preferanceFamily: boolean;
  preferanceStudent: boolean;
  preferanceBank: boolean;
  description: string;
  instruction: string;
  garageSize: string;
  buildYear: string;
  amenities: Record<string, boolean>;
  location: string;
  phoneNumber: string;
  lat: string;
  lng: string;
  disable: boolean;

  // Files
  thumbNail: File | string | null;
  images: Array<File | string> | null;
  brochure: File | string | null;

  // Dynamic fields values
  dynamicFields: Record<string, any>;
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
    null,
  );
  const [togglingPropertyIds, setTogglingPropertyIds] = useState<
    Record<string, boolean>
  >({});

  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState<string | null>(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (debouncedSearch !== searchQuery) {
        setDebouncedSearch(searchQuery);
        setPage(1); // Reset to first page on new search
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [searchQuery, debouncedSearch]);

  // Store dynamic fields for selected category
  const [selectedCategoryDynamicFields, setSelectedCategoryDynamicFields] =
    useState<DynamicField[]>([]);

  // Helper function to check if field type is select type
  const isSelectField = (fieldType: string) => {
    return ["SINGLE_SELECT", "MULTI_SELECT", "DROPDOWN"].includes(fieldType);
  };

  // Default amenities list
  const defaultAmenities = [
    "wifi",
    "parking",
    "gym",
    "pool",
    "elevator",
    "security",
    "cctv",
    "powerBackup",
    "waterSupply",
    "garden",
    "playArea",
    "clubHouse",
  ];

  const initialFormData: PropertyFormData = {
    // Mandatory static fields
    listingType: "SALE",
    title: "",
    propertyCategory: "",
    price: "",
    floorNo: "",
    negotialble: "",
    totalFloor: "",
    categoryName: "",
    facing: "",
    rentType: "",
    preferanceAll: false,
    preferanceGirl: false,
    preferanceBoy: false,
    preferanceFamily: false,
    preferanceStudent: false,
    preferanceBank: false,
    description: "",
    instruction: "",
    garageSize: "",
    buildYear: "",
    amenities: {},
    location: "",
    phoneNumber: "",
    lat: "",
    lng: "",
    disable: true,
    status: "",

    // Files
    thumbNail: null,
    images: null,
    brochure: null,

    // Dynamic fields
    dynamicFields: {},
  };

  const [formData, setFormData] = useState<PropertyFormData>(initialFormData);

  // Initialize amenities object on component mount
  useEffect(() => {
    const initialAmenities: Record<string, boolean> = {};
    defaultAmenities.forEach((amenity) => {
      initialAmenities[amenity] = false;
    });
    setFormData((prev) => ({
      ...prev,
      amenities: initialAmenities,
    }));
  }, []);

  useEffect(() => {
    dispatch(setPageTitle("Properties"));
  }, [dispatch]);

  // Fetch categories with dynamic fields
  useEffect(() => {
    const controller = new AbortController();
    const fetchCategories = async () => {
      setCategoriesLoading(true);
      setCategoriesError(null);
      try {
        const token = localStorage.getItem("token");
        const url = `${BASE_URL}/getAllCategory?page=1&limit=1000`;

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
        setCategories(
          data.map((c: any) => ({
            _id: c._id,
            name: c.name,
            dynamicFields: c.dynamicFields || [],
          })),
        );
      } catch (err) {
        if ((err as Error)?.name !== "AbortError") {
          setCategoriesError(
            (err as Error)?.message || "Failed to fetch categories",
          );
        }
      } finally {
        setCategoriesLoading(false);
      }
    };

    fetchCategories();

    return () => controller.abort();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchProperties(controller.signal);
    return () => controller.abort();
  }, [page, limit, debouncedSearch]);

  const fetchProperties = async (signal?: AbortSignal) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem("token");

      const url = new URL(`${BASE_URL}/getAllProperties`);
      url.searchParams.set("page", String(page));
      url.searchParams.set("limit", String(limit));
      url.searchParams.set("sort", 'recent');

      if (debouncedSearch) {
        url.searchParams.set("search", debouncedSearch);
      }

      console.log('Fetching properties with URL:', url.toString());

      const res = await fetch(url.toString(), {
        method: "GET",
        headers: {
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        signal: signal,
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

      const fetchedProperties = Array.isArray(json?.data) ? json.data : [];
      const sortedProperties = fetchedProperties.sort((a, b) => {
        const aCreated = a.createdAt || "";
        const bCreated = b.createdAt || "";
        if (aCreated > bCreated) return -1;
        if (aCreated < bCreated) return 1;
        return 0;
      });

      setProperties(sortedProperties);
      setTotalPages(json?.totalPages || 1);
    } catch (err) {
      if ((err as Error)?.name !== "AbortError") {
        setError((err as Error)?.message || "Failed to fetch properties");
      }
    } finally {
      setLoading(false);
    }
  };

  const onToggleDisable = async (property: PropertyItem) => {
    const nextDisable = !Boolean(property.disable);

    setError(null);
    setTogglingPropertyIds((prev) => ({ ...prev, [property._id]: true }));
    setProperties((prev) =>
      prev.map((p) =>
        p._id === property._id ? { ...p, disable: nextDisable } : p,
      ),
    );

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${BASE_URL}/disableProperty/${property._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });

      if (!res.ok) {
        throw new Error(`Failed to update property status: ${res.status}`);
      }

      const json = await res.json();
      if (!json?.success) {
        throw new Error(json?.message || "Failed to update property status");
      }

      toast.fire({
        icon: "success",
        title: nextDisable ? "Property disabled" : "Property enabled",
      });
    } catch (err) {
      setProperties((prev) =>
        prev.map((p) =>
          p._id === property._id ? { ...p, disable: property.disable } : p,
        ),
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


  const extractDynamicFieldsData = (property: PropertyItem) => {
    // First check if the property has dynamicValues directly (from API response)
    if ((property as any).dynamicValues) {
      return (property as any).dynamicValues;
    }

    // Then check dynamicFieldsData
    if (property.dynamicFieldsData) {
      return property.dynamicFieldsData;
    }

    const dynamicFieldsData: Record<string, any> = {};

    const categoryWithFields = categories.find((cat) => {
      if (property.categoryId) {
        if (Array.isArray(property.categoryId)) {
          return property.categoryId.some((c) => c._id === cat._id);
        } else {
          return property.categoryId._id === cat._id;
        }
      }
      return false;
    });

    if (categoryWithFields?.dynamicFields) {
      categoryWithFields.dynamicFields.forEach((field) => {
        const value = (property as any)[field.key];
        if (value !== undefined) {
          dynamicFieldsData[field.key] = value;
        }
      });
    }

    return dynamicFieldsData;
  };
  const handleOpen = () => {
    setIsOpen(true);
    setIsEditMode(false);
    setEditingProperty(null);
    setFormData(initialFormData);
    setSelectedCategoryDynamicFields([]);
  };

  const handleEdit = (property: PropertyItem) => {
    console.log(property)
    setIsOpen(true);
    setIsEditMode(true);
    setEditingProperty(property);

    // Handle categoryId which can be an array or object
    let categoryId = "";
    let categoryDynamicFields: DynamicField[] = [];

    if (property.categoryId) {
      if (
        Array.isArray(property.categoryId) &&
        property.categoryId.length > 0
      ) {
        categoryId = property.categoryId[0]._id || "";
        categoryDynamicFields = property.categoryId[0].dynamicFields || [];
      } else if (
        typeof property.categoryId === "object" &&
        "_id" in property.categoryId
      ) {
        categoryId = property.categoryId._id || "";
        categoryDynamicFields =
          (property.categoryId as any).dynamicFields || [];
      }
    }

    // Set dynamic fields for selected category
    setSelectedCategoryDynamicFields(categoryDynamicFields);

    // Extract dynamic fields data
    const dynamicFieldsData = extractDynamicFieldsData(property);

    // Initialize amenities
    const initialAmenities: Record<string, boolean> = {};
    defaultAmenities.forEach((amenity) => {
      initialAmenities[amenity] = property.amenities?.[amenity] || false;
    });
    let categoryNameValue = "";
    if (property.categoryId) {
      if (
        Array.isArray(property.categoryId) &&
        property.categoryId.length > 0
      ) {
        categoryNameValue = property.categoryId[0].name || "";
      } else if (
        typeof property.categoryId === "object" &&
        "name" in property.categoryId
      ) {
        categoryNameValue = (property.categoryId as any).name || "";
      }
    }

    setFormData({
      listingType: property.listingType || "SALE",
      title: property.title || "",
      propertyCategory: categoryId,
      facing: property.facing,
      price: property.price?.toString() || "",
      floorNo: property.floorNo?.toString() || "",
      negotialble: property.negotialble,
      categoryName: categoryNameValue,
      rentType: property.rentType,
      totalFloor: property.totalFloor?.toString() || "",
      preferanceAll: property.preferance?.all || false,
      preferanceGirl: property.preferance?.girl || false,
      preferanceBoy: property.preferance?.boy || false,
      preferanceFamily: property.preferance?.family || false,
      preferanceStudent: property.preferance?.student || false,
      preferanceBank: property.preferance?.bank || false,
      description: property.description || "",
      instruction: property.instruction || "",
      garageSize: property.garageSize?.toString() || "",
      buildYear: property.buildYear || "",
      amenities: initialAmenities,
      status: property.status,
      location: property.location || "",
      phoneNumber: property.phoneNumber || "",
      lat: property.locationCorrdination?.coordinates?.[1]?.toString() || "",
      lng: property.locationCorrdination?.coordinates?.[0]?.toString() || "",
      disable: property.disable || false,
      thumbNail: property.thumbnail || null,
      images:
        property.images && Array.isArray(property.images)
          ? property.images
          : null,
      dynamicFields: dynamicFieldsData,
      brochure: (property as any).brochure || null,
    });
  };

  // Handle category change - update dynamic fields
  // Handle category change - update dynamic fields
  const handleCategoryChange = (categoryId: string) => {
    const selectedCategory = categories.find((c) => c._id === categoryId);
    const dynamicFields = selectedCategory?.dynamicFields || [];

    setSelectedCategoryDynamicFields(dynamicFields);

    // Reset dynamic fields values when category changes
    const newDynamicFields: Record<string, any> = {};
    dynamicFields.forEach((field) => {
      switch (field.fieldType) {
        case "AREA_INPUT":
          newDynamicFields[field.key] = { value: "", unit: "sq.ft" };
          break;
        case "LENGTH_INPUT":
          newDynamicFields[field.key] = { value: "", unit: "ft" };
          break;
        case "TEXT":
        case "STRING_INPUT":
          newDynamicFields[field.key] = "";
          break;
        case "NUMBER":
        case "INTEGER_INPUT":
          newDynamicFields[field.key] = 0;
          break;
        case "BOOLEAN":
          newDynamicFields[field.key] = false;
          break;
        case "MULTI_SELECT":
          newDynamicFields[field.key] = [];
          break;
        case "SINGLE_SELECT":
        case "DROPDOWN":
          newDynamicFields[field.key] = field.options[0] || "";
          break;
        case "DATE":
          newDynamicFields[field.key] = "";
          break;
        case "FILE":
          newDynamicFields[field.key] = null;
          break;
        default:
          newDynamicFields[field.key] = "";
      }
    });

    setFormData((prev) => ({
      ...prev,
      propertyCategory: categoryId,
      dynamicFields: newDynamicFields, // Completely replace with new values
    }));
  };
  // Handle dynamic field value change
  const handleDynamicFieldChange = (fieldKey: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      dynamicFields: {
        ...prev.dynamicFields,
        [fieldKey]: value,
      },
    }));
  };

  // Handle multi-select dynamic field
  const handleMultiSelectDynamicChange = (
    fieldKey: string,
    option: string,
    checked: boolean,
  ) => {
    setFormData((prev) => {
      const currentValues = prev.dynamicFields[fieldKey] || [];
      let newValues;

      if (checked) {
        newValues = [...currentValues, option];
      } else {
        newValues = currentValues.filter((item: string) => item !== option);
      }

      return {
        ...prev,
        dynamicFields: {
          ...prev.dynamicFields,
          [fieldKey]: newValues,
        },
      };
    });
  };

  // Render dynamic field input based on field type
  // Helper to extract display value from dynamic field value (handles {unit, value} objects)
  const getDynamicFieldDisplayValue = (rawValue: any): string => {
    if (rawValue === null || rawValue === undefined) return "";
    if (typeof rawValue === "object" && !Array.isArray(rawValue) && !(rawValue instanceof File)) {
      return rawValue.value !== undefined ? String(rawValue.value) : "";
    }
    return String(rawValue);
  };

  const getDynamicFieldUnit = (rawValue: any): string => {
    if (rawValue && typeof rawValue === "object" && !Array.isArray(rawValue) && !(rawValue instanceof File)) {
      return rawValue.unit || "";
    }
    return "";
  };

  const renderDynamicFieldInput = (field: DynamicField) => {
    const rawValue = formData.dynamicFields[field.key];
    const displayValue = getDynamicFieldDisplayValue(rawValue);
    const unit = getDynamicFieldUnit(rawValue);

    switch (field.fieldType) {
      case "AREA_INPUT":
      case "LENGTH_INPUT":
        return (
          <div className="flex gap-2 mt-1">
            <input
              type="text"
              className="input"
              value={displayValue}
              onChange={(e) =>
                handleDynamicFieldChange(field.key, {
                  value: e.target.value,
                  unit: unit || (field.fieldType === "AREA_INPUT" ? "sq.ft" : "ft"),
                })
              }
              required={field.required}
              placeholder={`Enter ${field.title.toLowerCase()}`}
            />
            <select
              className="input w-6"
              value={unit || (field.fieldType === "AREA_INPUT" ? "sq.ft" : "ft")}
              onChange={(e) =>
                handleDynamicFieldChange(field.key, {
                  value: displayValue,
                  unit: e.target.value,
                })
              }
            >
              {field.fieldType === "AREA_INPUT" ? (
                <>
                  <option value="sq.ft">sq.ft</option>
                  <option value="sq.m">sq.m</option>
                  <option value="sq.yd">sq.yd</option>
                  <option value="acre">acre</option>
                  <option value="hectare">hectare</option>
                  <option value="cent">cent</option>
                  <option value="bigha">bigha</option>
                  <option value="gunta">gunta</option>
                </>
              ) : (
                <>
                  <option value="ft">ft</option>
                  <option value="m">m</option>
                  <option value="yd">yd</option>
                  <option value="cm">cm</option>
                  <option value="inch">inch</option>
                </>
              )}
            </select>
          </div>
        );

      case "TEXT":
      case "STRING_INPUT":
        return (
          <input
            type="text"
            className="input mt-1"
            value={displayValue}
            onChange={(e) =>
              handleDynamicFieldChange(field.key, e.target.value)
            }
            required={field.required}
            placeholder={`Enter ${field.title.toLowerCase()}`}
          />
        );

      case "NUMBER":
      case "INTEGER_INPUT":
        return (
          <input
            type="number"
            className="input mt-1"
            value={displayValue}
            onChange={(e) =>
              handleDynamicFieldChange(field.key, Number(e.target.value))
            }
            required={field.required}
            placeholder={`Enter ${field.title}`}
          />
        );

      case "BOOLEAN":
        return (
          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              id={`dynamic-${field.key}`}
              className="form-checkbox"
              checked={Boolean(rawValue)}
              onChange={(e) =>
                handleDynamicFieldChange(field.key, e.target.checked)
              }
            />
            <label
              htmlFor={`dynamic-${field.key}`}
              className="ml-2 cursor-pointer"
            >
              {field.title}
            </label>
          </div>
        );

      case "SINGLE_SELECT":
      case "DROPDOWN":
        return (
          <select
            className="input mt-1"
            value={displayValue}
            onChange={(e) =>
              handleDynamicFieldChange(field.key, e.target.value)
            }
            required={field.required}
          >
            <option value="">Select {field.title}</option>
            {field.options.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case "MULTI_SELECT":
        const selectedValues = Array.isArray(rawValue) ? rawValue : [];
        return (
          <div className="space-y-2 mt-1">
            {field.options.map((option, idx) => (
              <div key={idx} className="flex items-center">
                <input
                  type="checkbox"
                  id={`${field.key}-${idx}`}
                  className="form-checkbox"
                  checked={selectedValues.includes(option)}
                  onChange={(e) =>
                    handleMultiSelectDynamicChange(
                      field.key,
                      option,
                      e.target.checked,
                    )
                  }
                />
                <label
                  htmlFor={`${field.key}-${idx}`}
                  className="ml-2 cursor-pointer"
                >
                  {option}
                </label>
              </div>
            ))}
          </div>
        );

      case "DATE":
        return (
          <div className="relative mt-1">
            <input
              type="date"
              className="input"
              value={displayValue}
              onChange={(e) =>
                handleDynamicFieldChange(field.key, e.target.value)
              }
              required={field.required}
            />
            <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        );

      case "FILE":
        return (
          <div className="mt-1">
            <input
              type="file"
              className="w-full"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleDynamicFieldChange(field.key, file);
              }}
              required={field.required}
            />
            {rawValue && (
              <div className="text-xs text-gray-500 mt-1">
                {typeof rawValue === "string" ? (
                  <>
                    Current file:{" "}
                    <a
                      href={rawValue}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      View File
                    </a>
                  </>
                ) : rawValue instanceof File ? (
                  <>New file selected: {rawValue.name}</>
                ) : null}
              </div>
            )}
          </div>
        );

      default:
        return (
          <input
            type="text"
            className="input mt-1"
            value={displayValue}
            onChange={(e) =>
              handleDynamicFieldChange(field.key, e.target.value)
            }
            required={field.required}
          />
        );
    }
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
        const res = await fetch(`${BASE_URL}/delete/${propertyId}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

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
    >,
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

  // const handleAmenityChange = (amenity: string, checked: boolean) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     amenities: {
  //       ...prev.amenities,
  //       [amenity]: checked,
  //     },
  //   }));
  // };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, thumbNail: file }));
  };

  const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : null;
    setFormData((prev) => ({ ...prev, images: files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataPayload = new FormData();
      const token = localStorage.getItem("token");

      /* ================= MANDATORY STATIC FIELDS ================= */
      formDataPayload.append("title", formData.title);
      formDataPayload.append("listingType", formData.listingType);
      formDataPayload.append("categoryId", formData.propertyCategory);
      // formDataPayload.append("categoryName", formData.categoryName);
      formDataPayload.append("price", formData.price);
      // formDataPayload.append("facing", formData.facing);
      // formDataPayload.append("floorNo", formData.floorNo);
      // formDataPayload.append("totalFloor", formData.totalFloor);
      formDataPayload.append("description", formData.description);
      formDataPayload.append("instruction", formData.instruction);
      // formDataPayload.append("garageSize", formData.garageSize);
      // formDataPayload.append("buildYear", formData.buildYear);
      formDataPayload.append("location", formData.location);
      formDataPayload.append("phoneNumber", formData.phoneNumber);
      // formDataPayload.append("disable", String(formData.disable));
      formDataPayload.append("role", "ADMIN");
      formDataPayload.append("lng", formData.lng);
      formDataPayload.append("lat", formData.lat);
      formDataPayload.append("negotialble", formData.negotialble);
      formDataPayload.append("status", formData.status);

      /* ================= PREFERENCES ================= */
      // formDataPayload.append("preferance[all]", String(formData.preferanceAll));
      // formDataPayload.append(
      //   "preferance[girl]",
      //   String(formData.preferanceGirl),
      // );
      // formDataPayload.append("preferance[boy]", String(formData.preferanceBoy));
      // formDataPayload.append(
      //   "preferance[family]",
      //   String(formData.preferanceFamily),
      // );
      // formDataPayload.append(
      //   "preferance[student]",
      //   String(formData.preferanceStudent),
      // );
      // formDataPayload.append(
      //   "preferance[bank]",
      //   String(formData.preferanceBank),
      // );

      /* ================= AMENITIES ================= */
      // Object.entries(formData.amenities).forEach(([amenity, value]) => {
      //   formDataPayload.append(`amenities[${amenity}]`, String(value));
      // });

      /* ================= LOCATION COORDINATES ================= */
      // if (formData.lat && formData.lng) {
      //   formDataPayload.append(
      //     "locationCorrdination",
      //     JSON.stringify({
      //       type: "Point",
      //       coordinates: [Number(formData.lng), Number(formData.lat)],
      //     }),
      //   );
      // }

      const dynamicValues = { ...formData.dynamicFields };

      Object.entries(dynamicValues).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataPayload.append(`dynamicFiles[${key}]`, value);
          delete dynamicValues[key];
        }
      });

      formDataPayload.append("dynamicValues", JSON.stringify(dynamicValues));

      /* ================= FILES ================= */
      if (formData.thumbNail && typeof formData.thumbNail !== "string") {
        formDataPayload.append("thumbnail", formData.thumbNail);
      }

      if (formData.images?.length) {
        formData.images.forEach((img) => {
          if (typeof img !== "string") {
            formDataPayload.append("images", img);
          }
        });
      }

      /* ================= BROCHURE ================= */
      if (formData.brochure && typeof formData.brochure !== "string") {
        formDataPayload.append("brochure", formData.brochure);
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

  const handleDownload = async (endpoint: string, fileType: "pdf" | "excel") => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${BASE_URL}/${endpoint}`, {
        method: "GET",
        headers: {
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      });
      if (!res.ok) {
        throw new Error(`Failed to download ${fileType}`);
      }
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `properties_${new Date().getTime()}.${fileType === "excel" ? "xlsx" : "pdf"
        }`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.fire({ icon: "success", title: "Downloaded successfully" });
    } catch (error) {
      console.error(error);
      toast.fire({ icon: "error", title: `Failed to download ${fileType}` });
    }
  };

  return (
    <div>
      <div className="panel">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-5 gap-4">
          <h5 className="font-semibold text-lg dark:text-white-light">
            Properties
          </h5>
          <div className="relative flex items-center gap-3 w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search properties..."
              className="form-input w-full sm:w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-danger flex items-center gap-2" onClick={() => handleDownload('properties/export-pdf', 'pdf')}>
              <Download className="w-4 h-4" /> PDF
            </button>
            <button className="btn btn-outline-success flex items-center gap-2" onClick={() => handleDownload('properties/export', 'excel')}>
              <Download className="w-4 h-4" /> Excel
            </button>
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
                        setSelectedCategoryDynamicFields([]);
                      }}
                    />
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* SECTION 0: IMAGES */}
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4 text-lg">Images</h3>

                      {/* Thumbnail */}
                      <div className="mb-6">
                        <label className="label">Thumbnail Image *</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleThumbnailChange}
                          className="w-full"
                        />
                        {formData.thumbNail && (
                          <div className="mt-3">
                            <img
                              src={
                                typeof formData.thumbNail === "string"
                                  ? formData.thumbNail
                                  : URL.createObjectURL(formData.thumbNail)
                              }
                              alt="Thumbnail Preview"
                              className="h-48 w-auto rounded-lg object-cover"
                            />
                          </div>
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
                        {formData.images && formData.images.length > 0 && (
                          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-3">
                            {formData.images.map((img, idx) => {
                              const src =
                                typeof img === "string"
                                  ? img
                                  : URL.createObjectURL(img);
                              return (
                                <div key={idx} className="relative">
                                  <img
                                    src={src}
                                    className="h-24 w-full object-cover rounded-lg"
                                    alt={`Property image ${idx + 1}`}
                                  />
                                  <button
                                    type="button"
                                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                                    onClick={() => {
                                      const newImages = [...formData.images!];
                                      newImages.splice(idx, 1);
                                      setFormData((prev) => ({
                                        ...prev,
                                        images: newImages,
                                      }));
                                    }}
                                  >
                                    <X className="h-3 w-3" />
                                  </button>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* BROCHURE - Only for NEW_PROJECT */}
                    {formData.listingType === "NEW_PROJECT" && (
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-4 text-lg">Brochure</h3>
                        <div>
                          <label className="label">Brochure (PDF/Image)</label>
                          <input
                            type="file"
                            accept=".pdf,image/*"
                            onChange={(e) => {
                              const file = e.target.files?.[0] || null;
                              setFormData((prev) => ({ ...prev, brochure: file }));
                            }}
                            className="w-full"
                          />
                          {formData.brochure && typeof formData.brochure === "string" && (
                            <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Current Brochure:</p>
                              <a
                                href={formData.brochure}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm"
                              >
                                📄 View Brochure
                              </a>
                              {formData.brochure.match(/\.(jpg|jpeg|png|webp|gif)$/i) && (
                                <img
                                  src={formData.brochure}
                                  alt="Brochure Preview"
                                  className="h-48 w-auto rounded-lg object-cover mt-2"
                                />
                              )}
                            </div>
                          )}
                          {formData.brochure && formData.brochure instanceof File && (
                            <div className="mt-2 text-sm text-green-600">
                              ✓ New file selected: {formData.brochure.name}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* SECTION 1: BASIC INFORMATION */}
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4 text-lg">
                        Basic Information
                      </h3>
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
                            <option value="">Select Listing Type </option>

                            <option value="SALE">Sale</option>
                            <option value="RENT">Rent</option>
                            <option value="NEW_PROJECT">New Project </option>

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
                            placeholder="Enter property title"
                          />
                        </div>

                        {/* Property Category */}
                        <div>
                          <label className="label">Category *</label>
                          <select
                            name="propertyCategory"
                            value={formData.propertyCategory}
                            onChange={(e) =>
                              handleCategoryChange(e.target.value)
                            }
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
                        {/* category name  */}
                        {/* <div>
                          <label className="label">Category Name *</label>
                          <select
                            name="categoryName"
                            value={formData.categoryName}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                categoryName: e.target.value,
                              }))
                            }
                            className="input"
                            required
                          >
                            <option value="">
                              {categoriesLoading
                                ? "Loading..."
                                : "Select category"}
                            </option>

                            {categories.map((cat) => (
                              <option key={cat._id} value={cat.name}>
                                {cat.name}
                              </option>
                            ))}
                          </select>

                          {categoriesError && (
                            <div className="text-danger text-sm mt-1">
                              {categoriesError}
                            </div>
                          )}
                        </div> */}
                        {/* Sale Price */}
                        <div>
                          <label className="label">
                            {formData.listingType === "SALE" ? "Sale" : "Rent"}{" "}
                            Price *
                          </label>
                          <input
                            name="price"
                            type="number"
                            value={formData.price}
                            onChange={handleChange}
                            className="input"
                            required
                            placeholder="Enter price"
                          />
                        </div>

                        {formData.listingType === "RENT" ? (
                          <>
                            <div>
                              <label className="label">Rent Type*</label>
                              <select
                                name="rentType"
                                value={formData.rentType}
                                onChange={handleChange}
                                className="input"
                                required
                              >
                                <option value="">Select Rent Type</option>

                                <option value="MONTHLY">Monthly</option>
                                <option value="YEARLY">Yearly</option>
                              </select>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}

                        <div>
                          <label className="label">Status*</label>
                          <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="input"
                            required
                          >
                            <option value="">Select Status</option>
                            <option value="TOP">TOP</option>
                            <option value="BOTTOM">BOTTOM</option>
                          </select>
                        </div>
                        <div>
                          <label className="label">Negotiable*</label>
                          <select
                            name="negotialble"
                            value={formData.negotialble}
                            onChange={handleChange}
                            className="input"
                            required
                          >
                            <option value="">Select Negotiablity</option>

                            <option value="NEGOTIABLE">Negotiable</option>
                            <option value="NONNEGOTIABLE">
                              Non - Negotiable
                            </option>
                          </select>
                        </div>
                        {/* Floor No */}
                        {/* <div>
                          <label className="label">Floor No</label>
                          <input
                            name="floorNo"
                            type="number"
                            value={formData.floorNo}
                            onChange={handleChange}
                            className="input"
                            placeholder="Enter floor number"
                          />
                        </div> */}

                        {/* Total Floor */}
                        {/* <div>
                          <label className="label">Total Floors</label>
                          <input
                            name="totalFloor"
                            type="number"
                            value={formData.totalFloor}
                            onChange={handleChange}
                            className="input"
                            placeholder="Enter total floors"
                          />
                        </div> */}

                        {/* Garage Size */}
                        {/* <div>
                          <label className="label">Garage Size</label>
                          <input
                            name="garageSize"
                            type="number"
                            value={formData.garageSize}
                            onChange={handleChange}
                            className="input"
                            placeholder="Enter garage size"
                          />
                        </div> */}

                        {/* Build Year */}
                        {/* <div>
                          <label className="label">Build Year</label>
                          <input
                            name="buildYear"
                            value={formData.buildYear}
                            onChange={handleChange}
                            className="input"
                            placeholder="YYYY"
                          />
                        </div> */}
                      </div>
                    </div>

                    {/* SECTION 2: DYNAMIC FIELDS (from category) */}
                    {selectedCategoryDynamicFields.length > 0 && (
                      <div className="border rounded-lg p-4">
                        <h3 className="font-semibold mb-4 text-lg">
                          Category Specific Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {selectedCategoryDynamicFields.map((field) => (
                            <div
                              key={field._id || field.key}
                              className="space-y-1"
                            >
                              <label className="label flex flex-row w-full items-center gap-2">
                                <div className="flex flex-row gap-2">

                                  {field.title}
                                  {field.required && (
                                    <span className="text-red-500">*</span>
                                  )}
                                  {field.icon && (
                                    // <span className="text-gray-400">
                                    //   ({field.icon})
                                    // </span>
                                    <img src={field.icon} alt={field.title} className="w-5 h-5" />
                                  )}
                                </div>

                              </label>
                              {renderDynamicFieldInput(field)}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* SECTION 3: PREFERENCES */}
                    {/* <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4 text-lg">
                        Preferences
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
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
                    </div> */}

                    {/* SECTION 4: AMENITIES */}
                    {/* <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4 text-lg">Amenities</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {defaultAmenities.map((amenity) => (
                          <div key={amenity} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`amenity-${amenity}`}
                              checked={formData.amenities[amenity] || false}
                              onChange={(e) =>
                                handleAmenityChange(amenity, e.target.checked)
                              }
                              className="form-checkbox"
                            />
                            <label
                              htmlFor={`amenity-${amenity}`}
                              className="ml-2 capitalize"
                            >
                              {amenity.replace(/([A-Z])/g, " $1").trim()}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div> */}

                    {/* SECTION 5: DESCRIPTION & INSTRUCTION */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="label">Description *</label>
                        <textarea
                          name="description"
                          rows={4}
                          value={formData.description}
                          onChange={handleChange}
                          className="input"
                          required
                          placeholder="Enter property description"
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="label">Instruction</label>
                        <textarea
                          name="instruction"
                          rows={4}
                          value={formData.instruction}
                          onChange={handleChange}
                          className="input"
                          placeholder="Enter instructions for visitors"
                        />
                      </div>
                    </div> */}

                    {/* SECTION 6: LOCATION DETAILS */}
                    <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5" /> Location Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="label">Location *</label>
                          <input
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="input"
                            required
                            placeholder="Enter complete address"
                          />
                        </div>

                        {/* <div>
                          <label className="label">Facing *</label>
                          <select
                            name="facing"
                            value={formData.facing}
                            onChange={handleChange}
                            className="input"
                            required
                          >
                            <option value="EAST">East</option>
                            <option value="WEST">West</option>
                            <option value="NORTH">North</option>
                            <option value="SOUTH">South</option>
                          </select>
                        </div> */}

                        <div className="space-y-2">
                          <label className="label flex items-center gap-2">
                            Phone Number *
                          </label>
                          <input
                            name="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="input"
                            required
                            placeholder="Enter contact number"
                            maxLength={10}
                            pattern="[0-9]{10}"
                            inputMode="numeric"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="label">Latitude</label>
                          <input
                            name="lat"
                            value={formData.lat}
                            onChange={handleChange}
                            className="input"
                            placeholder="Enter latitude"
                          />
                        </div>

                        <div className="space-y-2">
                          <label className="label">Longitude</label>
                          <input
                            name="lng"
                            value={formData.lng}
                            onChange={handleChange}
                            className="input"
                            placeholder="Enter longitude"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 8: STATUS */}
                    {/* <div className="border rounded-lg p-4">
                      <h3 className="font-semibold mb-4 text-lg">Status</h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="property-disable"
                            checked={formData.disable}
                            onChange={(e) =>
                              setFormData((prev) => ({
                                ...prev,
                                disable: e.target.checked,
                              }))
                            }
                            className="form-checkbox"
                          />
                          <label htmlFor="property-disable" className="ml-2">
                            Disable Property
                          </label>
                        </div>
                      </div>
                    </div> */}

                    {/* Buttons */}
                    <div className="flex justify-end gap-3 pt-4 border-t">
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          setIsEditMode(false);
                          setEditingProperty(null);
                          setFormData(initialFormData);
                          setSelectedCategoryDynamicFields([]);
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
                <th>Created At</th>
                <th>Listing Type</th>
                <th>Category</th>
                <th>Sold</th>
                <th>Price</th>
                <th>Location</th>
                <th>Admin Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={9} className="text-center py-8">
                    <div className="flex justify-center items-center">
                      <div className="animate-spin border-2 border-black dark:border-white !border-l-transparent rounded-full w-8 h-8"></div>
                    </div>
                  </td>
                </tr>
              ) : properties.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-8">
                    No properties found
                  </td>
                </tr>
              ) : (
                properties.map((row, index) => {
                  // Get category name
                  const getCategoryName = () => {
                    if (row.categoryId) {
                      if (
                        Array.isArray(row.categoryId) &&
                        row.categoryId.length > 0
                      ) {
                        return row.categoryId[0].name || "-";
                      } else if (
                        typeof row.categoryId === "object" &&
                        "name" in row.categoryId
                      ) {
                        return row.categoryId.name || "-";
                      }
                    }
                    return "-";
                  };

                  return (
                    <tr key={row._id}>
                      <td>{(page - 1) * limit + index + 1}</td>
                      <td>
                        {row.thumbnail && (
                          <img
                            src={row.thumbnail}
                            alt={row.title}
                            className="w-14 h-10 rounded object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src =
                                "/assets/images/user-profile.png";
                            }}
                          />
                        )}
                      </td>
                      <td>
                        <div className="whitespace-nowrap font-medium">
                          {row?.title || "-"}
                        </div>
                      </td>
                      <td>
                        {row?.createdAt ? (
                          <div className="whitespace-nowrap">
                            {new Date(row.createdAt).toLocaleString("en-IN", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </div>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>{row?.listingType || "-"}</td>
                      <td>{getCategoryName()}</td>
                      <td>
                        <span className={`badge ${row?.sold ? 'bg-danger' : 'bg-success'} rounded-full px-3 py-1 text-xs text-white`}>
                          {row?.sold ? 'Sold Out' : 'Available'}
                        </span>
                      </td>
                      <td>
                        {row?.price ? (
                          <div className="whitespace-nowrap font-semibold">
                            ₹ {row.price.toLocaleString()}
                          </div>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td>{row?.location || "-"}</td>
                      <td>
                        <button
                          type="button"
                          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${row?.disable ? "bg-red-500" : "bg-green-500"
                            } ${Boolean(togglingPropertyIds[row?._id])
                              ? "opacity-60 cursor-not-allowed"
                              : "cursor-pointer"
                            }`}
                          onClick={() => onToggleDisable(row)}
                          disabled={Boolean(togglingPropertyIds[row?._id])}
                          aria-pressed={!row?.disable}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${row?.disable ? "translate-x-0.5" : "translate-x-5"
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
                  );
                })
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
