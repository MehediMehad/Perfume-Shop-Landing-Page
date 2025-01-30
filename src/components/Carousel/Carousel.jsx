import { useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Card from "./Card";

const Carousel = ({ header, perPage, products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = perPage;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - itemsPerPage : prevIndex - 1
        );
    };

    const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

    // If we need to loop around to the start
    if (visibleProducts.length < itemsPerPage) {
        visibleProducts.push(...products.slice(0, itemsPerPage - visibleProducts.length));
    }

    return (
        <div className="max-w-[1340px] mx-auto px-4 py-8 font-avenir">
            <h2 className="text-[30px] font-extrabold leading-[36.75px] text-center decoration-solid my-10 uppercase">
                {header}
            </h2>
            <div className="relative">
                <div className="flex gap-1 transition-transform duration-300 ease-in-out">
                    {visibleProducts.map((product, index) => (
                        <div key={index} className="w-1/4 min-w-[250px]">
                            <Card product={product} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={prevSlide}
                    className="absolute left-5 top-1/2 -translate-y-1/2 -translate-x-4 p-2 bg-[#F5F6F6] h-[95px]"
                >
                    <ChevronLeft size={12} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-5 top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-[#F5F6F6] h-[95px]"
                >
                    <ChevronRight size={12} />
                </button>
            </div>
        </div>
    );
};

export default Carousel;