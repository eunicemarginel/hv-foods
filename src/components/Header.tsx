'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [showHeader, setShowHeader] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setShowHeader(true)
            } else {
                setShowHeader(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            id="site-header"
            className={`w-full fixed top-0 left-0 z-50 bg-transparent px-4 py-2 flex items-center justify-between text-black transition-all duration-300 ${showHeader ? 'backdrop-blur-md bg-white/80 shadow-md' : 'bg-transparent'}`}
        >
            {/* Logo + Nav */}
            <div className="flex items-center gap-10">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <img
                            src="/images/hv-logo.png"
                            alt="HV Foods"
                            className="h-20 w-20 object-contain"
                        />
                    </Link>
                </div>

                {/* Nav Links */}
                <nav className="hidden md:flex gap-6 text-sm font-medium">
                    <Link href="/" className="hover:text-yellow-500 transition">Home</Link>
                    <Link href="/products" className="hover:text-yellow-500 transition">Products</Link>
                    <Link href="/order" className="hover:text-yellow-500 transition">Order</Link>
                    <Link href="/about" className="hover:text-yellow-500 transition">About</Link>
                    <Link href="/contact" className="hover:text-yellow-500 transition">Contact</Link>
                </nav>
            </div>

            {/* Burger Icon */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#fff8e7] shadow-md flex flex-col gap-4 py-4 px-6 md:hidden z-50">
                    <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Home</Link>
                    <Link href="/products" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Products</Link>
                    <Link href="/order" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Order</Link>
                    <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">About</Link>
                    <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-yellow-500 transition">Contact</Link>
                </div>
            )}
        </header>
    )
}
