import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return(
        <nav className="">
        {/* LEFT */}
        <Link href="/" className="flex items-center">
        <Image src="/logo.png"
        alt="Brutal"
        width={36}
        height={36}
        className="w-6 h-6 md:h-9"
        />
        <p className="text-md font-medium tracking-wider">BRUTAL</p>
      </Link>



        {/* RIGHT */}




        </nav>
    )
}

export default Navbar