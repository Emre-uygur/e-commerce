import Image from "next/image";
import ProductList from "./components/ProductList";
import React from "react";

// Props tipi tanımı
interface HomepageProps {
  searchParams: {
    category?: string;
  };
}

// Fonksiyon tip güvenli
const Homepage: React.FC<HomepageProps> = ({ searchParams }) => {
  const category = searchParams?.category || "all";

  return (
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
};

export default Homepage;
