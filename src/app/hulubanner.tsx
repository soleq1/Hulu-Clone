'use client'
import Image from "next/image"
import Link from "next/link"
import React from "react"
export const Hulubanner = () =>{
    return(
<nav>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Questrial&family=Raleway&family=Work+Sans:ital,wght@1,700&display=swap" rel="stylesheet"></link>

      <ul>
        <div className='HuluNavBar'>
          <div className="huluLogoPlacement">
        <li>
          <Link href="/">
<p className="HuluLogo"><svg className="fill" viewBox="0 -2 61 24" height="24" width="61" role="img" aria-labelledby="logoTitle"><title id="logoTitle">hulu</title><path d="M9.57046613 6.24096927h-3.1015504c-1.0875017 0-1.63435327.29263768-1.63435327.29263768V0H0v20h4.83456246v-8.0704467c0-.7137436.58067743-1.29171 1.2958127-1.29171h2.81374862c.7162628 0 1.29524892.5779664 1.29524892 1.29171V20h4.8359719v-8.6950777c0-3.65670596-2.4444829-5.06395303-5.50487847-5.06395303zm46.48012787 0v8.06932223c0 .714868-.579268 1.2931156-1.294967 1.2931156h-2.8134668c-.7162628 0-1.2952489-.5782476-1.2952489-1.2931156V6.24096927h-4.8368175V14.712844c0 3.4627386 2.2220777 5.287156 5.5062878 5.287156h4.7347762v-.0247379c3.0245965 0 4.8354081-2.1465718 4.8354081-5.2624181V6.24096927H56.050594zM28.7728487 14.3102915c0 .714868-.5798318 1.2931156-1.2955308 1.2931156h-2.8137486c-.7162628 0-1.2955308-.5782476-1.2955308-1.2931156V6.24096927h-4.8359719V14.712844c0 3.4627386 2.2220778 5.287156 5.506006 5.287156h4.7347761v-.0247379c3.0248785 0 4.8359719-2.1465718 4.8359719-5.2624181V6.24096927h-4.8359719v8.06932223zM37.294431 20h4.8365357V0H37.294431v20z" fillRule="evenodd"></path></svg></p>

          </Link>
        </li>
          </div>
        <div className="huluMid-content">
          <li>
            <Link href='/' prefetch={false}>
              <p className="huluMid-channel">Home</p>
            </Link>
          </li>
        <li>
          <Link prefetch={false} href="/TvShows">
            <p  className="huluMid-channel">TV</p>

          </Link>
        </li>
        <li>
          <Link href="/Movies">
            <p className="huluMid-channel">Movies</p>
          </Link>
        </li>
        <li>
            <Link href='/News'>
                <p className="huluMid-channel">News</p>
            </Link>
        </li>
        <li>
            <Link href='/my-stuff'>
                <p className="huluMid-channel">My Stuff</p>
            </Link>
        </li>
        <li>
            <Link href='/Hubs'>
                <p className="huluMid-channel">Hubs</p>
            </Link>
        </li>
        </div>
        <div className="HuluNavBar-Search">
          <li>
            <Link href='/Search'>
            <p className="search-svg"><svg className="stroke" viewBox="0 -2 24 24" width="24" height="24"><path fill="none" d="M14.52 2.33A8.75 8.75 0 1 1 2.34 4.47a8.76 8.76 0 0 1 12.18-2.14zm2.13 12.19l6.79 4.75z" strokeMiterlimit="10" strokeWidth="2"></path></svg></p>
            </Link>
          </li>
          <li>
            <p className="profile-icon"></p>
          </li>
        </div>
        </div>
        
      </ul>
    </nav>
    )
}


