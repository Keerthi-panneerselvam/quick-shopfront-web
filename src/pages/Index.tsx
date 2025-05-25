
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Storefront } from "@/components/Storefront";
import { StoreNotFound } from "@/components/StoreNotFound";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const Index = () => {
  const { username } = useParams();
  const [storeData, setStoreData] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Mock data for demo - in real app this would come from Firebase
  const mockStores = {
    "fashionista": {
      name: "Fashionista Boutique",
      whatsappNumber: "+1234567890",
      logoURL: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop&crop=center"
    },
    "techstore": {
      name: "Tech World",
      whatsappNumber: "+1234567890",
      logoURL: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop&crop=center"
    }
  };

  const mockProducts = {
    "fashionista": [
      {
        id: 1,
        productName: "Summer Dress",
        price: 2999,
        imageURL: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop&crop=center"
      },
      {
        id: 2,
        productName: "Designer Handbag",
        price: 4599,
        imageURL: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop&crop=center"
      },
      {
        id: 3,
        productName: "Elegant Heels",
        price: 3299,
        imageURL: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop&crop=center"
      },
      {
        id: 4,
        productName: "Casual Sneakers",
        price: 2799,
        imageURL: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center"
      }
    ],
    "techstore": [
      {
        id: 1,
        productName: "Wireless Headphones",
        price: 8999,
        imageURL: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&crop=center"
      },
      {
        id: 2,
        productName: "Smart Watch",
        price: 12999,
        imageURL: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&crop=center"
      },
      {
        id: 3,
        productName: "Bluetooth Speaker",
        price: 5999,
        imageURL: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop&crop=center"
      }
    ]
  };

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const storeUsername = username || "fashionista"; // Default to fashionista for demo
        
        if (mockStores[storeUsername]) {
          setStoreData(mockStores[storeUsername]);
          setProducts(mockProducts[storeUsername] || []);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [username]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error || !storeData) {
    return <StoreNotFound />;
  }

  return <Storefront storeData={storeData} products={products} />;
};

export default Index;
