
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export const StoreNotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Store Not Found</h1>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          The store you're looking for doesn't exist or may have been moved. 
          Please check the URL and try again.
        </p>

        <div className="space-y-3">
          <Button
            onClick={() => window.location.href = '/fashionista'}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Home className="w-4 h-4 mr-2" />
            Visit Demo Store
          </Button>
          
          <p className="text-sm text-gray-500">
            Try our demo store: <span className="font-medium">yourapp.in/fashionista</span>
          </p>
        </div>
      </div>
    </div>
  );
};
