import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full  py-4 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-4xl font-bold justify-center md:ml-36 text-[#54BD95]">
          Biccas
        </div>

        {/* Links */}
        <div className="space-x-8 hidden  md:flex">
          <Link href="/" className="text-black  font-medium">
            Home
          </Link>
          <Link href="/product" className="text-[#A6A6A6]  font-medium">
            Product
          </Link>
          <Link href="/faq" className="text-[#A6A6A6]  font-medium">
            FAQ
          </Link>
          <Link href="/blog" className="text-[#A6A6A6]  font-medium">
            Blog
          </Link>
          <Link href="/about" className="text-[#A6A6A6]  font-medium">
            About Us
          </Link>
        </div>

        {/* Buttons */}
        <div className="space-x-4 hidden md:flex">
          <Link href="/login" className="text-[#A6A6A6] px-4 py-2 ">
            Login
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-[#54BD95] text-white rounded-xl transition-all">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
