"use client";

import { useEffect } from "react";
import genres from "./genrelist";
import Image from "next/image";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Genres = () => {
  useEffect(() => {}, []);
  return (
    <div>
      <div className="margin">
        <div className="Labels">Genres</div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={5.6}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {genres.map((item) => (
          <SwiperSlide key={item.id || Math.random()}>
            <div className="Genre-background">
              <p className="Genre-Genre">{item.name}</p>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">
          <svg
            width="18"
            height="30"
            viewBox="0 0 18 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.153 27.545c-.688.711-.455 1.765.416 2.23.27.15.593.225.923.225.508 0 1.006-.186 1.341-.54l13.018-13.524c.532-.552.532-1.361 0-1.916L3.83.532C3.27-.044 2.296-.162 1.568.225.696.689.464 1.74 1.152 2.453L13.246 14.98 1.153 27.545z"
              fill="#fff"
            ></path>
          </svg>
        </div>
        <div className="swiper-button-prev">
          <svg
            width="18"
            height="30"
            viewBox="0 0 18 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.847 2.455c.688-.712.455-1.766-.416-2.23A1.9 1.9 0 0 0 15.508 0C15 0 14.502.186 14.167.54L1.149 14.063c-.532.552-.532 1.361 0 1.916L14.17 29.468c.56.576 1.534.694 2.262.307.872-.464 1.104-1.515.416-2.228L4.754 15.02 16.847 2.455z"
              fill="#fff"
            ></path>
          </svg>
        </div>
      </Swiper>
    </div>
  );
};

export default Genres;
