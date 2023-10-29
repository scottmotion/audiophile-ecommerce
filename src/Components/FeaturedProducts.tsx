export default function FeaturedProducts() {
  return (
    <section className="flex w-full max-w-[1100px] flex-col items-center gap-8">
      {/* <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-dark-orange px-8 py-14">
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
      </div> */}

      <div className="grid w-full grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2">
        <div className="col-span-1 flex w-full flex-col items-center gap-8 rounded-lg bg-dark-orange px-8 py-14 md:col-span-2">
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
        </div>
        <div className="col-span-1 rounded-lg bg-medium-grey md:col-span-2">
          <img
            src="src/assets/home/mobile/image-speaker-zx7.jpg"
            className="w-full rounded-lg"
          ></img>
        </div>
        <div className="col-span-1 rounded-lg bg-dark-grey">
          <img
            src="src/assets/home/mobile/image-earphones-yx1.jpg"
            className="w-full rounded-lg"
          ></img>
        </div>
        <div className="col-span-1 rounded-lg bg-light-grey">
          <p>YX1 EARPHONES</p>
        </div>
      </div>
    </section>
  );
}
