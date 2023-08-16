"use client";

import React from "react";
import { Hulubanner } from "./hulubanner";
import { useState, useEffect } from "react";
import "dotenv/config";

import { global } from "styled-jsx/css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import TvShows from "./TvShows/components/TvShows";
import { Navigation, Pagination } from "swiper/modules";

import Link from "next/link";
import Footer from "./footer";

export default function Home() {
  const api_key = process.env.API_KEY;

  interface API {
    backdrop_path: string;
    original_title: string;
    overview: string;
    title: string;
    id: number;
    poster_path: string;
  }
  const [movies, setMovies] = useState<API>([]);

  const [homescreen, setHomeScreen] = useState([]);

  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const StoredMovie = sessionStorage.getItem("Movies");
    const StoredImage = JSON.parse(sessionStorage.getItem("HomeImage"));
    if (StoredMovie) {
      setMovies(JSON.parse(StoredMovie));
    }

    if (StoredImage) {
      setHomeScreen(StoredImage);
    }
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`
        );

        const data = await response.json();
        const index = data.results.slice(1, 5);
        setMovies(data.results);
        sessionStorage.setItem("Movies", JSON.stringify(data.results));
        sessionStorage.setItem(
          "HomeImage",
          JSON.stringify(data.results.slice(0, 1))
        );
        setHomeScreen(index);
      } catch (error) {
        console.error(error);
      }
    };

    if (!StoredMovie) {
      fetchMovies();
    }
  }, []);

  const item = homescreen[0];

  return (
    <div>
      <div className="MainPicture-container">
        <div className="shadow-test">
          <div className="test">
            <Hulubanner />
          </div>

          {item && (
            <div>
              <div className="MainPicture-title">
                <p className="">{item.title}</p>
                <p className="MainPicture-overview">
                  {item.overview.substring(0, 110)}..
                </p>
              </div>
              <div className="MainPicture-buttons">
                <div className="MainPicture-card">
                  <button className="MainPicture-Play">
                    <svg
                      className="MainPicture-svg"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.3 6.5L1 11.6C0.7 11.7 0.4 11.6 0.3 11.4 0.2 11.3 0.2 11.2 0.2 11.1L0 0.9C0 0.6 0.2 0.4 0.5 0.4 0.6 0.4 0.7 0.4 0.8 0.5L9.3 5.7C9.5 5.8 9.6 6.1 9.5 6.4 9.4 6.4 9.4 6.5 9.3 6.5Z"></path>
                    </svg>
                    PLAY
                  </button>
                  <button className="MainPicture-Details">DETAILS</button>
                  <svg
                    className="MainPicture-svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </div>
              </div>
              <div className="MainPicture">
                <Image
                  priority
                  className="MainPictureImage"
                  alt={item.id}
                  height={513}
                  width={1440}
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                ></Image>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="Labels-container">
        <div className="Labels">Popular<Link href={"/TvShows"}><p className="Labels-More">VIEW ALL </p></Link>
          <div className="Labels-More-Svg">
            <svg
              width="8"
              height="14"
              viewBox="0 0 18 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.153 27.545c-.688.711-.455 1.765.416 2.23.27.15.593.225.923.225.508 0 1.006-.186 1.341-.54l13.018-13.524c.532-.552.532-1.361 0-1.916L3.83.532C3.27-.044 2.296-.162 1.568.225.696.689.464 1.74 1.152 2.453L13.246 14.98 1.153 27.545z"
                fill="#fff"
              ></path>
            </svg>
          </div>{" "}
        </div>
      </div>
      <div className="MovieCardPosition">
        <TvShows></TvShows>
        {/* <TV></TV> */}
      </div>

      <div className="MovieCardSpacer">
        <div className="Labels-plus">Popular<Link href={"/Movies"}><p className="Labels-More">VIEW ALL </p></Link>
          <div className="Labels-More-Svg">
            <svg
              width="8"
              height="14"
              viewBox="0 0 18 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.153 27.545c-.688.711-.455 1.765.416 2.23.27.15.593.225.923.225.508 0 1.006-.186 1.341-.54l13.018-13.524c.532-.552.532-1.361 0-1.916L3.83.532C3.27-.044 2.296-.162 1.568.225.696.689.464 1.74 1.152 2.453L13.246 14.98 1.153 27.545z"
                fill="#fff"
              ></path>
            </svg>
          </div>{" "}
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
          slidesPerView={5.6}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          scrollbar={{ draggable: false }}
        >
          {movies.map((item: API) => (
            <SwiperSlide key={item.id || Math.random()}>
              <Image
                priority
                key={item.id}
                className="Poster-Image"
                height={1920}
                width={1080}
                alt={item.title}
                src={
                  `${BASE_URL}${item.backdrop_path || item.poster_path}` ||
                  `${BASE_URL}${item.poster_path}`
                }
              ></Image>
              <div className="Swiper-Title">
                {item.original_title}
                <svg
                  className="MainPicture-svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
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
                fillRule="evenodd"
                clipRule="evenodd"
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.847 2.455c.688-.712.455-1.766-.416-2.23A1.9 1.9 0 0 0 15.508 0C15 0 14.502.186 14.167.54L1.149 14.063c-.532.552-.532 1.361 0 1.916L14.17 29.468c.56.576 1.534.694 2.262.307.872-.464 1.104-1.515.416-2.228L4.754 15.02 16.847 2.455z"
                fill="#fff"
              ></path>
            </svg>
          </div>
        </Swiper>
      </div>
      <Footer />
    </div>
  );
}
