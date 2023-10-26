export default function Home() {
  return (
    <>
      {/* <div className="bg-home-mobile bg-black bg-cover bg-center bg-no-repeat">
        <h1>Home</h1>
        <div className="flex flex-row gap-3">
          <button className="btn btn-1">Button 1</button>
          <button className="btn btn-2">Button 2</button>
          <button className="btn btn-3">Button 3</button>
          <button className="btn btn-4">Button 4</button>
        </div>
        <p>This is a Paragraph</p>
      </div> */}
      {/* <div className="mb-[7.5rem] flex flex-col gap-[7.5rem]"> */}
      <header className="-mt-[90px] mb-[5.75rem] flex flex-col">
        <div className="bg-black">
          <img
            src="src/assets/home/mobile/image-header.jpg"
            alt="Page header"
            className="w-full opacity-50 content-home-mobile md:content-home-tablet lg:content-home-desktop"
          ></img>
        </div>
        <div className="absolute mt-[90px]">
          <p className="text-overline text-white opacity-50">New Product</p>
          <h2 className="text-white">XX99 Mark II HeadphoneS</h2>
          <p className="text-white opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="btn btn-1">See Product</button>
        </div>
      </header>

      <div className="mb-[7.5rem] flex flex-col gap-[7.5rem]">
        <section className="mx-6 flex flex-col items-center gap-8">
          <div className="rounded-lg bg-light-grey p-6">
            <p>Headphones</p>
            <button className="btn btn-4">Shop</button>
          </div>
          <div className="rounded-lg bg-light-grey p-6">
            <p>Speakers</p>
            <button className="btn btn-4">Shop</button>
          </div>
          <div className="rounded-lg bg-light-grey p-6">
            <p>Earphones</p>
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
      </div>
    </>
  );
}
