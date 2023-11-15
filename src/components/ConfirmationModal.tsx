import { Link } from "react-router-dom";

import { ReactComponent as ConfirmationIcon } from "/src/assets/icons/icon-order-confirmation.svg";

type ConfirmationModalProps = {
  setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ConfirmationModal({
  setShowConfirmation,
}: ConfirmationModalProps) {
  return (
    <>
      <div
        id="confirmationBackdrop"
        className="fixed left-1/2 top-1/2 h-screen w-screen -translate-x-1/2 -translate-y-1/2 bg-black opacity-50"
        onClick={() => setShowConfirmation(false)}
      ></div>
      <div
        id="confirmationModal"
        className="fixed left-1/2 top-1/2 z-40 flex max-h-[calc(100vh-8rem)] w-full max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 flex-col justify-start gap-3 overflow-y-auto rounded-lg bg-white p-8 md:max-w-[23.5rem]"
      >
        <ConfirmationIcon className="shrink-0" />
        <h2 className="heading-6 leading-[28px] tracking-[0.86px] md:heading-4">
          Thank you
          <br />
          for your order
        </h2>
        <p>You will receive an email confirmation shortly.</p>
        <div className="flex shrink-0 flex-col overflow-hidden rounded-lg">
          <div className="flex flex-col items-center gap-3 bg-light-grey p-6">
            <div>1st Item</div>
            <hr className="w-full text-medium-grey" />
            <div className="label opacity-50">and 2 other item(s)</div>
          </div>
          <div className="flex flex-col gap-2 bg-black p-6 text-white">
            <p className="uppercase">Grand Total</p>
            <p className="heading-7 opacity-100">$ 5432</p>
          </div>
        </div>
        <Link
          to={"/"}
          relative="path"
          onClick={() => setShowConfirmation(false)}
        >
          <button className="btn btn-1 w-full">Back to Home</button>
        </Link>
        <button
          className="btn btn-3"
          onClick={() => setShowConfirmation(false)}
        >
          Close Modal
        </button>
      </div>
    </>
  );
}
