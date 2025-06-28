'use client'

export default function AboutPage() {
    return (
        <section className="bg-[#fff8e7] py-20 px-6 min-h-screen">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold font-merienda text-[#643709] mb-6">About HV Foods</h1>

                <p className="text-[#4A2600] text-base mb-6">
                    HV Foods is a homegrown dessert brand bringing you handmade, eggless, and 100% vegetarian sweets —
                    perfect for Deepavali, gifting, or simply treating yourself.
                </p>

                <p className="text-[#4A2600] text-base mb-6">
                    Inspired by the flavors of Indian tradition and festive joy, our cookies, snacks, and cakes are lovingly prepared using the finest ingredients, without any eggs — so everyone can enjoy them!
                </p>

                <p className="text-[#4A2600] text-base mb-6">
                    Whether you're planning a celebration or just need a sweet fix, HV Foods is here to add joy to every bite. We offer cookies in jars, custom trays, gift packs, and even bulk orders for festive events.
                </p>

                <p className="text-[#4A2600] text-base">
                    Thank you for supporting small local businesses. Every order helps us keep the kitchen warm and the sweets flowing. 🫶
                </p>
            </div>

            {/* Visual Section */}
            <div className="mt-16 max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Peacock or Indian Element */}
                    <img
                        src="/images/peacock-art.png"
                        alt="Peacock Illustration"
                        className="w-full h-auto max-h-[420px] object-contain mx-auto sm:max-h-[500px]"
                    />

                    {/* Image collage */}
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                        <img
                            src="/images/owner-baking.png"
                            alt="Owner Baking"
                            className="rounded-xl shadow-md object-cover w-full h-40"
                        />
                        <img
                            src="/images/tray-sweets.png"
                            alt="Tray of Sweets"
                            className="rounded-xl shadow-md object-cover w-full h-40"
                        />
                        <img
                            src="/images/closeup-treats.png"
                            alt="Closeup Treats"
                            className="rounded-xl shadow-md object-cover w-full h-40"
                        />
                        <img
                            src="/images/packaging.png"
                            alt="Festive Packaging"
                            className="rounded-xl shadow-md object-cover w-full h-40"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
