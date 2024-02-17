import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import CardCaroussel from "./CardCaroussel";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomsTutos } from "../../store/reducer/tutoriel";
import { RootState } from "../../store";
import { Tutos } from "../../types/types";

export default function Caroussel() {
  // define the state of the randomTutos
  const dispatch = useDispatch();
  const randomTutos = useSelector(
    (state: RootState) => state.tutoriel.randomsTutos
  );

  // restrict the fetch to the first render
  useEffect(() => {
    dispatch(fetchRandomsTutos() as any);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-wider text-gray-900 sm:text-3xl text-left">
        Découvrez nos tutos :
      </h2>
      <div className="flex self-auto py-24 sm:py-10 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* For each randomTuto add card for slider */}
          {randomTutos.map((randomTuto: Tutos) => (
            <SwiperSlide key={randomTuto.id}>
              <Link to={`tutoriel/${randomTuto.id}`}>
                <CardCaroussel randomTuto={randomTuto} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
