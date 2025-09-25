import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return(
        <div className="mt-16 flex flex-col gap-4 items-center md:gap-0 md:justify-between md:flex-row md:items-start bg-gray-500 p-8 rounded-lg">
        <div className=" flex flex-col items-center gap-4 md:items-start">
        <Link href="/" className="flex items-center">
        <Image src="/logo.png"
        alt="Brutal"
        width={36}
        height={36}
        />
        <p className="hidden md:block text-md font-medium tracking-wider text-white">BRUTAL</p>
      </Link>
      <p className="text-sm text-gray-400">© 2025 Brutal</p>
      <p className="text-sm text-gray-400">All rights reserved</p>
        </div>
        <div className="flex flex-col items-center text-sm gap-4 md:items-start text-gray-400">
            <p className="text-sm text-white ">Links</p>
            <Link href="/">Homepage</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Terms Of Service</Link>
            <Link href="/">Privacy Policy</Link>
        </div>
        <div className="flex flex-col items-center text-sm gap-4 md:items-start text-gray-400">
            <p className="text-sm text-white ">Links</p>
            <Link href="/">All Products</Link>
            <Link href="/">New Arrivals</Link>
            <Link href="/">Best Sellers</Link>
            <Link href="/">Sale</Link>
        </div>
        <div className="flex flex-col items-center text-sm gap-4 md:items-start text-gray-400">
            <p className="text-sm text-white ">Links</p>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">Blog</Link>
            <Link href="/">Affiliate Program</Link>
        </div>
        </div>
    )
}

export default Footer