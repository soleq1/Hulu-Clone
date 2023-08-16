"use client";
import TvShows from "./components/TvShows";
import { Hulubanner } from "../hulubanner";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { global } from "styled-jsx/css";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Genres from "./components/Genres";
import Link from "next/link";
import { Popular } from "./components/Popular";
import Footer from "../footer";

const TV = () => {
   
    return (
    <div>
      <Hulubanner></Hulubanner>
      <div>

      <Genres />

        <div className="MovieCardPosition Space">
      <div className='Labels-plus'>Popular <Link href={'/TvShows'}><p className='Labels-More'>VIEW ALL </p></Link> <div className='Labels-More-Svg'><svg width="8" height="14" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.153 27.545c-.688.711-.455 1.765.416 2.23.27.15.593.225.923.225.508 0 1.006-.186 1.341-.54l13.018-13.524c.532-.552.532-1.361 0-1.916L3.83.532C3.27-.044 2.296-.162 1.568.225.696.689.464 1.74 1.152 2.453L13.246 14.98 1.153 27.545z" fill="#fff"></path></svg></div>  </div>
          <Popular></Popular>
        </div>
      </div>
      
      
      <div className="MovieCardSpacer">
        <div>
        <div className='Labels-plus'>TV <Link href={'/TvShows'}><p className='Labels-More'>VIEW ALL </p></Link> <div className='Labels-More-Svg'><svg width="8" height="14" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.153 27.545c-.688.711-.455 1.765.416 2.23.27.15.593.225.923.225.508 0 1.006-.186 1.341-.54l13.018-13.524c.532-.552.532-1.361 0-1.916L3.83.532C3.27-.044 2.296-.162 1.568.225.696.689.464 1.74 1.152 2.453L13.246 14.98 1.153 27.545z" fill="#fff"></path></svg></div>  </div>
 </div>
        <TvShows></TvShows>
      </div>

      <Footer />
               </div>

  );
};
export default TV;
