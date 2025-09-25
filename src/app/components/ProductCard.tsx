"use client"

import { useState } from "react"
import { ProductType } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import useCartStore from "@/stores/cartStore"
import { toast } from "react-toastify"

const ProductCard = ({product}:{product:ProductType}) => {
    const [productType, setProductType] = useState({
        size: product.sizes[0],
        color: product.colors[0]
    })

    const {addToCart} = useCartStore();

    const handleProductType = ({type, value}: {type:"size" | "color", value: string}) => {
        setProductType(prev => ({
            ...prev,
            [type]: value
        }))
    }

    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: 1,
            selectedSize: productType.size,
            selectedColor: productType.color
        })
        toast.success("Product added to cart")
    }

    return (
        <div className="shadow-lg rounded-lg overflow-hidden">
            {/* IMAGE */}
            <Link href={`/products/${product.id}`}>
                <div className="relative aspect-[2/3]">
                    <Image src={product.images[productType.color]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300"/> 
                </div>
            </Link>
            {/* PRODUCT DETAIL */}
            <div className="flex flex-col gap-4 p-4">
                <h1 className="font-medium">{product.name}</h1>
                <p className="text-sm text-gray-600">{product.shortDescription}</p>
                {/* PRODUCT TYPES */}
                <div className="text-xs flex items-center gap-4">
                    {/* SIZE */}
                    <div className="flex flex-col gap-1">
                        <span className="font-medium">Size</span>
                        <select name="size" id="size" className="cursor-pointer ring ring-gray-300 rounded px-2 py-1 hover:ring-black" onChange={(e) => handleProductType({type: "size", value: e.target.value})}>
                            {product.sizes.map(size=>(
                                <option value={size} key={size} className="border border-gray-300 rounded px-2 py-1 hover:border-black">{size.toUpperCase()}</option>
                            ))}
                        </select>
                    </div>
                    {/* COLOR */}
                    <div className="flex flex-col gap-1">
                        <span className="font-medium">Color</span>
                        <div className="flex items-center gap-2">
                            {product.colors.map(color =>(
                                <div className={`cursor-pointer border-1 ${productType.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`} key={color} onClick={() => handleProductType({type: "color", value: color})}>
                                    <div className={`w-[14px] h-[14px] rounded-full border ${productType.color === color ? "border-black" : "border-gray-300"}`} style={{backgroundColor: color}}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* PRICE */}
                <div className="flex items-center justify-between">${product.price}
                    <button onClick={handleAddToCart} className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
                        <ShoppingCart className="inline-block mr-1 h-4 w-4"/>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ProductCard