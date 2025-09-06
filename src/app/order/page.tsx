export default function OrderPage() {
    return (
        <section className="py-20 px-6 min-h-screen bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-[#643709] mb-4 font-merienda">Place Your Order</h1>
                <p className="text-[#4A2600] mb-8">
                    Fill out the form below to submit your order. We’ll contact you shortly to confirm and arrange delivery ✨
                </p>

                <iframe
                    src="https://forms.gle/af2UtcmBwinHymfaA"
                    className="w-full h-[900px] rounded-xl border-2 border-[#643709] bg-white"
                    loading="lazy"
                ></iframe>
            </div>
        </section>
    )
}
