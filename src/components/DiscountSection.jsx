import bgNew from '../assets/image/NEW.png';
// import p1 from '../assets/image/Rectangle 1143.png';
import p2 from '../assets/image/Rectangle_1142-removebg-preview.png';
import p3 from '../assets/image/Rectangle_1144-removebg-preview.png';


const DiscountSection = () => {
    return (
        <div className='relative overflow-hidden max-w-[1234px] h-[223px] bg-[#FCD0CC] mx-auto mt-20'>
            {/* Left side text content */}
            <div className="absolute top-1/2 -translate-y-1/2 z-10 pl-5 md:pl-24 flex flex-col gap-4">
                <h2 className="text-[48px] font-bold text-[#1E293B] leading-[48px] tracking-tight">
                    UP TO 80% OFF.
                </h2>
                <button className="bg-[#4D2952] text-white px-6 py-2.5 rounded text-sm uppercase tracking-wider w-fit transition-colors font-medium">
                    SEARCH FOR BRAND
                </button>
            </div>
            {/* New BG */}
            <div
                className="absolute w-[60%] right-0 h-[300px] bg-no-repeat bg-center z-[666] hidden md:block"
                style={{ backgroundImage: `url(${bgNew})` }}
            >
            </div>
            {/* Image 1 */}
            <img src={p2} alt="" className='absolute right-0 top-2 z-[888]' />
            {/* Trust badge */}
            <div className="absolute right-2 md:right-16 top-1/2 -translate-y-1/2 flex justify-center items-center bg-black text-white rounded-full px-4 py-1 w-[120px] h-[120px] z-[999] text-[14px] font-bold leading-[22.05px] text-center font-avenir">
                <div>
                    <p>Trusted</p>
                    <p className='text-[#FFC5BF] font-[300px]'>SINCE 1997</p>
                </div>
            </div>
            {/* Image 2 */}
            <img src={p3} alt="" className='absolute right-14 top-5 hidden md:block' />
            <img src={p3} alt="" className='absolute right-80 top-24 hidden md:block' />
        </div>
    );
};

export default DiscountSection;