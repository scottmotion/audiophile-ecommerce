export default function BestGear() {
  return (
    <section className="flex max-w-[1100px] flex-col items-center">
      <div className="grid grid-cols-1 items-center gap-10 md:gap-16 lg:grid-cols-2 lg:grid-rows-1">
        <picture className="col-span-1 lg:col-start-2">
          <source
            media="(min-width: 1024px)"
            srcSet="/assets/shared/desktop/image-best-gear.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/assets/shared/tablet/image-best-gear.jpg"
          />
          <img
            src="/assets/shared/mobile/image-best-gear.jpg"
            className="rounded-lg"
          />
        </picture>
        <div className="col-span-1 flex flex-col items-center gap-8 text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
          <h2 className="heading-5 max-w-[24ch] md:heading-2 lg:max-w-[18ch]">
            Bringing you the <span className="text-dark-orange">best</span>{" "}
            audio gear
          </h2>
          <p className="max-w-[62ch] lg:max-w-[48ch]">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}
