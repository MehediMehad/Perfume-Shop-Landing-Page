
const Card = ({ title, image, link }) => {
  return (
    <div className="relative group overflow-hidden">
      <div className="relative w-full h-[300px] overflow-hidden">
        {/* Image with hover effect */}
        <img
          src={image}
          alt={title}
          className="absolute -bottom-12 right-0 w-[80%] h-[100%] object-cover object-right-bottom transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-avenir">
          <h3 className="text-[22px] font-bold leading-[26px] tracking-[0.15em] text-center  decoration-1 ">
            {title}
          </h3>
          <a
            href={link}
            className="text-[16px] font-[400px] mt-5 leading-[19.6px] text-center underline decoration-solid"
          >
            Shop Now
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card