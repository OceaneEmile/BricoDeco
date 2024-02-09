export default function Step() {
  return (
    <div>
      <div className="flex items-center p-4 flex-col-reverse border-t border-gray-200 sm:flex-row">
        <div className="mr-4">
          <h4 className="font-bold text-lg text-left ">Etape 1 :</h4>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            provident eaque nemo at eum molestiae! Totam sit debitis illum,
            veritatis, voluptatem repellendus, maiores voluptate autem quas vero
            vel praesentium itaque.
          </p>
        </div>
        <img
          className="sm:w-2/4 "
          src="https://kazan.kronostime.ru/upload/images.opt/iblock/5d3/u0l1tqhz9ngu2ksf7ah5exzukuxfz098/WFGG-W85_2.webp"
          alt=""
        />
      </div>
      <div className="flex items-center p-4 flex-col-reverse border-t border-gray-200 sm:flex-row">
        <div className="mr-4">
          <h4 className="font-bold text-lg text-left ">Etape 2 :</h4>
          <p className="text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
            provident eaque nemo at eum molestiae! Totam sit debitis illum,
            veritatis, voluptatem repellendus, maiores voluptate autem quas vero
            vel praesentium itaque.
          </p>
        </div>
        {/* <img
          className="w-2/4 mb-"
          src="https://kazan.kronostime.ru/upload/images.opt/iblock/5d3/u0l1tqhz9ngu2ksf7ah5exzukuxfz098/WFGG-W85_2.webp"
          alt=""
        /> */}
      </div>
    </div>
  );
}
