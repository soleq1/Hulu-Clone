import React from "react";
import { useState, useEffect } from "react";
import { global } from "styled-jsx/css";
import "swiper/css";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'dotenv/config'


export const MoviePages = ({ApiValue}) =>{
  const API_KEY = process.env.API_KEY
  const [movies,setMovies] = useState([])
    if (ApiValue === undefined || !ApiValue){
        return 1
    }
    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    useEffect(() =>{

        const StoredMovie = sessionStorage.getItem('Movies2')
        if (StoredMovie){
        setMovies(JSON.parse(StoredMovie))
        }
        
    const fetchMovies = async () => {
      try {
        if (ApiValue){
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?page=${ApiValue}&api_key=${API_KEY}`);
            const data = await response.json();
            setMovies(data.results);
            sessionStorage.setItem('Movies2',JSON.stringify(data.results))    
        }
    } catch (error) {
        console.error(error);
      }
    
    }
    
    if (!StoredMovie){
      fetchMovies();
    }
    
      },[])





   
    
    
    return(<div>
        <Swiper 
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={5.6}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          >
             {movies.map((item) => (
      item.backdrop_path && (
        <SwiperSlide key={item.backdrop_path || Math.random()}>
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
    ))}
        </Swiper>
  
  
       
          </div>
    )
}
