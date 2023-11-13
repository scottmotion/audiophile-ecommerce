import { Link } from "react-router-dom";
export default function Checkout() {
  return (
    <>
      <nav className="flex w-full flex-col items-center justify-center bg-light-grey px-6 md:px-10">
        <div className="flex w-full max-w-content flex-row pb-6 pt-4 md:pt-8 lg:pb-14 lg:pt-20">
          <Link to={".."} relative="path">
            <button>
              <p>Go Back</p>
            </button>
          </Link>
        </div>
      </nav>
      <main className="flex w-full flex-col gap-[2rem] bg-light-grey px-6 pb-24 md:px-10 md:pb-[7.25rem] lg:pb-[8.75rem]">
        <section className="flex w-full max-w-content flex-col items-center rounded-lg bg-white">
          <h1 className="heading-5 md:heading-4">Checkout</h1>
          <div>
            <h2 className="text-subtitle">Billing Details</h2>
          </div>
          <div>
            <h2 className="text-subtitle">Shipping Info</h2>
          </div>
          <div>
            <h2 className="text-subtitle">Payment Details</h2>
          </div>
        </section>
        <section className="flex w-full max-w-content flex-col rounded-lg bg-white px-6 py-8">
          <h2 className="heading-7">Summary</h2>
          <p>Total</p>
          <p>Shipping</p>
          <p>VAT (included)</p>
          <p>Grand Total</p>
          <button className="btn btn-1 w-full"> Continue & Pay</button>
        </section>
      </main>
    </>
  );
}
