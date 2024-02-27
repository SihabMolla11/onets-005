import BannerContent from "./BannerContent";
import Navbar from "./Navbar";

const BannerSection = () => {
    return (
        <div className="max-h-[800px] h-full bg-cover bg-no-repeat	max-w-[2250] w-full " style={{ backgroundImage: "url(./BG.png)" }}>
            <div className="my-container">
                <div className="hidden lg:block">
                    <Navbar />
                </div>
            </div>
            <div className="mt-[164px] my-container  ">
                <BannerContent />
            </div>
        </div>
    );
};

export default BannerSection;