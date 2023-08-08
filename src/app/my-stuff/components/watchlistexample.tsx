import React from "react";
import { useState, useEffect } from "react";
import { global } from "styled-jsx/css";
import "swiper/css";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import 'dotenv/config'
export const WatchList = () =>{
  const api_key = process.env.API_KEY
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    const [Watchlist,setWatchlist] = useState([]);      

    
    useEffect(() =>{

        const StoredMovie = sessionStorage.getItem('Movies')
        
        if (StoredMovie){
          setWatchlist(JSON.parse(StoredMovie))    
        }
        
    const fetchMovies = async () => {
      try {        
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);
            const data = await response.json();
            setWatchlist(data.results.slice(6,10));
            sessionStorage.setItem('Movies',JSON.stringify(data.results))

        



     
      } catch (error) {
        console.error(error);
      }
    
    }
    
    if (!StoredMovie){
      fetchMovies();
    }
    
      },[])
    const splitMovies = Watchlist.slice(6,11)
    return(
        <div>
                <div className='Labels-plus'>Movies <Link href={'/Movies'}><p className='Labels-More'>VIEW ALL </p></Link> <div className='Labels-More-Svg'><svg width="8" height="14" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.153 27.545c-.688.711-.455 1.765.416 2.23.27.15.593.225.923.225.508 0 1.006-.186 1.341-.54l13.018-13.524c.532-.552.532-1.361 0-1.916L3.83.532C3.27-.044 2.296-.162 1.568.225.696.689.464 1.74 1.152 2.453L13.246 14.98 1.153 27.545z" fill="#fff"></path></svg></div>  </div>

    <div>
      <Swiper 
      modules={[Navigation, Pagination]}
      spaceBetween={16}
      slidesPerView={5.6}
      navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        >
           {splitMovies.map((item) => (
               <SwiperSlide  key={item.id || Math.random()}><Image priority className="Poster-Image" key={item!.backdrop_path || Math.random()}  height={1920}width={1080} alt={item.backdrop_path || Math.random()} src={`${BASE_URL}${item.backdrop_path || item.poster_path}` ||`${BASE_URL}${item.poster_path}`} ></Image></SwiperSlide>
               ))}
      

      </Swiper>


     
        </div>
        </div>
    )
}