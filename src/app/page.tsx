export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex flex-col md:flex-row">
        {/* LEFT: Content */}
        <div className="w-full md:w-1/2 flex items-center px-8 py-25 bg-white text-white">
          <div>
            <div className="bg-yellow-400 text-white px-4 py-2 rounded-xl font-semibold shadow-md inline-block mb-6 text-sm animate-bounce">
              Free Delivery Orders from $120.00
            </div>
            <p className="uppercase text-yellow-400 text-sm tracking-widest mb-2">
              Now Available Online
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#643709]">
              Eggless Cookies & <br /> Festive Treats
            </h1>
            <p className="text-base md:text-lg mb-6 text-[#643709]">
              Handmade with love — perfect for Deepavali gifting, gatherings, and snacking. 100%
              vegetarian, 100% joy!
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xs md:max-w-none mx-auto md:mx-0">
              {/* See Our Menu — transparent w/ brown border + text */}
              <a
                href="/products"
                className="bg-transparent border border-[#643709] text-[#643709] font-bold px-6 py-3 rounded-full text-sm uppercase hover:bg-yellow-400 hover:text-[#643709] transition text-center"
              >
                See Our Menu
              </a>

              {/* Place Order — filled brown with white text */}
              <a
                href="/order"
                className="bg-[#643709] text-white font-bold px-6 py-3 rounded-full text-sm uppercase hover:bg-yellow-400 hover:text-[#643709] transition text-center"
              >
                Place Order
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: Image */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto">
          <img
            src="/images/hero-sweets.png"
            alt="Festive Sweets"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section
        className="py-20 px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/featured-bg.png')",
          backgroundColor: '#fffaf3', // in case image fails
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#643709] mb-4 tracking-tight">
            Featured Treats
          </h2>
          <p className="text-[#4A2600] mb-12 max-w-xl mx-auto text-base">
            Our best-loved festive bakes, handmade with care and tradition. Perfect for gifting — or keeping all to yourself!
          </p>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: 'Nutella Button',
                image: '/images/nutella.webp', // Add this image to /public/images/
                description: 'Soft, eggless vanilla cookies topped with a dollop of rich Nutella — a bite-sized indulgence.',
                price: '$15 / jar',
              },
              {
                name: 'Nyonya Pineapple Tart',
                image: '/images/nyonya.webp', // Add this image to /public/images/
                description: 'Traditional buttery tarts filled with tangy homemade pineapple jam. Eggless and full of festive nostalgia.',
                price: '$18 / box',
              },
              {
                name: 'Butter Crispy Murukku',
                image: '/images/murukku.webp', // Add this image to /public/images/
                description: 'A buttery take on a Deepavali classic. Extra crispy with a satisfying crunch.',
                price: '$12 / pack',
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-[#fff8e7] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
                <h3 className="text-xl font-bold text-[#643709] mt-4">{product.name}</h3>
                <p className="text-sm text-[#5D4037] mt-2 mb-4 text-center">{product.description}</p>
                <p className="text-[#D84315] font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATERING SECTION */}
      <section className="bg-[#fff8e7] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#643709] mb-4">Catering & Custom Orders</h2>
          <p className="text-[#4A2600] text-base mb-6">
            Planning a festive celebration, office party, or special event? We offer customizable sweet
            boxes and cookie platters to fit any occasion
          </p>
          <a
            href="https://wa.me/6583795993"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent border border-green-500 text-green-500 font-bold px-8 py-3 rounded-full text-sm uppercase hover:bg-green-500 hover:text-white transition"
          >
            Get a Quote
          </a>
        </div>
      </section>

    </>
  )
}
