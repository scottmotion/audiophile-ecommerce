type MobileMenuProps = {
  toggleMobileMenu: React.MouseEventHandler;
};

export default function MobileMenu({ toggleMobileMenu }: MobileMenuProps) {
  return (
    <>
      <div
        id="mobileBackdrop"
        className="fixed left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-black opacity-50"
        onClick={e => toggleMobileMenu(e)}
      ></div>
      <section className="absolute top-20 z-40 flex w-full flex-col justify-center gap-20 rounded-b-lg bg-white p-6 pt-24 md:flex-row md:gap-3">
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
    </>
  );
}
