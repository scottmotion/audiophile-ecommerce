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
      <div className="fixed top-20 z-40 flex max-h-[calc(100vh-8rem)] w-full flex-col justify-start gap-20 overflow-y-auto rounded-b-lg bg-white p-6 pt-24 md:flex-row md:justify-center md:gap-3">
        <p>Cart Modal</p>
      </div>
    </>
  );
}
