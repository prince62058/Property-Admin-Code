import { Download } from "lucide-react";

type Props = {
    searchQuery: string;
    setSearchQuery: (value: string) => void;
    onDownload: (endpoint: string, type: "pdf" | "excel" | "csv") => void;
    pdfEndpoint: string;
    excelEndpoint: string;
    csvEndpoint?: string; // optional
    placeholder?: string;
};

const TableHeaderActions = ({
    searchQuery,
    setSearchQuery,
    onDownload,
    pdfEndpoint,
    excelEndpoint,
    csvEndpoint,
    placeholder = "Search..."
}: Props) => {
    return (
        <div className="relative flex items-center gap-3 w-full sm:w-auto">
            <input
                type="text"
                placeholder={placeholder}
                className="form-input w-full sm:w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button
                type="button"
                className="btn btn-outline-danger flex items-center gap-2"
                onClick={() => onDownload(pdfEndpoint, "pdf")}
            >
                <Download className="w-4 h-4" />
                PDF
            </button>

            <button
                type="button"
                className="btn btn-outline-success flex items-center gap-2"
                onClick={() => onDownload(excelEndpoint, "excel")}
            >
                <Download className="w-4 h-4" />
                Excel
            </button>

            {/* CSV button only if endpoint exists */}
            {csvEndpoint && (
                <button
                    type="button"
                    className="btn btn-outline-info flex items-center gap-2"
                    onClick={() => onDownload(csvEndpoint, "csv")}
                >
                    <Download className="w-4 h-4" />
                    CSV
                </button>
            )}
        </div>
    );
};

export default TableHeaderActions;