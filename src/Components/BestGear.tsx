export default function BestGear() {
  return (
    <section className="flex max-w-[1100px] flex-col items-center">
      <div className="flex columns-2 flex-col items-center gap-8 lg:flex-row-reverse">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="src/assets/shared/desktop/image-best-gear.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="src/assets/shared/tablet/image-best-gear.jpg"
          />
          <img
            src="src/assets/shared/mobile/image-best-gear.jpg"
            className="rounded-lg"
          />
        </picture>
        <div className="flex basis-1/2 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <p>Bringing you the best audio gear</p>
          <p>
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
