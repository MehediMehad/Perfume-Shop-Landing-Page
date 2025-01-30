import DiscountSection from "./components/DiscountSection";
import Navbar from "./components/Navbar";
import ShopCollection from "./components/ShopCollection";
import TopOffer from "./components/TopOffer";

const App = () => {
  return (
    <>
      <Navbar />
      <TopOffer />
      <DiscountSection />
      <ShopCollection />
    </>
  );
};

export default App;