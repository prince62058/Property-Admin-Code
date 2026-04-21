interface GlobalLoadingProps {
    isLoading: boolean;
}

const GlobalLoading = ({ isLoading }: GlobalLoadingProps) => {
    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-black rounded-lg p-6 shadow-xl">
                <div className="flex flex-col items-center space-y-4">
                    <div className="animate-spin border-4 border-primary/20 border-l-primary rounded-full w-12 h-12"></div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">Loading...</p>
                </div>
            </div>
        </div>
    );
};

export default GlobalLoading;
