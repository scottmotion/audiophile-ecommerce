import { useEffect, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useForm, SubmitHandler } from "react-hook-form";

import ConfirmationModal from "../components/ConfirmationModal";
import BackButton from "../components/BackButton";

import { ReactComponent as CashOnDeliveryIcon } from "/src/assets/icons/icon-cash-on-delivery.svg";

type InputsType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  payMethod: string;
  eMoneyNum: string;
  eMoneyPin: string;
};

export default function Checkout() {
  const { cartItems, cartTotal, cartShipping, cartVat, cartGrandTotal } =
    useShoppingCart();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>();

  const defaultFormData = {
    name: "",
    email: "",
    phone: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    payMethod: "eMoney",
    eMoneyNum: "",
    eMoneyPin: "",
  };

  const [formData, setFormData] = useState(defaultFormData);

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

  function resetFormData() {
    setFormData(defaultFormData);
  }

  // const onSubmit: SubmitHandler<InputsType> = data => {
  const onSubmit: SubmitHandler<InputsType> = () => {
    // console.log("formData: ", formData);
    // console.log("onSubmit data: ", data);
    setShowConfirmation(true);
  };

  return (
    <>
      <nav className="flex w-full flex-col items-center justify-center bg-off-white px-6 md:px-10">
        <div className="flex w-full max-w-content flex-row pb-6 pt-4 md:pt-12 lg:pb-14 lg:pt-20">
          <BackButton />
        </div>
      </nav>
      <main className="flex w-full flex-col items-center bg-off-white px-6 pb-24 md:px-10 md:pb-[7.25rem] lg:pb-[8.75rem]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full max-w-content gap-8 lg:grid-cols-3"
        >
          <section className="flex w-full max-w-content flex-col gap-8 rounded-lg bg-white px-6 pb-8 pt-6 md:px-7 md:pt-8 lg:col-span-2 lg:pb-12 lg:pt-[3.25rem]">
            <h1 className="heading-5 md:heading-4">Checkout</h1>

            <div className="flex flex-col gap-4 md:mb-9">
              <h2 className="text-subtitle">Billing Details</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="name">Name</label>
                    {errors.name && <div className="error">Required</div>}
                  </div>
                  <input
                    {...register("name", {
                      required: true,
                      pattern: /[a-zA-Z]/,
                    })}
                    type="text"
                    id="name"
                    placeholder="Alexei Ward"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${
                      errors.name && "outline -outline-offset-1 outline-red"
                    }`}
                  ></input>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="email">Email Address</label>
                    {errors.email && <div className="error">Required</div>}
                  </div>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,}$/,
                    })}
                    type="email"
                    id="email"
                    placeholder="alexei@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${
                      errors.email && "outline -outline-offset-1 outline-red"
                    }`}
                  ></input>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="phone">Phone Number</label>
                    {errors.phone && <div className="error">Required</div>}
                  </div>
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    id="phone"
                    placeholder="+1 202-555-0136"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${
                      errors.phone && "outline -outline-offset-1 outline-red"
                    }`}
                  ></input>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:mb-9">
              <h2 className="text-subtitle">Shipping Info</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="address">Address</label>
                    {errors.address && <div className="error">Required</div>}
                  </div>
                  <input
                    {...register("address", { required: true })}
                    type="text"
                    id="address"
                    placeholder="1137 Williams Avenue"
                    value={formData.address}
                    onChange={handleChange}
                    className={`${
                      errors.address && "outline -outline-offset-1 outline-red"
                    }`}
                  ></input>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="zipcode">ZIP Code</label>
                    {errors.zipcode && <div className="error">Required</div>}
                  </div>
                  <input
                    {...register("zipcode", { required: true })}
                    type="text"
                    id="zipcode"
                    placeholder="10001"
                    value={formData.zipcode}
                    onChange={handleChange}
                    className={`${
                      errors.zipcode && "outline -outline-offset-1 outline-red"
                    }`}
                  ></input>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="city">City</label>
                    {errors.city && <div className="error">Required</div>}
                  </div>
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    id="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleChange}
                    className={`${
                      errors.city && "outline -outline-offset-1 outline-red"
                    }`}
                  ></input>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row justify-between">
                    <label htmlFor="country">Country</label>
                    {errors.country && <div className="error">Required</div>}
                  </div>
                  <input
                    {...register("country", { required: true })}
                    type="text"
                    id="country"
                    placeholder="United States"
                    value={formData.country}
                    onChange={handleChange}
                    className={`${
                      errors.country && "outline -outline-offset-1 outline-red"
                    }`}
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
                      {...register("payMethod", { required: true })}
                      type="radio"
                      id="eMoney"
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
                      {...register("payMethod", { required: true })}
                      type="radio"
                      id="cashOnDelivery"
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
                      <div className="flex flex-row justify-between">
                        <label htmlFor="eMoneyNum">e-Money Number</label>
                        {errors.eMoneyNum && (
                          <div className="error">Required</div>
                        )}
                      </div>
                      <input
                        {...register("eMoneyNum", {
                          required: formData.payMethod === "eMoney",
                        })}
                        type="text"
                        id="eMoneyNum"
                        placeholder="238521993"
                        value={formData.eMoneyNum}
                        onChange={handleChange}
                        className={`${
                          errors.eMoneyNum &&
                          "outline -outline-offset-1 outline-red"
                        }`}
                      ></input>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-row justify-between">
                        <label htmlFor="eMoneyPin">e-Money PIN</label>
                        {errors.eMoneyPin && (
                          <div className="error">Required</div>
                        )}
                      </div>
                      <input
                        {...register("eMoneyPin", {
                          required: formData.payMethod === "eMoney",
                          pattern: /^[0-9]{4}$/,
                        })}
                        type="text"
                        id="eMoneyPin"
                        placeholder="6891"
                        value={formData.eMoneyPin}
                        onChange={handleChange}
                        className={`${
                          errors.eMoneyPin &&
                          "outline -outline-offset-1 outline-red"
                        }`}
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
            <div className="flex w-full flex-col gap-8 rounded-lg bg-white px-6 py-8 md:px-8">
              <h2 className="heading-7">Summary</h2>
              <div className="flex flex-col gap-6">
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
                            <p className="font-bold">x{item.quantity}</p>
                          </div>
                          <p className="font-bold uppercase">
                            $ {item.price.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <p className="uppercase">Total</p>
                  <p className="heading-7 opacity-100">
                    $ {cartTotal.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="uppercase">Shipping</p>
                  <p className="heading-7 opacity-100">
                    $ {cartShipping.toLocaleString()}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="uppercase">VAT (included)</p>
                  <p className="heading-7 opacity-100">
                    $ {cartVat.toLocaleString()}
                  </p>
                </div>
                <div className="mt-4 flex justify-between">
                  <p className="uppercase">Grand Total</p>
                  <p className="heading-7 text-dark-orange opacity-100">
                    $ {cartGrandTotal.toLocaleString()}
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-1 w-full"
                disabled={cartTotal < 1}
              >
                Continue & Pay
              </button>
            </div>
          </section>
        </form>
      </main>
      <div className={`${confirmationVisibility} z-50 w-full`}>
        <ConfirmationModal
          setShowConfirmation={setShowConfirmation}
          resetFormData={resetFormData}
        />
      </div>
    </>
  );
}
