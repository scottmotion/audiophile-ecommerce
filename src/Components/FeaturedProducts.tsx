import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  return (
    <section className="max-w-content flex w-full flex-col items-center gap-8">
      <div className="grid w-full grid-cols-1 gap-x-3 gap-y-6 md:grid-cols-2">
        <div className="col-span-1 grid grid-cols-1 grid-rows-2 overflow-hidden rounded-lg bg-dark-orange py-12 md:col-span-2 lg:grid-cols-2 lg:grid-rows-1">
          <div className="relative flex w-full flex-col items-center justify-center pb-8">
            <img
              src="/assets/home/desktop/pattern-circles.svg"
              className="absolute w-[170%] max-w-none"
            />

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
                className="z-10 w-1/2"
              />
            </picture>
          </div>

          <div className="z-10 flex flex-col items-center justify-between gap-6 px-6 text-center lg:justify-center">
            <h2 className="heading-3 text-white opacity-100 md:heading-1">
              ZX9
              <br />
              Speaker
            </h2>
            <p className="text-white opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to={"/speakers/zx9-speaker"}>
              <button className="btn btn-2">See Product</button>
            </Link>
          </div>
        </div>

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
          <div className="absolute flex flex-col gap-8 p-6 md:pl-16">
            <h2 className="heading-5">ZX7 Speaker</h2>
            <Link to={"/speakers/zx7-speaker"}>
              <button className="btn btn-3">See Product</button>
            </Link>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-1 grid-rows-2 gap-x-3 gap-y-6 md:col-span-2 md:grid-cols-2 md:grid-rows-1">
          <div className="col-span-1 rounded-lg bg-dark-grey">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet="/assets/home/desktop/image-earphones-yx1.jpg"
              />
              <source
                media="(min-width: 768px)"
                srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
              />
              <img
                src="/assets/home/mobile/image-earphones-yx1.jpg"
                className="w-full rounded-lg"
              />
            </picture>
          </div>
          <div className="col-span-1 flex flex-col items-start justify-center gap-8 rounded-lg bg-light-grey p-6 md:pl-10">
            <h2 className="heading-5">YX1 Earphones</h2>
            <Link to={"/earphones/yx1-earphones"}>
              <button className="btn btn-3">See Product</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
