import { Link } from "react-router-dom";
export default function Checkout() {
  return (
    <>
      <nav className="flex w-full flex-col items-center justify-center px-6 md:px-10 lg:bg-light-grey">
        <div className="flex w-full max-w-content flex-row pb-6 pt-4 md:pt-8 lg:pb-14 lg:pt-20">
          <Link to={".."} relative="path">
            <button>
              <p>Go Back</p>
            </button>
          </Link>
        </div>
      </nav>
      <main className="flex w-full flex-col items-center gap-[7.5rem] px-6 md:px-10 lg:gap-[10rem] lg:bg-light-grey">
        <section className="mb-[7.5rem] flex w-full max-w-content flex-col items-center gap-20 rounded-lg bg-white lg:mb-[12.5rem]">
          <h1 className="heading-4">Checkout</h1>
        </section>
      </main>
    </>
  );
}
