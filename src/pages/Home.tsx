import BestGear from "../Components/BestGear";
import CategoryNav from "../Components/CategoryNav";

export default function Home() {
  return (
    <>
      <header className="relative -z-10 -mt-[90px] mb-[5.75rem] flex flex-col items-center md:mb-36">
        <div className="bg-black">
          <img
            src="src/assets/home/mobile/image-header.jpg"
            alt="Page header"
            className="w-full opacity-50 content-home-mobile md:content-home-tablet lg:content-home-desktop"
          ></img>
        </div>
        <div className="absolute mt-[90px] flex flex-col items-center">
          <p className="text-overline text-white opacity-50">New Product</p>
          <h2 className="text-center text-white">XX99 Mark II HeadphoneS</h2>
          <p className="text-center text-white opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="btn btn-1">See Product</button>
        </div>
      </header>

      <main className="mb-[7.5rem] flex flex-col gap-[7.5rem] md:gap-24">
        <CategoryNav />
        <section className="mx-6 flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-8 rounded-lg bg-dark-orange px-8 py-14">
            <img
              className="w-2/3"
              src="src/assets/home/mobile/image-speaker-zx9.png"
            ></img>
            <div className="flex flex-col items-center gap-6 text-center">
              <p>ZX9 SPEAKER</p>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="btn btn-2">See Product</button>
            </div>
          </div>
        </section>
        <BestGear />
      </main>
    </>
  );
}
