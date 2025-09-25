import Image from "next/image";
import ProductList from "./components/ProductList";

export default function Homepage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category || "all";

  return (
    <div>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} params="homepage" />
    </div>
  );
}
