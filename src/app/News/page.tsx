'use client'
import Footer from "../footer"
import { Hulubanner } from "../hulubanner"
const api = 'f55b0c8c114c40f8aeb456ba90c3c0af'
import React from "react";
import { useState, useEffect } from "react";
import { global } from "styled-jsx/css";
import Link from "next/link";
import "swiper/css";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'dotenv/config'
import Movies from "../Movies/page";
import { MoviesAPI } from "../Movies/components/Movies";


 
    

    
    


const News = () =>{
    const [news,setNews] = useState([])
    const [newsCheck,setNewsCheck] = useState(false)
   
   const NEWS_KEY = process.env.NEWS_KEY
   
   
   
    useEffect(() =>{
       const newsStorage = sessionStorage.getItem('news')
    if (newsStorage){  
      setNews(JSON.parse(newsStorage))
      setNewsCheck(true)
    }
    
 
    const NewsGet = async () =>{
      try{
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${NEWS_KEY}`)
        const data = await response.json();
        sessionStorage.setItem('news',JSON.stringify(data.articles));
        setNews(data.articles)
        setNewsCheck(true)
      }catch(error){
        console.log(error)
        sessionStorage.removeItem('news')
        
      }
    }   
    if (!newsStorage){
      NewsGet();
  } 
  },[])
    return(
    
    <div>
    <Hulubanner />
    <div className='Labels-plus'>News <Link href={'/News'}><p className='Labels-More'>VIEW ALL </p></Link> <div className='Labels-More-Svg'><svg width="8" height="14" viewBox="0 0 18 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.153 27.545c-.688.711-.455 1.765.416 2.23.27.15.593.225.923.225.508 0 1.006-.186 1.341-.54l13.018-13.524c.532-.552.532-1.361 0-1.916L3.83.532C3.27-.044 2.296-.162 1.568.225.696.689.464 1.74 1.152 2.453L13.246 14.98 1.153 27.545z" fill="#fff"></path></svg></div>  </div>

    {newsCheck ? (
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
          {news.map((item) =>
            // item.urltoImage ? ( // Check if urltoImage is not null
            item.urlToImage && item.urlToImage !== null || '' ? (
<SwiperSlide key={item.content || Math.random()}>
               <div className="News-Image-Container">
                <Image
                  priority
                  className="News-Images"
                  height={1920}
                  width={1080}
                  alt={item.description}
                  src={item.urlToImage}
                />
                </div>
              </SwiperSlide>
            ) : null 
          )}
        </Swiper>

      </div>
    ) : (
      <div></div>

    )}
    <Footer></Footer>
  </div>
    )
}

export default News