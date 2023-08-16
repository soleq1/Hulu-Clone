"use client";


import { useEffect } from "react";

import Image from "next/image";
import "swiper/css";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import provider from "./providers";
import { Hulubanner } from "../hulubanner";
import Footer from "../footer";

const Providers = () => {
  
  useEffect(() => {
    
    },[])
  return (
    <div >
        <Hulubanner></Hulubanner>
        <div className="margin">

      <div className="Labels">Streaming on Hulu</div>
        </div>
      <Swiper 
      modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={5.6}
      navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        >

        {provider.map((item) =>(
            

            <SwiperSlide  key={item.name || Math.random()}><div className="Genre-background">
                <p className="Genre-Genre">{item.name}</p>
                </div>
                </SwiperSlide>

            ))}
      
        </Swiper>

        <div className="Footer-Spacer"></div>
        <Footer />
    </div>

  );
};
export default Providers