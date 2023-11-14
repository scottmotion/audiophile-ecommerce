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
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Alexei Ward"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="alexei@email.com"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="tel">Phone Number</label>
                <input
                  type="tel"
                  id="tel"
                  placeholder="+1 202-555-0136"
                ></input>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-subtitle">Shipping Info</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="1137 Williams Avenue"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="zipcode">ZIP Code</label>
                <input type="text" id="zipcode" placeholder="10001"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="city">City</label>
                <input type="text" id="city" placeholder="New York"></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  id="country"
                  placeholder="United States"
                ></input>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-subtitle">Payment Details</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div
                role="group"
                aria-labelledby="paymentLegend"
                className="grid gap-4 md:col-span-2 md:grid-cols-2"
              >
                <div id="paymentLegend" className="legend">
                  Payment Method
                </div>
                <div className="btn-select flex flex-row gap-4 md:col-start-2">
                  <input
                    type="radio"
                    id="eMoney"
                    name="payMethod"
                    className="aspect-square w-5"
                    defaultChecked
                  ></input>
                  <label htmlFor="eMoney" className="label-select">
                    e-Money
                  </label>
                </div>
                <div className="btn-select flex flex-row gap-4 md:col-start-2">
                  <input
                    type="radio"
                    id="cashOnDelivery"
                    name="payMethod"
                    className="aspect-square w-5"
                  ></input>
                  <label htmlFor="cashOnDelivery" className="label-select">
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="eMoneyNum">e-Money Number</label>
                <input
                  type="text"
                  id="eMoneyNum"
                  placeholder="238521993"
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="eMoneyPin">e-Money PIN</label>
                <input type="text" id="eMoneyPin" placeholder="6891"></input>
              </div>
            </div>
          </div>
        </section>
        <section className="flex w-full max-w-content flex-col gap-8 rounded-lg bg-white px-6 py-8">
          <h2 className="heading-7">Summary</h2>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="flex w-full flex-row gap-4">
                <img
                  src={`/assets/cart/image-xx59-headphones.jpg`}
                  className="w-16 rounded-lg"
                />
                <div className="flex w-full flex-col justify-center">
                  <div className="flex flex-row justify-between">
                    <p className="font-bold uppercase opacity-100">
                      item shortname
                    </p>
                    <p>x1</p>
                  </div>
                  <p className="uppercase">$ item price</p>
                </div>
              </div>
            </div>
          </div>
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
