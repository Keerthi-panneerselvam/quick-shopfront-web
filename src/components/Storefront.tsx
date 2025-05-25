
import { MessageCircle, Phone } from "lucide-react";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";

interface StoreData {
  name: string;
  whatsappNumber: string;
  logoURL?: string;
}

interface Product {
  id: number;
  productName: string;
  price: number;
  imageURL: string;
}

interface StorefrontProps {
  storeData: StoreData;
  products: Product[];
}

export const Storefront = ({ storeData, products }: StorefrontProps) => {
  const handleWhatsAppContact = () => {
    const whatsappUrl = `https://wa.me/${storeData.whatsappNumber.replace(/[^0-9]/g, '')}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallContact = () => {
    window.location.href = `tel:${storeData.whatsappNumber}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            {storeData.logoURL && (
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-200 shadow-md">
                <img
                  src={storeData.logoURL}
                  alt={`${storeData.name} logo`}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {storeData.name}
              </h1>
              <p className="text-gray-600 text-sm">Premium Quality Products</p>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={handleWhatsAppContact}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact on WhatsApp
            </Button>
            <Button
              onClick={handleCallContact}
              variant="outline"
              className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Our Products</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full"></div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <MessageCircle className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Products Yet</h3>
            <p className="text-gray-600 mb-4">This store is getting ready. Check back soon!</p>
            <Button onClick={handleWhatsAppContact} variant="outline">
              Contact Store Owner
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onContact={() => handleWhatsAppContact()}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6 text-center">
          <p className="text-gray-500 text-sm">
            Powered by Your Storefront Platform
          </p>
        </div>
      </footer>
    </div>
  );
};
