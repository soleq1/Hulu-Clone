import React from "react";
import { useState, useEffect } from "react";
import { global } from "styled-jsx/css";
import "swiper/css";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "dotenv/config";
export const MoviesAPI = () => {
  const API_KEY = process.env.API_KEY;
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const StoredMovie = sessionStorage.getItem("Movies");

    if (StoredMovie) {
      setMovies(JSON.parse(StoredMovie));
    }

    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        setMovies(data.results);
        sessionStorage.setItem("Movies", JSON.stringify(data.results));
        sessionStorage.setItem(
          "HomeImage",
          JSON.stringify(data.results.slice(0, 1))
        );
      } catch (error) {
        console.error(error);
      }
    };

    if (!StoredMovie) {
      fetchMovies();
    }
  }, []);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={5.6}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {movies.map(
          (item) =>
            item.backdrop_path && (
              <SwiperSlide key={item.name || Math.random()}>
                <Image
                  priority
                  className="Poster-Image"
                  alt={item.name || Math.random()}
                  key={item.backdrop_path || Math.random()}
                  height={1920}
                  width={1080}
                  src={`${BASE_URL}${item.backdrop_path}`}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};
