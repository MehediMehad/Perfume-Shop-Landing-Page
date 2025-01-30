import { Heart } from 'lucide-react';

const Card = ({ product }) => {
    return (
        <div className="relative mx-2 h-[488px]">
            {/* Blue border highlight */}
            <div className="absolute inset-0 -m-1"></div>

            {/* Product card content */}
            <div className="relative bg-white p-4 rounded-lg">
                {/* Women tag and wishlist */}
                <div className="flex justify-between mb-4">
                    <span className="bg-[#4D2952] text-white text-xs px-2 py-1 rounded">WOMEN</span>
                    <button className="text-gray-400 hover:text-red-500 cursor-pointer">
                        <Heart size={20} />
                    </button>
                </div>

                {/* Product image */}
                <div className="mb-4">
                    <img
                        src={product.image}
                        alt="JO MALONE VETIVER"
                        className="w-[252px] object-contain h-[229px]"
                    />
                </div>

                {/* Product info */}
                <div className="text-center space-y-4 mt-7">
                    <h3 className="text-sm font-medium">{product.brand}...</h3>
                    <p className="text-xs text-gray-500">Eau De Toilette</p>
                    <p className="text-sm">
                        <span className="text-xs text-gray-500">from </span>
                        <span className="font-medium">$51.74</span>
                    </p>

                    {/* Add to bag button */}
                    <button className="w-[252px] h-[46px] py-2 mt-2 text-[14px] font-extrabold leading-[17.15px] text-center border-[1px] border-[#C4C4C4]">
                        ADD TO BAG
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
