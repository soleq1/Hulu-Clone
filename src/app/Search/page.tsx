"use client";

import { Hulubanner } from "../hulubanner";
import React, { useState, useEffect, ChangeEvent } from "react";
import "dotenv/config";
import Image from "next/image";
import TvShows from "../TvShows/components/TvShows";
import Link from "next/link";
import Genres from "../TvShows/components/Genres";
import Footer from "../footer";

const Search = () => {
  const API_KEY = process.env.API_KEY;
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(true);

  const key = process.env.API_KEY;
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const debouncedFetch = (query: string) => {
      SearchFetch(query);
    };
    const inputDelay = 2750;
    const timer = setTimeout(() => debouncedFetch(search), inputDelay);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [search]);
  const SearchFetch = async (query: string) => {
    try {
      if (query && query.length !== 0) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${query}&language=en&api_key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results || []);
        setloading(false);
      }
    } catch (error) {
      console.log(error);
      // setSearch('')
    }
  };

  function handleSearch(e) {
    const search: string = e.target.value;
    setSearch(search);
  }
  const sortMovie = movies.sort((a, b) => b.popularity - a.popularity);
  return (
    <div>
      <Hulubanner></Hulubanner>
      <div className="Search-Box">
        <p className="Search-Button">
          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={handleSearch}
            className="Search-text"
          ></input>
        </p>
      </div>

      <div className="Search-Movie">
        {loading ? (
          <div className="">
            <div className="MovieCardSpacer">
              <div>
                <div className="Labels-plus">
                  TV{" "}
                  <Link href={"/TV"}>
                    <p className="Labels-More">VIEW ALL </p>
                  </Link>{" "}
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
              <TvShows></TvShows>
              <Genres></Genres>
            </div>
          </div>
        ) : (
          <div className="Search-Movie">
            {sortMovie.map((item) =>
              item.backdrop_path && item.backdrop_path !== "" ? (
                <div className="Search-Row" key={item.name}>
                  <Image
                    width={200}
                    height={200}
                    alt={item.name}
                    priority
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  />
                  <p className="Search-Name">
                    {item.name || item.original_title} (
                    {item.release_date || item.first_air_date
                      ? (item.release_date || item.first_air_date).substring(
                          0,
                          4
                        )
                      : "Not found"}
                    )
                  </p>
                </div>
              ) : null
            )}
          </div>
        )}
      </div>
      <div className="Footer-Spacer"></div>
      <Footer />
    </div>
  );
};

export default Search;
