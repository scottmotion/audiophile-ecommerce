import { Link } from "react-router-dom";

import { useShoppingCart } from "../context/ShoppingCartContext";
import { fetchProductById } from "../api/fetchApi";
import { ProductData } from "../types/ProductType";
import { useEffect, useState } from "react";

type CartModalProps = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CartModal({ setShowCart }: CartModalProps) {
  const { cartItems, increaseItemQuantity, decreaseItemQuantity } =
    useShoppingCart();

  const [currentCart, setCurrentCart] = useState<ProductData[] | null>(null);

  // Get all product data
  useEffect(() => {
    let tempCart: ProductData[] = [];
    async function startFetching() {
      cartItems.forEach(async item => {
        const result = await fetchProductById(item.id);
        if (!ignore && result) {
          tempCart.push(result);
        }
      });
      setCurrentCart(tempCart);
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [cartItems]);

  // console.log("cart modal cartItems: ", cartItems);
  console.log("cart modal currentCart: ", currentCart);

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
        {/* Cart Header */}
        <div className="flex flex-row items-center justify-between">
          <p className="heading-7 opacity-100">Cart (1)</p>
          <button className="underline opacity-50 hover:text-dark-orange hover:opacity-100">
            Remove All
          </button>
        </div>

        {/* Cart Items */}
        {currentCart?.map(item => (
          <div
            className="flex flex-row items-center justify-between gap-4"
            key={item.id}
          >
            <div className="flex flex-row gap-4">
              <img
                src="/assets/cart/image-zx9-speaker.jpg"
                className="w-16 rounded-lg"
              />
              <div className="flex flex-col justify-center">
                <p className="font-bold uppercase opacity-100">{item.name}</p>
                <p>$ {item.price.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex flex-row items-center justify-center bg-light-grey">
              <button
                className="btn-quantity opacity-50 hover:text-dark-orange hover:opacity-100"
                onClick={() => decreaseItemQuantity(item.id)}
              >
                -
              </button>
              <p className="btn-quantity select-none opacity-100">
                {cartItems.find(i => i.id === item.id)?.quantity}
              </p>
              <button
                className="btn-quantity opacity-50 hover:text-dark-orange hover:opacity-100"
                onClick={() => increaseItemQuantity(item.id)}
              >
                +
              </button>
            </div>
          </div>
        ))}

        {/* Cart Footer */}
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
