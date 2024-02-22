export default function ButtonTop() {
  function toTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div
      className="invisible sm:visible fixed bottom-2 right-2 text-blue-900 text-3xl bg-white rounded-full cursor-pointer z-50 border border-blue-900"
      onClick={toTop}
    >
      <p className="text-blue-900 text-3xl">⇧</p>
    </div>
  );
}
