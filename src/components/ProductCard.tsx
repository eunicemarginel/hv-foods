type ProductProps = {
    name: string
    price: string
    image: string
    description: string
}

const ProductCard = ({ name, price, image, description }: ProductProps) => {
    return (
        <div className="bg-[#fff8e7] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col text-left">
            <img
                src={image}
                alt={name}
                className="w-full h-48 object-cover rounded-t-2xl"
            />
            <div className="p-5 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-[#643709] leading-snug">{name}</h3>
                <p className="text-sm text-[#5D4037]">{description}</p>
                <p className="text-[#D84315] font-bold mt-2">{price}</p>
            </div>
        </div>
    )
}

export default ProductCard
