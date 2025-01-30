import bannerImg from '../assets/image/product/banner01.png'
import gift from '../assets/image/product/gift.png'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 max-w-7xl md:max-w-[1234px] mx-auto mt-4">
      {/* Navigation and Banner Container */}
      <div className="relative w-full flex items-center">
        {/* Left Arrow - Outside Banner */}
        <button
          onClick={prevSlide}
          className="z-10 absolute -left-[68px] top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-[#F5F6F6] h-[95px]"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Banner container */}
        <div className="w-full h-[400px] overflow-hidden">
          <div className="relative w-full h-full">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-opacity duration-500 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                <div className={`relative w-full h-full bg-[#EEDDE3] flex items-center justify-between px-12`}>
                  {/* Left content */}
                  <div className="max-w-md space-y-4 z-10 text-center">
                    <p className="text-[14px] font-normal leading-[17.15px] font-['Avenir_Next_Cyr'] text-center">
                      {banner.subtitle}
                    </p>

                    <h2 className="text-[64px] font-normal leading-[64px] text-center decoration-solid font-['Yeseva_One']">
                      {banner.title}
                    </h2>
                    <button className="px-8 py-2 bg-[#BE5B75] text-white">
                      Shop Now
                    </button>
                    {/* Decorative elements */}
                    <div className="absolute -top-[136px] left-0 -rotate-12">
                      <img src={gift} alt="" className='h-[240.44px] w-[377.24px] ' />
                    </div>
                    <div className="absolute top-16 left-5">
                      <div className="text-red-500 text-3xl -rotate-6">♥</div>
                    </div>
                    <div className="absolute bottom-4 left-14">
                      <div className="text-red-500 text-3xl rotate-8">♥</div>
                    </div>
                    <div className="absolute bottom-4 left-[500px]">
                      <div className="text-red-500 text-3xl rotate-8">♥</div>
                    </div>
                    <div className="absolute top-60 left-32">
                      <div className="text-red-500 text-3xl -rotate-8">♥</div>
                    </div>
                    <div className="absolute top-40 left-[564px]">
                      <div className="text-red-500 text-3xl -rotate-8">♥</div>
                    </div>
                  </div>

                  {/* Right image */}
                  <div className="absolute right-0 top-0 h-full w-1/2">
                    <img
                      src={bannerImg}
                      alt={banner.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow - Outside Banner */}
        <button
          onClick={nextSlide}
          className="z-10 absolute -right-[36px] top-1/2 -translate-y-1/2 translate-x-4 p-2 bg-[#F5F6F6] h-[95px]"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dot indicators - Below Banner */}
      <div className="flex gap-2 mt-1">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${currentSlide === index
              ? 'bg-gray-900'
              : 'bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;


const banners = [
  {
    title: "VARIETY\nGIFT SETS",
    subtitle: "FIND THE PERFECT GIFT IN OUR",
    buttonText: "SHOP NOW",
    image: "/api/placeholder/800/400"
  },
  {
    title: "SUMMER\nCOLLECTION",
    subtitle: "DISCOVER OUR NEW",
    buttonText: "VIEW MORE",
    image: "/api/placeholder/800/400"
  },
  {
    title: "SPECIAL\nOFFERS",
    subtitle: "EXCLUSIVE DEALS FOR YOU",
    buttonText: "SHOP NOW",
    image: "/api/placeholder/800/400"
  }
];