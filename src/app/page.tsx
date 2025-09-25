import Image from "next/image"
import ProductList from "./components/ProductList"

const Homepage = ({ searchParams }: { searchParams: { category?: string } }) => {
  const category = searchParams.category || "all";
  return (
    <div className=''>
      <div className="relative aspect-[3/1] mb-12">
        <Image src="/featured.png" alt="Featured Product" fill />
      </div>
      <ProductList category={category} params = "homepage"/>
    </div>
  )
}

export default Homepage