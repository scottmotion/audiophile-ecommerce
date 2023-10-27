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
        <section className="mx-6 flex flex-col justify-center gap-16 md:flex-row md:gap-3">
          <div className="flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5">
            <img
              src="src/assets/shared/thumbnails/image-category-thumbnail-headphones.png"
              alt="Headphones"
              className="-mt-[5rem] w-40"
            ></img>
            <p className="pb-3 text-center font-bold uppercase tracking-[1.07px] text-black opacity-100">
              Headphones
            </p>
            <button className="btn btn-4">Shop</button>
          </div>

          <div className="flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5">
            <img
              src="src/assets/shared/thumbnails/image-category-thumbnail-speakers.png"
              alt="Headphones"
              className="-mt-[5rem] w-40"
            ></img>
            <p className="pb-3 text-center font-bold uppercase tracking-[1.07px] text-black opacity-100">
              Speakers
            </p>
            <button className="btn btn-4">Shop</button>
          </div>

          <div className="flex basis-1/3 flex-col content-end items-center rounded-lg bg-light-grey p-5">
            <img
              src="src/assets/shared/thumbnails/image-category-thumbnail-earphones.png"
              alt="Headphones"
              className="-mt-[5rem] w-48"
            ></img>
            <p className="pb-3 text-center font-bold uppercase tracking-[1.07px] text-black opacity-100">
              Earphones
            </p>
            <button className="btn btn-4">Shop</button>
          </div>
        </section>

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

        <section className="mx-6 flex flex-col items-center">
          <div className="flex flex-col items-center gap-8">
            <img
              src="src/assets/shared/mobile/image-best-gear.jpg"
              className="rounded-lg"
            ></img>
            <div className="flex flex-col items-center gap-6 text-center">
              <p>Bringing you the best audio gear</p>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
