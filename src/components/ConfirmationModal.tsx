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
        id="confirmation"
        className="absolute left-1/2 top-1/2 z-40 flex max-h-[calc(100vh-8rem)] w-full max-w-[calc(100vw-3rem)] -translate-x-1/2 -translate-y-1/2 flex-col justify-start gap-3 overflow-y-auto rounded-lg bg-white p-6 md:max-w-[23.5rem]"
      >
        <button
          className="btn btn-1"
          onClick={() => setShowConfirmation(false)}
        >
          Close Modal
        </button>
      </div>
    </>
  );
}
