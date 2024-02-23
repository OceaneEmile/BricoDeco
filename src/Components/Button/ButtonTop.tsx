export default function ButtonTop() {
  function toTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div
      className="invisible sm:visible fixed bottom-2 right-2  text-3xl bg-blue-900 rounded-full cursor-pointer z-50"
      onClick={toTop}
    >
      <p className="text-white text-3xl">⇧</p>
    </div>
  );
}
