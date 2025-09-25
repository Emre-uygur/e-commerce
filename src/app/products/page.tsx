import ProductList from "../components/ProductList";
import React from "react";

// Props tipi tanımı
interface ProductsPageProps {
  searchParams: {
    category?: string;
  };
}

// Fonksiyon tip güvenli
const ProductsPage: React.FC<ProductsPageProps> = ({ searchParams }) => {
  const category = searchParams?.category || "all";

  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
};

export default ProductsPage;
