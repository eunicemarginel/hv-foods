'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function ContactPage() {
    return (
        <section className="bg-[#fff8e7] py-20 px-6 min-h-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-4xl font-bold font-merienda text-[#643709] mb-6">Contact Us</h1>

                <div className="text-[#4A2600] text-base space-y-6">
                    <div>
                        <p className="font-semibold">HV Foods Pte Ltd</p>
                        <p>396 Yishun Avenue 6</p>
                        <p>Singapore 760396</p>
                    </div>

                    <div>
                        <p className="font-semibold">Contact Number</p>
                        <p>+65 8379 5993</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-4">
                        <a
                            href="https://wa.me/6583795993"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition"
                        >
                            <FaWhatsapp className="text-xl" /> Message Us on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}