import CategoryNav from "../Components/CategoryNav";
import FeaturedProducts from "../Components/FeaturedProducts";
import BestGear from "../Components/BestGear";

export default function Home() {
  return (
    <>
      <header className="relative -z-10 -mt-[90px] mb-6 flex w-full flex-col items-center bg-black md:mb-[4.5rem]">
        <div className="w-full bg-black">
          <img
            src="src/assets/home/mobile/image-header.jpg"
            alt="Page header"
            className="w-full opacity-50 content-home-mobile md:content-home-tablet lg:content-home-desktop"
          ></img>
        </div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center px-6 pt-[90px] md:px-10">
          <div className="flex w-full max-w-[1100px] flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-overline mb-4 text-white opacity-50">
              New Product
            </p>
            <h2 className="mb-6 text-white">
              XX99 Mark II
              <br />
              Headphones
            </h2>
            <p className="mb-7 max-w-[30ch] text-white opacity-75 md:max-w-[40ch]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="btn btn-1">See Product</button>
          </div>
        </div>
      </header>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:gap-24 md:px-10 lg:gap-[12.5rem]">
        <CategoryNav />
        <FeaturedProducts />
        <BestGear />
      </main>
    </>
  );
}
