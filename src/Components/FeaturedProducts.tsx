import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  return (
    <section className="flex w-full max-w-[1100px] flex-col items-center gap-8">
      <div className="grid w-full grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2">
        <div className="col-span-1 grid grid-cols-1 grid-rows-2 overflow-hidden rounded-lg bg-dark-orange md:col-span-2 lg:grid-cols-2 lg:grid-rows-1">
          <div className="relative flex w-full flex-col items-center justify-center">
            <img
              src="/assets/home/desktop/pattern-circles.svg"
              className="absolute max-w-none"
            ></img>

            <picture className="flex justify-center">
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/home/desktop/image-speaker-zx9.png"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/assets/home/tablet/image-speaker-zx9.png"
              />
              <img
                src="/assets/home/mobile/image-speaker-zx9.png"
                className="w-1/2"
              />
            </picture>
          </div>

          <div className="z-10 flex flex-col items-center gap-6 text-center lg:justify-center">
            <p>ZX9 Speaker</p>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to={"/speakers/6"}>
              <button className="btn btn-2">See Product</button>
            </Link>
          </div>
        </div>

        {/* <div className="col-span-1 flex w-full flex-col items-center gap-8 rounded-lg bg-dark-orange px-8 py-14 md:col-span-2">
          <picture className="flex justify-center">
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/home/desktop/image-speaker-zx9.png"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/home/tablet/image-speaker-zx9.png"
            />
            <img
              src="/assets/home/mobile/image-speaker-zx9.png"
              className="w-2/3"
            />
          </picture>
          <div className="flex flex-col items-center gap-6 text-center">
            <p>ZX9 Speaker</p>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="btn btn-2">See Product</button>
          </div>
        </div> */}

        <div className="col-span-1 flex flex-col justify-center rounded-lg bg-medium-grey md:col-span-2">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/assets/home/desktop/image-speaker-zx7.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/assets/home/tablet/image-speaker-zx7.jpg"
            />
            <img
              src="/assets/home/mobile/image-speaker-zx7.jpg"
              className="w-full rounded-lg"
            />
          </picture>
          <div className="absolute p-6">
            <p>ZX7 Speaker</p>
            <Link to={"/speakers/5"}>
              <button className="btn btn-3">See Product</button>
            </Link>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-1 grid-rows-2 gap-x-3 gap-y-6 md:col-span-2 md:grid-cols-2 md:grid-rows-1">
          <div className="col-span-1 rounded-lg bg-dark-grey">
            <img
              src="/assets/home/mobile/image-earphones-yx1.jpg"
              className="w-full rounded-lg"
            ></img>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center rounded-lg bg-light-grey p-6">
            <p>YX1 Earphones</p>
            <Link to={"/earphones/1"}>
              <button className="btn btn-3">See Product</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
