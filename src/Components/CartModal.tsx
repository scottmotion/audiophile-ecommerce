type CartModalProps = {
  toggleCart: React.MouseEventHandler;
};

export default function CartModal({ toggleCart }: CartModalProps) {
  return (
    <>
      <div
        id="cartBackdrop"
        className="fixed left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-black opacity-50"
        onClick={e => toggleCart(e)}
      ></div>
      <div
        id="cart"
        className="fixed right-6 top-28 z-40 flex max-h-[calc(100vh-8rem)] w-full flex-col justify-start gap-3 overflow-y-auto rounded-lg bg-white p-6 md:max-w-[50%] lg:max-w-[23.5rem]"
      >
        <div className="flex flex-row items-center justify-between">
          <p>Cart</p>
          <p>Removel All</p>
        </div>
        <div className="flex flex-row justify-between gap-4">
          <div className="flex flex-row gap-4">
            <img
              src="/assets/cart/image-zx9-speaker.jpg"
              className="w-16 rounded-lg"
            />
            <div className="flex flex-col justify-center">
              <p>Short Name</p>
              <p>$Price</p>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center bg-light-grey">
            <button className="btn">-</button>
            <p className="btn">1</p>
            <button className="btn">+</button>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <p>Total</p>
          <p>$12345</p>
        </div>

        <button className="btn btn-1">Checkout</button>
      </div>
    </>
  );
}
