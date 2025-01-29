import logo from "../../public/Vector.png"
import { BiSearch } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";

const navItems = [
    { name: "Perfumes" },
    { name: "Brands" },
    { name: "Skincare" },
    { name: "Makeup" },
    { name: "Haircare" },
    { name: "Aromatherapy" },
    { name: "Candles" },
    { name: "Gifts" },
]
const Navbar = () => {
    return (
        <nav>
            {/* Top section */}
            <div className="flex flex-wrap justify-between bg-primary h-10 items-center px-3 md:px-12 text-white text-[14px] font-weight-400 font-avenir">
                <div className="flex gap-x-3 md:gap-x-5 order-1 md:order-1">
                    <p>USD</p>
                    <p>English</p>
                </div>
                <div className="order-3 md:order-2 mx-auto">
                    <p>🔥  Only 11 days left until VALENTINE&apos;S DAY!  🔥</p>
                </div>
                <div className="flex gap-x-3 md:gap-x-5 order-2 md:order-3">
                    <p className="cursor-pointer">Help & Information</p>
                    <p className="cursor-pointer">Connect with us</p>
                </div>
            </div>
            {/* Logo And Search section */}
            <div className="mt-2 px-12">
                <div className="flex flex-wrap justify-between">
                    {/* Search Box */}
                    <div className="hidden md:block">
                        <div className="relative basis-1/5">
                            <input
                                placeholder="Hey, what are you looking for?"
                                className="relative focus:outline-0 px-10 py-2 outline-none border-[#E5E5E5] border-[1px] rounded-[29px] placeholder:text-[#898989]"
                                name="search"
                                type="search"
                            />
                            <BiSearch className="size-[25px] absolute top-3 right-3 text-black" />
                        </div>
                    </div>
                    {/* Logo */}
                    <div className="flex font-kodchasan mx-auto md:mx-0">
                        <div className="mr-[6px]">
                            <img src={logo} alt="" />
                        </div>
                        <div className="">
                            <h1 className="logo text-[32px] font-normal leading-[0px]">PerfumeShop<span className="text-[12px] font-bold">.com</span></h1>
                            <p className="font-almarai text-[11px] font-normal leading-[12.28px] tracking-[0.07em]">TRUSTED ONLINE SINCE 1997</p>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex gap-x-3 box-border mx-auto md:mx-0">
                        <div className="flex gap-x-[6px] items-center justify-center hover:border-[#E5E5E5] p-2 cursor-pointer duration-200">
                            <FaRegUser className="text-[15px]" />
                            <p className="font-weight-400">My Account</p>
                        </div>
                        <div className="flex gap-x-[6px] items-center justify-center hover:border-[#E5E5E5] p-2 cursor-pointer duration-200">
                            <AiOutlineHeart className="text-[18px]" />
                            <p className="font-weight-400">Wishlist</p>
                        </div>
                        <div className="flex gap-x-[6px] items-center justify-center hover:border-[#E5E5E5] p-2 cursor-pointer duration-200">
                            <AiOutlineShopping className="text-[20px]" />
                            <p className="font-weight-400">2 items</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Items section */}
            <div className="items-center justify-center flex mx-auto mt-6 px-3">
                <div className="flex flex-wrap gap-x-5 justify-center">
                    {navItems?.map((i, index) => (
                        <p className="font-avenir text-[14px] font-[450] leading-[17.15px] tracking-[0.05em] mb-2 text-left text-[#383838] cursor-pointer" key={index}>{i.name}</p>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

