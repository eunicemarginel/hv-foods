'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="w-full fixed top-0 left-0 z-50 bg-transparent px-4 py-2 flex items-center justify-between text-black">
            {/* Logo + Nav together */}
            <div className="flex items-center gap-10">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <a href="/" className="flex items-center gap-2">
                        <img
                            src="/images/hv-logo.png"
                            alt="HV Foods"
                            className="h-20 w-20 object-contain"
                        />
                    </a>
                </div>

                {/* Nav links */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
                    <a href="/products" className="hover:text-yellow-400 transition-colors">Products</a>
                    <a href="/order" className="hover:text-yellow-400 transition-colors">Order</a>
                    <a href="/about" className="hover:text-yellow-400 transition-colors">About</a>
                    <a href="/contact" className="hover:text-yellow-400 transition-colors">Contact</a>
                </nav>
            </div>

            {/* Burger Icon */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white text-black px-6 py-4 flex flex-col gap-4 md:hidden shadow-md">
                    <a href="/" className="hover:text-yellow-500 transition-colors">Home</a>
                    <a href="/products" className="hover:text-yellow-500 transition-colors">Products</a>
                    <a href="/order" className="hover:text-yellow-500 transition-colors">Order</a>
                    <a href="/about" className="hover:text-yellow-500 transition-colors">About</a>
                    <a href="/contact" className="hover:text-yellow-500 transition-colors">Contact</a>
                </div>
            )}
        </header>
    )
}

export default Header
