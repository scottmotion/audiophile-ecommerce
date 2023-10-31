import CategoryNav from "../Components/CategoryNav";
import BestGear from "../Components/BestGear";
export default function Headphones() {
  return (
    <>
      <header className="flex w-full flex-col items-center bg-black">
        <div className="flex w-full flex-col items-center justify-center bg-black">
          <h1 className="text-white">Headphones</h1>
        </div>
      </header>

      <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] px-6 md:gap-24 md:px-10">
        <CategoryNav />
        <BestGear />
      </main>
    </>
  );
}
