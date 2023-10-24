export default function Home() {
  return (
    <>
      <nav className="flex flex-row justify-between gap-3 bg-black text-white">
        <img src="/src/assets/logo.svg" />
        <ul className="flex flex-row gap-3">
          <li>Headphones</li>
          <li>Speakers</li>
          <li>Earphones</li>
        </ul>
        <div>Cart</div>
      </nav>

      <h1>Home</h1>
      <div className="flex flex-row gap-3">
        <button className="btn btn-1">Button 1</button>
        <button className="btn btn-2">Button 2</button>
        <button className="btn btn-3">Button 3</button>
        <button className="btn btn-4">Button 4</button>
      </div>
      <p>This is a Paragraph</p>
    </>
  );
}
