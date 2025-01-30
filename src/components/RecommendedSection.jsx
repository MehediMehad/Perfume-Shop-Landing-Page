import { recommendedProducts } from "../mockData/data";
import Carousel from "./Carousel/Carousel";

const RecommendedSection = () => {

  return (
    <>
      <Carousel header={"RECOMMENDED FOR YOU"} perPage={4} products={recommendedProducts} />
      <div className="flex justify-center mt-6">
        <button className="px-6 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50  cursor-pointer">
          SHOP MORE
        </button>
      </div>
    </>
  );
};

export default RecommendedSection;
