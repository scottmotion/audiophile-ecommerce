import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

import ConfirmationModal from "../components/ConfirmationModal";
import BackButton from "../components/BackButton";

import { ReactComponent as CashOnDeliveryIcon } from "/src/assets/icons/icon-cash-on-delivery.svg";

export default function Checkout() {
  const { cartItems, cartTotal, cartShipping, cartVat, cartGrandTotal } =
    useShoppingCart();

  const [showConfirmation, setShowConfirmation] = useState(false);
  const confirmationVisibility = showConfirmation ? "visible" : "invisible";

  // hide overflow on body when modal is open
  useEffect(() => {
    if (showConfirmation) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showConfirmation]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tel: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    payMethod: "eMoney",
    eMoneyNum: "",
    eMoneyPin: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSetPaymentMethod(method: string) {
    setFormData(prevFormData => ({
      ...prevFormData,
      payMethod: method,
    }));
  }

  return (
    <>
      <nav className="flex w-full flex-col items-center justify-center bg-light-grey px-6 md:px-10">
        <div className="flex w-full max-w-content flex-row pb-6 pt-4 md:pt-8 lg:pb-14 lg:pt-20">
          <BackButton />
        </div>
      </nav>
      <main className="flex w-full flex-col items-center  bg-light-grey px-6 pb-24 md:px-10 md:pb-[7.25rem] lg:pb-[8.75rem]">
        <div className="grid w-full max-w-content gap-[2rem] lg:grid-cols-3">
          <section className="flex w-full max-w-content flex-col gap-8 rounded-lg bg-white px-6 pb-8 pt-6 lg:col-span-2">
            <h1 className="heading-5 md:heading-4">Checkout</h1>

            <div className="flex flex-col gap-4">
              <h2 className="text-subtitle">Billing Details</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Alexei Ward"
                    value={formData.name}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="alexei@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="tel">Phone Number</label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    placeholder="+1 202-555-0136"
                    value={formData.tel}
                    onChange={handleChange}
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
                    name="address"
                    placeholder="1137 Williams Avenue"
                    value={formData.address}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="zipcode">ZIP Code</label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    placeholder="10001"
                    value={formData.zipcode}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="United States"
                    value={formData.country}
                    onChange={handleChange}
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
                  <div
                    className={`btn-select flex flex-row gap-4 md:col-start-2 ${
                      formData.payMethod === "eMoney"
                        ? "border-dark-orange"
                        : ""
                    }`}
                    onClick={() => handleSetPaymentMethod("eMoney")}
                  >
                    <input
                      type="radio"
                      id="eMoney"
                      name="payMethod"
                      value="eMoney"
                      onChange={handleChange}
                      checked={formData.payMethod === "eMoney"}
                    ></input>
                    <label htmlFor="eMoney" className="label-select">
                      e-Money
                    </label>
                  </div>
                  <div
                    className={`btn-select flex flex-row gap-4 md:col-start-2 ${
                      formData.payMethod === "cashOnDelivery"
                        ? "border-dark-orange"
                        : ""
                    }`}
                    onClick={() => handleSetPaymentMethod("cashOnDelivery")}
                  >
                    <input
                      type="radio"
                      id="cashOnDelivery"
                      name="payMethod"
                      value="cashOnDelivery"
                      onChange={handleChange}
                      checked={formData.payMethod === "cashOnDelivery"}
                    ></input>
                    <label htmlFor="cashOnDelivery" className="label-select">
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                {formData.payMethod === "eMoney" && (
                  <>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="eMoneyNum">e-Money Number</label>
                      <input
                        type="text"
                        id="eMoneyNum"
                        name="eMoneyNum"
                        placeholder="238521993"
                        value={formData.eMoneyNum}
                        onChange={handleChange}
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="eMoneyPin">e-Money PIN</label>
                      <input
                        type="text"
                        id="eMoneyPin"
                        name="eMoneyPin"
                        placeholder="6891"
                        value={formData.eMoneyPin}
                        onChange={handleChange}
                      ></input>
                    </div>
                  </>
                )}
                {formData.payMethod === "cashOnDelivery" && (
                  <div className="flex flex-row gap-6 md:col-span-2 md:gap-8">
                    <CashOnDeliveryIcon className="shrink-0" />
                    <p>
                      The ‘Cash on Delivery’ option enables you to pay in cash
                      when our delivery courier arrives at your residence. Just
                      make sure your address is correct so that your order will
                      not be cancelled.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section className="flex w-full max-w-content flex-col">
            <div className="flex w-full flex-col gap-8 rounded-lg bg-white px-6 py-8">
              <h2 className="heading-7">Summary</h2>
              {cartItems.map(item => (
                <div className="flex flex-col" key={item.id}>
                  <div className="flex flex-row justify-between">
                    <div className="flex w-full flex-row gap-4">
                      <img
                        src={`/assets/cart/image-${item.slug}.jpg`}
                        className="w-16 rounded-lg"
                      />
                      <div className="flex w-full flex-col justify-center">
                        <div className="flex flex-row justify-between">
                          <p className="font-bold uppercase opacity-100">
                            {item.shortName}
                          </p>
                          <p>x{item.quantity}</p>
                        </div>
                        <p className="uppercase">
                          $ {item.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p>Total</p>
                  <p className="heading-7 opacity-100">
                    $ {cartTotal.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping</p>
                  <p className="heading-7 opacity-100">
                    $ {cartShipping.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p>VAT (included)</p>
                  <p className="heading-7 opacity-100">
                    $ {cartVat.toLocaleString()}
                  </p>
                </div>
                <div className="mt-4 flex justify-between">
                  <p>Grand Total</p>
                  <p className="heading-7 text-dark-orange opacity-100">
                    $ {cartGrandTotal.toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                className="btn btn-1 w-full"
                onClick={() => setShowConfirmation(true)}
                disabled={cartTotal < 1}
              >
                Continue & Pay
              </button>
            </div>
          </section>
        </div>
      </main>
      <div className={`${confirmationVisibility} z-50 w-full`}>
        <ConfirmationModal setShowConfirmation={setShowConfirmation} />
      </div>
    </>
  );
}
