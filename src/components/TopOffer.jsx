const TopOffer = () => {
    return (
        <div className="bg-[#FFE8F0] flex justify-center py-1 gax-x-8">
            <div className="flex items-center">
                <h6 className="font-avenir text-[14px] font-[750] leading-[17.15px] tracking-[0.1em] text-center">25% OFF - sitewide -</h6>
                <p className="font-avenir text-[14px] font-semibold leading-[17.15px] text-center underline decoration-solid cursor-pointer">click here</p>
            </div>
            <div className=" mx-8 rounded-full p-2 bg-white">
                <p className="font-avenir text-[12px] font-[750] leading-[14.7px] text-center">OR</p>
            </div>
            <div className="flex items-center">
                <h6 className="font-avenir text-[14px] font-[750] leading-[17.15px] tracking-[0.1em] text-center">Free Shipping $100 min -</h6>
                <p className="font-avenir text-[14px] font-semibold leading-[17.15px] text-center underline decoration-solid cursor-pointer">click here</p>
            </div>
        </div>
    );
};

export default TopOffer;