'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

const allProducts = [
    // Cookies
    {
        name: "Nutella Button",
        category: "Cookies",
        description: "Soft, eggless vanilla cookies topped with a dollop of rich Nutella — a bite-sized indulgence.",
        price: "$16.00 / jar",
        image: "/images/nutella.webp"
    },
    {
        name: "Nyonya Pineapple Tart",
        category: "Cookies",
        description: "Traditional buttery tarts filled with tangy homemade pineapple jam. Eggless and full of festive nostalgia.",
        price: "$17.00 / box",
        image: "/images/nyonya.webp"
    },
    {
        name: "M&M Smarties Butter Cookies",
        category: "Cookies",
        description: "Crunchy eggless cookies studded with colorful chocolate buttons. A childhood favorite, made better.",
        price: "$15.00 / jar",
        image: "/images/smarties.webp"
    },
    {
        name: "Ondeh-Ondeh Cookies",
        category: "Cookies",
        description: "Inspired by kuih ondeh-ondeh, these pandan cookies have a gula melaka twist. Vegan and addictive.",
        price: "$15.00 / jar",
        image: "/images/ondeh.webp"
    },
    {
        name: "Chocolate Butter Cookies",
        category: "Cookies",
        description: "Rich and crumbly eggless chocolate cookies — smooth and melt-in-your-mouth good.",
        price: "$15.00 / jar",
        image: "/images/choco-butter.webp"
    },
    {
        name: "Pandan Chocolate Chip Cookies",
        category: "Cookies",
        description: "Fragrant pandan cookies with sweet chocolate chip bursts. Eggless and uniquely local.",
        price: "$15.00 / jar",
        image: "/images/pandan.webp"
    },
    {
        name: "Red Velvet Butter Cookies",
        category: "Cookies",
        description: "Soft red velvet cookies with a buttery, eggless base and rich cocoa flavor.",
        price: "$15.00 / jar",
        image: "/images/redvelvet-cookies.webp"
    },
    {
        name: "Cranberry Chocolate Lava Cookies",
        category: "Cookies",
        description: "Fudgy eggless cookies with a molten center, balanced with tart cranberry bits.",
        price: "$15.00 / jar",
        image: "/images/cranberry.webp"
    },
    {
        name: "Christmas Jelly Candy",
        category: "Cookies",
        description: "Vegan-friendly jellies in festive shapes and flavors — fruity, fun, and perfect for gifting.",
        price: "$10.00 / jar",
        image: "/images/jelly.webp"
    },
    // Snacks
    {
        name: "Crispy Snack Original Curry",
        category: "Snacks",
        description: "Thin, spiced crackers with bold curry flavor. Perfectly crispy and addictive.",
        price: "$12.00 / pack",
        image: "/images/curry-snack.webp"
    },
    {
        name: "Crispy Snack Sambal",
        category: "Snacks",
        description: "A crunchy treat with real sambal kick — spicy, sweet, and totally snackable.",
        price: "$12.00 / pack",
        image: "/images/sambal-snack.webp"
    },
    {
        name: "Butter Crispy Murukku",
        category: "Snacks",
        description: "A buttery take on a Deepavali classic. Extra crispy with a satisfying crunch.",
        price: "$14.00 / pack",
        image: "/images/murukku.webp"
    },
    {
        name: "Crispy Rose Cookies",
        category: "Snacks",
        description: "Delicate, airy cookies with rose-like crisp edges. Lightly sweet with an ultra-thin crunch.",
        price: "$14.00 / pack",
        image: "/images/rose-cookies.webp"
    },
    {
        name: "Anchovies Fried Cracker",
        category: "Snacks",
        description: "Savory anchovy-laced crackers with umami crunch. A classic Malaysian snack with attitude.",
        price: "$12.00 / pack",
        image: "/images/anchovies-snack.webp"
    },
    // Cakes
    {
        name: "Red Velvet Cheese Cream Rolls",
        category: "Cakes",
        description: "Luscious red velvet sponge rolled with eggless cream cheese filling. Rich but light.",
        price: "$15.00 / roll",
        image: "/images/redvelvet-cake.webp"
    },
    {
        name: "Hazelnut Chocolate Roll",
        category: "Cakes",
        description: "Moist, eggless sponge cake rolled with creamy hazelnut chocolate. A Nutella-lover’s dream.",
        price: "$15.00 / roll",
        image: "/images/hazelnut-cake.webp"
    },
    {
        name: "Nutella Roll",
        category: "Cakes",
        description: "Swirls of soft, eggless cake and indulgent Nutella filling. Decadent and crowd-pleasing.",
        price: "$15.00 / roll",
        image: "/images/nutella-cake.webp"
    },
    {
        name: "Tornado Cheese Cake",
        category: "Cakes",
        description: "A Korean-style eggless cheesecake with fluffy texture and savory-sweet cheese flavor.",
        price: "$20.00 / cake",
        image: "/images/tornado-cake.webp"
    },
    {
        name: "Brownies",
        category: "Cakes",
        description: "Dense, rich, and fudgy eggless brownies — everything you love in a square of joy.",
        price: "$25.00 / box",
        image: "/images/brownies.webp"
    },
    {
        name: "Chocolate Moist Cake",
        category: "Cakes",
        description: "Ultra-moist, eggless chocolate cake with deep cocoa flavor. Melts in your mouth.",
        price: "$22.00 / cake",
        image: "/images/chocolate-cake.webp"
    }
]

export default function ProductsPage() {
    const [searchTerm, setSearchTerm] = useState('')

    const filteredProducts = allProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const grouped = filteredProducts.reduce((acc, product) => {
        if (!acc[product.category]) acc[product.category] = []
        acc[product.category].push(product)
        return acc
    }, {} as Record<string, typeof allProducts>)

    return (
        <section className="py-20 px-6 min-h-screen bg-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-merienda text-[#643709] font-bold text-center mb-6">
                    Our Products
                </h1>

                <div className="flex justify-center mb-12">
                    <input
                        type="text"
                        placeholder="Search sweets, snacks, cakes..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full max-w-md px-4 py-2 rounded-full border border-[#643709] text-[#643709] placeholder-[#643709] focus:outline-none focus:ring-2 focus:ring-[#D84315]"
                    />
                </div>

                {Object.keys(grouped).map(category => (
                    <div key={category} className="mb-16">
                        <h2 className="text-2xl font-bold text-[#643709] mb-6 font-merienda">{category}</h2>
                        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                            {grouped[category].map((product, index) => (
                                <ProductCard key={index} {...product} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
} 
