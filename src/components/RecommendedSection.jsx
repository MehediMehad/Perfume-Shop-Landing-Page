import { products } from "../mockData/data";
import Carousel from "./Carousel/Carousel";

const RecommendedSection = () => {

  return (
    <Carousel header={"RECOMMENDED FOR YOU"} perPage={4} button={"SHOP MORE"} products={products} />
  );
};

export default RecommendedSection;
