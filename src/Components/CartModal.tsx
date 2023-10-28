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
        className="fixed right-6 top-28 z-40 flex max-h-[calc(100vh-8rem)] w-full max-w-[calc(100vw-3rem)] flex-col justify-start gap-3 overflow-y-auto rounded-lg bg-white p-6"
      >
        <p>Cart Modal</p>
        <button className="btn btn-1">Checkout</button>
      </div>
    </>
  );
}
