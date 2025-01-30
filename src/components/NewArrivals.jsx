import { newArrivalsProducts } from "../mockData/data";
import Carousel from "./Carousel/Carousel";

const NewArrivals = () => {
    return (
        <Carousel header={"NEW Arrivals!"} perPage={4} products={newArrivalsProducts} />
    );
};

export default NewArrivals;