import Banner from "./components/Banner";
import BestSellers from "./components/BestSellers";
import DiscountSection from "./components/DiscountSection";
import GiftCertificate from "./components/GiftCertificate";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import RecommendedSection from "./components/RecommendedSection";
import ShopCollection from "./components/ShopCollection";
import TopOffer from "./components/TopOffer";

const App = () => {
  return (
    <>
      <Navbar />
      <TopOffer />
      <Banner />
      <DiscountSection />
      <ShopCollection />
      <RecommendedSection />
      <NewArrivals />
      <GiftCertificate />
      <BestSellers />
    </>
  );
};

export default App;