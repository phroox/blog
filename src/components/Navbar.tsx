// src/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">Sada.</Link>
        </div>

        {/* Links principais */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li>
            <Link href="/home" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pages" className="hover:text-blue-500">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/portfolios" className="hover:text-blue-500">
              Portfolios
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-500">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-blue-500">
              Shop
            </Link>
          </li>
          <li>
            <Link href="/elements" className="hover:text-blue-500">
              Elements
            </Link>
          </li>
        </ul>

        {/* Botão de busca */}
        <div className="hidden md:block">
          <button className="text-gray-500 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 9.65a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Menu para mobile */}
        <div className="md:hidden">
          <button className="text-gray-500 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
