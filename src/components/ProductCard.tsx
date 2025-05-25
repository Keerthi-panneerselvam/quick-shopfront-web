
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  productName: string;
  price: number;
  imageURL: string;
}

interface ProductCardProps {
  product: Product;
  onContact: () => void;
}

export const ProductCard = ({ product, onContact }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.imageURL}
          alt={product.productName}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
          {product.productName}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-xl font-bold text-blue-600">
            {formatPrice(product.price)}
          </span>
        </div>

        <Button
          onClick={onContact}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
          size="sm"
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Inquire on WhatsApp
        </Button>
      </div>
    </div>
  );
};
