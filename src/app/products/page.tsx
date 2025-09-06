'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'

const allProducts = [
    // Cookies
    {
        name: "Nutella Cookies",
        category: "Cookies",
        description: "Soft, chewy cookies filled with rich, creamy Nutella for a chocolatey indulgence.",
        price: "$17.00 / jar",
        image: "/images/c1.webp"
    },
    {
        name: "Almond London",
        category: "Cookies",
        description: "Crunchy whole almonds wrapped in chocolate and coated with crushed nuts..",
        price: "$16.00 / box",
        image: "/images/c3.webp"
    },
    {
        name: "Almond Pod",
        category: "Cookies",
        description: "Buttery cookie cups filled with creamy almond goodness for a nutty delight.",
        price: "$16.00 / jar",
        image: "/images/c4.webp"
    },
    {
        name: "Almond London Pistachio",
        category: "Cookies",
        description: "A twist on the classic, with roasted pistachios covered in smooth chocolate.",
        price: "$16.00 / jar",
        image: "/images/c2.webp"
    },
    {
        name: "Cadbury Cookies",
        category: "Cookies",
        description: "Classic cookies loaded with chunks of Cadbury chocolate for the ultimate treat.",
        price: "$17.00 / jar",
        image: "/images/c5.webp"
    },
    {
        name: "Crunch Butterscotch",
        category: "Cookies",
        description: "Crispy, golden cookies with sweet butterscotch crunch in every bite.",
        price: "$16.00 / jar",
        image: "/images/c6.webp"
    },
    {
        name: "Dahlia Rainbow",
        category: "Cookies",
        description: "Traditional melt-in-your-mouth butter cookies in a burst of cheerful rainbow colors.",
        price: "$15.00 / jar",
        image: "/images/c7.webp"
    },
    {
        name: "Florentine Bites",
        category: "Cookies",
        description: " Crispy, caramelized nut clusters baked into bite-sized delights.",
        price: "$16.00 / jar",
        image: "/images/c8.webp"
    },
    {
        name: "Signature Nutella Pod",
        category: "Cookies",
        description: "Our signature cookie cup filled generously with creamy Nutella.",
        price: "$17.00 / jar",
        image: "/images/c9.webp"
    },
    {
        name: "Signature Red Velvet",
        category: "Cookies",
        description: "Soft red velvet cookies topped with a touch of cream cheese sweetness.",
        price: "$17.00 / jar",
        image: "/images/c10.webp"
    },
    {
        name: "Grandma's Special Coconut Cookies",
        category: "Cookies",
        description: " Fragrant coconut cookies made with a timeless, traditional recipe.",
        price: "$15.00 / jar",
        image: "/images/c11.webp"
    },
    {
        name: "Mazola Peanut Cookies",
        category: "Cookies",
        description: "Crunchy, nutty peanut cookies with the nostalgic taste of Mazola oil.",
        price: "$16.00 / jar",
        image: "/images/c12.webp"
    },
    {
        name: "Magnum Cookies",
        category: "Cookies",
        description: "Thick, indulgent cookies inspired by Magnum ice cream’s chocolatey crunch.",
        price: "$17.00 / jar",
        image: "/images/c13.webp"
    },
    {
        name: "Original Makmur Cookies",
        category: "Cookies",
        description: "Traditional melt-in-your-mouth cookies filled with sweet ground peanuts.",
        price: "$10.00 / jar",
        image: "/images/c14.webp"
    },
    {
        name: "Makmur Pandan",
        category: "Cookies",
        description: "A pandan-flavored twist on the classic Makmur with a fragrant, buttery aroma.",
        price: "$17.00 / jar",
        image: "/images/c15.webp"
    },
    {
        name: "Pineapple Tart",
        category: "Cookies",
        description: "Buttery pastry filled with sweet, tangy pineapple jam.. a festive favorite.",
        price: "$18.00 / jar",
        image: "/images/c16.webp"
    },
    {
        name: "Suji Pure Butter Cookies",
        category: "Cookies",
        description: "Classic Suji cookies made with pure butter for rich, crumbly perfection.",
        price: "$15.00 / jar",
        image: "/images/c17.webp"
    },
    {
        name: "Pineapple Cheese Tart Bar",
        category: "Cookies",
        description: "A modern bar version of pineapple tarts with a creamy cheese twist.",
        price: "$18.00",
        image: "/images/cc4.webp"
    },
    // Snacks
    {
        name: "Murukku Crackers",
        category: "Snacks",
        description: "A buttery take on a Deepavali classic. Extra crispy with a satisfying crunch.",
        price: "$18.00 / pack",
        image: "/images/s1.webp"
    },
    {
        name: "Achi Murukku",
        category: "Snacks",
        description: "Delicate, airy cookies with rose-like crisp edges. Lightly sweet with an ultra-thin crunch.",
        price: "$18.00 / pack",
        image: "/images/s2.webp"
    },

    // Cakes
    {
        name: "Orange Butter Cake",
        category: "Cakes",
        description: "Soft, buttery cake infused with refreshing orange zest and flavor.",
        price: "$20.00",
        image: "/images/cc3.webp"
    },
    {
        name: "Hawaiian Pandan Coconut",
        category: "Cakes",
        description: "Fragrant pandan cake layered with shredded coconut and tropical flair.",
        price: "$20.00",
        image: "/images/cc1.webp"
    },
    {
        name: "Cempedak Butter Cake",
        category: "Cakes",
        description: "Moist, buttery cake infused with the sweet aroma of cempedak fruit.",
        price: "$20.00",
        image: "/images/cc2.webp"
    },
    {
        name: "Almond Nutella Brownies",
        category: "Cakes",
        description: "Rich, fudgy brownies swirled with creamy Nutella and topped with crunchy roasted almonds for the perfect balance of indulgence and crunch.",
        price: "$22.00",
        image: "/images/feat1.webp"
    },
    {
        name: "Ferrero Rocher Brownies",
        category: "Cakes",
        description: "Decadent brownies infused with Nutella and topped with Ferrero Rocher chocolates for a rich, indulgent treat.",
        price: "$25.00",
        image: "/images/feat2.webp"
    },
    {
        name: "HV Special Almond Brownies",
        category: "Cakes",
        description: "Fudgy brownies swirled with Nutella and topped with crunchy almond slices for a rich and nutty delight.",
        price: "$23.00",
        image: "/images/feat3.webp"
    },
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
