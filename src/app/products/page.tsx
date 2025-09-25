import ProductList from "../components/ProductList";

export default function ProductsPage({ searchParams }: { searchParams?: { category?: string } }) {
  const category = searchParams?.category || "all";

  return (
    <div>
      <ProductList category={category} params="products" />
    </div>
  );
}
