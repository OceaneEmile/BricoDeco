import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import CardCaroussel from "./CardCaroussel";
import { useEffect, useState } from "react";
import randomData from "../../randomdata";
import { Tutos } from "../../types/types";

export default function Caroussel() {
  // define the state of the randomTutos
  const [randomTutos, setRandomTutos] = useState<Tutos[]>([]);

  // fetch the random card from the API
  // const fetchRandomCard = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://kim-pham.vpnuser.lan/APO/projet-13-brico-deco-back/public/api/tutoriels/random"
  //     );
  //     setRandomTuto(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // restrict the fetch to the first render
  useEffect(() => {
    setRandomTutos(randomData);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h3 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl text-left">
        Decouvrez nos tutos :
      </h3>
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
          {randomTutos.map((randomTuto) => (
            <SwiperSlide key={randomTuto.id}>
              <CardCaroussel randomTuto={randomTuto} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
