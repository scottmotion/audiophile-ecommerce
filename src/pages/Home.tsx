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
      <div className="flex flex-col">
        <section className="flex flex-col">
          <div className="relative bg-black">
            <img
              src="src/assets/home/mobile/image-header.jpg"
              alt="Page header"
              className="content-home-mobile md:content-home-tablet lg:content-home-desktop w-full"
            ></img>
          </div>
          <div className="absolute">
            <p className="text-overline text-white opacity-50">New Product</p>
            <h2 className="text-white">XX99 Mark II HeadphoneS</h2>
            <p className="text-white opacity-75">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="btn btn-1">See Product</button>
          </div>
        </section>

        <section>
          <div>
            <p>Headphones</p>
            <button className="btn btn-4">Shop</button>
          </div>
          <div>
            <p>Speakers</p>
            <button className="btn btn-4">Shop</button>
          </div>
          <div>
            <p>Earphones</p>
            <button className="btn btn-4">Shop</button>
          </div>
        </section>

        <section className="m-6 flex flex-col items-center gap-8 rounded-lg bg-dark-orange px-8 py-14">
          <img
            className="w-2/3"
            src="src/assets/home/mobile/image-speaker-zx9.png"
          ></img>
          <div className="flex flex-col items-center gap-6 text-center">
            <p>ZX9 SPEAKER</p>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="btn btn-2">See Product</button>
          </div>
        </section>
      </div>
    </>
  );
}
