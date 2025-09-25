"use client"
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { use } from "react";
import useCartStore from "@/stores/cartStore";
import { hydrateRoot } from "react-dom/client";

const ShoppingCartIcon = () => {

    const {cart, hasHydrated} = useCartStore();

    if(!hasHydrated) return null;
    return (
        <Link href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-600"/>
            <span className="absolute -top-2 -right-2 bg-amber-400 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                {cart.reduce((acc,item)=>acc+item.quantity,0)}
            </span>
        </Link>
    )
}

export default ShoppingCartIcon;