import { bestSellersProducts } from "../mockData/data";
import Carousel from "./Carousel/Carousel";

const BestSellers = () => {
    return (
        <Carousel header={"best sellers"} perPage={4} products={bestSellersProducts} />
    );
};

export default BestSellers;