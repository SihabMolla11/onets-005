import BannerSection from "./components/banner-section/BannerSection";
import Location from "./components/location-section/Location";
import NewAds from "./components/new-ads-section/NewAds";
import ProductAds from "./components/product-ads/ProductAds";
import ProductCategory from "./components/product-category/ProductCategory";
import WorkSection from "./components/work/WorkSection";

const App = () => {
  return (
    <div className="space-y-[100px]">
      <BannerSection />

      <ProductCategory />

      <ProductAds />

      <div className="bg-[#F5F7FA] py-[100px]">
        <WorkSection />
      </div>

      <NewAds />

      <Location />

    </div>
  );
};

export default App;