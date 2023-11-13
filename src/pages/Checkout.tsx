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
      <main className="flex w-full flex-col items-center gap-[2rem] bg-light-grey px-6 pb-24 md:px-10 md:pb-[7.25rem] lg:pb-[8.75rem]">
        <section className="flex w-full max-w-content flex-col gap-8 rounded-lg bg-white px-6 pb-8 pt-6">
          <h1 className="heading-5 md:heading-4">Checkout</h1>

          <div className="flex flex-col gap-4">
            <h2 className="text-subtitle">Billing Details</h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" id="name"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tel">Phone Number</label>
                <input type="tel" id="tel"></input>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-subtitle">Shipping Info</h2>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <input type="text" id="address"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="zipcode">ZIP Code</label>
                <input type="text" id="zipcode"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="city">City</label>
                <input type="text" id="city"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country">Country</label>
                <input type="text" id="country"></input>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-subtitle">Payment Details</h2>
            <div className="flex flex-col gap-6">
              <div
                role="group"
                aria-labelledby="paymentLegend"
                className="flex flex-col gap-4"
              >
                <div id="paymentLegend" className="legend">
                  Payment Method
                </div>
                <div className="flex flex-row gap-4">
                  <input type="radio" id="eMoney" name="payMethod"></input>
                  <label htmlFor="eMoney">e-Money</label>
                </div>
                <div className="flex flex-row gap-4">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="payMethod"
                  ></input>
                  <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="eMoneyNum">e-Money Number</label>
                <input type="text" id="eMoneyNum"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country">e-Money PIN</label>
                <input type="text" id="country"></input>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full max-w-content flex-col gap-8 rounded-lg bg-white px-6 py-8 uppercase">
          <h2 className="heading-7">Summary</h2>
          <div>Products</div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Total</p>
              <p className="heading-7 opacity-100">$5396</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p className="heading-7 opacity-100">$50</p>
            </div>
            <div className="flex justify-between">
              <p>VAT (included)</p>
              <p className="heading-7 opacity-100">$1076</p>
            </div>
            <div className="mt-4 flex justify-between">
              <p>Grand Total</p>
              <p className="heading-7 text-dark-orange opacity-100">$5446</p>
            </div>
          </div>
          <button className="btn btn-1 w-full"> Continue & Pay</button>
        </section>
      </main>
    </>
  );
}
