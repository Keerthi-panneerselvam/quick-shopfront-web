
export const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-orange-400 rounded-full animate-spin mx-auto animation-delay-150"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading Store</h2>
        <p className="text-gray-500">Please wait while we fetch the latest products...</p>
      </div>
    </div>
  );
};
