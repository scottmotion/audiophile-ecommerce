import { useNavigate } from "react-router-dom";

import { useShoppingCart } from "../context/ShoppingCartContext";

import { ReactComponent as ConfirmationIcon } from "/src/assets/icons/icon-order-confirmation.svg";

type ConfirmationModalProps = {
  setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
  resetFormData: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ConfirmationModal({
  setShowConfirmation,
  resetFormData,
}: ConfirmationModalProps) {
  const { cartItems, cartGrandTotal, removeAllFromCart } = useShoppingCart();
  const navigate = useNavigate();

  function clearTransaction() {
    navigate("/", { replace: true });
    setShowConfirmation(false);
    resetFormData;
    removeAllFromCart();
  }

  return (
    <>
      <div
        id="confirmationBackdrop"
        className="fixed left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-black opacity-50"
        onClick={() => clearTransaction()}
      ></div>
      <div
        id="confirmationModal"
        className="fixed left-1/2 top-1/2 z-40 flex max-h-[calc(100vh-8rem)] w-full max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 flex-col justify-start overflow-y-auto rounded-lg bg-white p-8 md:max-w-[33.75rem] md:p-12"
      >
        <ConfirmationIcon className="mb-6 shrink-0 md:mb-8" />
        <h2 className="heading-6 mb-4 leading-[28px] tracking-[0.86px] md:heading-4">
          Thank you
          <br />
          for your order
        </h2>
        <p className="mb-6 md:mb-8">
          You will receive an email confirmation shortly.
        </p>
        {cartItems.length > 0 && (
          <div className="mb-6 flex w-full shrink-0 flex-col overflow-hidden rounded-lg md:mb-12 md:flex-row">
            <div className="flex w-full flex-col items-center gap-3 bg-light-grey p-6">
              <div className="flex w-full flex-row justify-between">
                <div className="flex w-full flex-row gap-4">
                  <img
                    src={`/assets/cart/image-${cartItems[0].slug}.jpg`}
                    className="w-12 rounded-lg"
                  />
                  <div className="flex w-full flex-col justify-center">
                    <div className="flex flex-row justify-between">
                      <p className="font-bold uppercase opacity-100">
                        {cartItems[0].shortName}
                      </p>
                      <p className="font-bold">x{cartItems[0].quantity}</p>
                    </div>
                    <p className="uppercase">
                      $ {cartItems[0].price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
              {cartItems.length > 1 && (
                <>
                  <hr className="w-full text-medium-grey" />
                  <div className="label opacity-50">
                    and {cartItems.length - 1} other item(s)
                  </div>
                </>
              )}
            </div>
            <div className="flex w-full flex-col justify-center gap-2 bg-black px-6 py-4 text-white md:py-0 md:pr-0">
              <p className="uppercase">Grand Total</p>
              <p className="heading-7 opacity-100">
                $ {cartGrandTotal.toLocaleString()}
              </p>
            </div>
          </div>
        )}

        {/* <Link to={"/"} relative="path" onClick={() => clearTransaction()}>
          <button className="btn btn-1 w-full">Back to Home</button>
        </Link> */}
        <button className="btn btn-1 w-full" onClick={() => clearTransaction()}>
          Back to Home
        </button>

        {/* <button
          className="btn btn-3"
          onClick={() => setShowConfirmation(false)}
        >
          Close Modal
        </button> */}
      </div>
    </>
  );
}
