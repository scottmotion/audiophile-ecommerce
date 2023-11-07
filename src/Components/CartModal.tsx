import { Link } from "react-router-dom";

type CartModalProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartModal({ setShowCart }: CartModalProps) {
  return (
    <>
      <div
        id="cartBackdrop"
        className="fixed left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-black opacity-50"
        onClick={() => setShowCart(false)}
      ></div>
      <div
        id="cart"
        className="absolute right-0 top-20 z-40 flex max-h-[calc(100vh-8rem)] w-full max-w-[calc(100vw-3rem)] flex-col justify-start gap-3 overflow-y-auto rounded-lg bg-white p-6 md:max-w-[23.5rem]"
      >
        <div className="flex flex-row items-center justify-between">
          <p className="heading-7 opacity-100">Cart (1)</p>
          <button className="underline opacity-50 hover:text-dark-orange hover:opacity-100">
            Remove All
          </button>
        </div>
        <div className="flex flex-row items-center justify-between gap-4">
          <div className="flex flex-row gap-4">
            <img
              src="/assets/cart/image-zx9-speaker.jpg"
              className="w-16 rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p className="font-bold uppercase opacity-100">Short Name</p>
              <p>$ Price</p>
              {/* add  toLocaleString() */}
            </div>
          </div>

          <div className="flex flex-row items-center justify-center bg-light-grey">
            <button className="btn-quantity opacity-50 hover:text-dark-orange hover:opacity-100">
              -
            </button>
            <p className="btn-quantity select-none opacity-100">1</p>
            <button className="btn-quantity opacity-50 hover:text-dark-orange hover:opacity-100">
              +
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p>Total</p>
          <p className="heading-7 opacity-100">$12345</p>
          {/* add toLocaleString() */}
        </div>

        <Link
          to={"/checkout"}
          className="btn btn-1"
          onClick={() => setShowCart(false)}
        >
          <button>Checkout</button>
        </Link>
      </div>
    </>
  );
}
