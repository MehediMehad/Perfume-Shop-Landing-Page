import giftImage from "../assets/image/product/bg5.png";

export default function GiftCertificate() {
    return (
        <div className="max-w-[1238px] mx-auto my-6 overflow-hidden">
            <div className="grid grid-cols-2 bg-[#FCF1F5]">
                {/* Left Side: Text Section */}
                <div className="flex flex-col justify-center p-6 ml-16">
                    <h2 className="text-4xl font-extrabold text-black">GIFT CERTIFICATES</h2>
                    <button className="mt-4 px-4 w-[234px] py-2 border-2 border-black text-black font-semibold">
                        GET A GIFT CERTIFICATE
                    </button>
                </div>

                {/* Right Side: Image Section */}
                <div className="relative">
                    <img
                        src={giftImage}
                        alt="Gift Certificate"
                    />
                </div>
            </div>
        </div>
    );
}
