import { Link } from "react-router-dom";

import { useShoppingCart } from "../context/ShoppingCartContext";

type CartModalProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartModal({ setShowCart }: CartModalProps) {
  const {
    cartItems,
    cartQuantity,
    cartTotal,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeAllFromCart,
  } = useShoppingCart();
  console.log("Testing useScrollPosition");

  return (
    <>
      <div
        id="cartBackdrop"
        className="fixed left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-black opacity-50"
        onClick={() => setShowCart(false)}
      ></div>
      <div
        id="cart"
        className="absolute right-0 top-20 z-40 flex max-h-[calc(100vh-8rem)] w-full max-w-[calc(100vw-3rem)] flex-col justify-start gap-8 overflow-y-auto rounded-lg bg-white px-7 py-8 md:max-w-[23.5rem]"
      >
        {/* Cart Header */}
        <div className="flex flex-row items-center justify-between">
          <p className="heading-7 opacity-100">Cart ({cartQuantity})</p>
          <button
            className="underline opacity-50 hover:text-dark-orange hover:opacity-100 disabled:invisible"
            onClick={removeAllFromCart}
            disabled={cartQuantity < 1}
          >
            Remove All
          </button>
        </div>

        {/* Cart Items */}
        {cartItems.length > 0 && (
          <div className="flex flex-col gap-6">
            {cartItems.map(item => (
              <div
                className="flex flex-row items-center justify-between gap-4"
                key={item.id}
              >
                <div className="flex flex-row gap-4">
                  <img
                    src={`/assets/cart/image-${item.slug}.jpg`}
                    className="w-16 rounded-lg"
                  />
                  <div className="flex flex-col justify-center">
                    <p className="font-bold uppercase opacity-100">
                      {item.shortName}
                    </p>
                    <p className="font-bold">$ {item.price.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex flex-row items-center justify-center bg-light-grey">
                  <button
                    className="btn-quantity-modal opacity-50 hover:text-dark-orange hover:opacity-100"
                    onClick={() => decreaseItemQuantity(item.id)}
                  >
                    -
                  </button>
                  <p className="btn-quantity-modal select-none opacity-100">
                    {cartItems.find(i => i.id === item.id)?.quantity}
                  </p>
                  <button
                    className="btn-quantity-modal opacity-50 hover:text-dark-orange hover:opacity-100"
                    onClick={() => increaseItemQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Cart Footer */}
        <div className="flex flex-col gap-6">
          {cartQuantity > 0 ? (
            <div className="flex flex-row items-center justify-between">
              <p>TOTAL</p>
              <p className="heading-7 opacity-100">
                $ {cartTotal.toLocaleString()}
              </p>
            </div>
          ) : (
            <p className="flex justify-center">Your cart is empty</p>
          )}
          {cartQuantity > 0 ? (
            <Link to={"/checkout"} onClick={() => setShowCart(false)}>
              <button className="btn btn-1 w-full">Checkout</button>
            </Link>
          ) : (
            <button className="btn btn-1" onClick={() => setShowCart(false)}>
              Continue Shopping
            </button>
          )}
        </div>
      </div>
    </>
  );
}
