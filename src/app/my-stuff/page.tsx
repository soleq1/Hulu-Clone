'use client'
import { MoviesAPI } from "../Movies/components/Movies"
import Movies from "../Movies/page"
import { Hulubanner } from "../hulubanner"
import { useState,useEffect } from "react"
import { WatchList } from "./components/watchlistexample"
import Footer from "../footer"

const Watchlist = () =>{

    return(
        <div>
            <Hulubanner />
            <div className="Watchlist">
                <p className="Watchlist-title">My Stuff </p>
                <p className="Watchlist-subtitle">Use the <span><svg className="Watchlist-svg" width="10" height="10" viewBox="0 0 56 56"><g strokeWidth="2" fill="none" fillRule="evenodd"><path d="M26.833 26.833H14v2.334h12.833V42h2.334V29.167H42v-2.334H29.167V14h-2.334v12.833z" fill="var(--text--primary)" fillRule="nonzero"></path><path d="M28 55.25c15.05 0 27.25-12.2 27.25-27.25S43.05.75 28 .75.75 12.95.75 28 12.95 55.25 28 55.25z" stroke="var(--text--primary)" strokeWidth="1.5"></path></g></svg></span>  button to add content you want to keep track of.</p>
            </div>

        <WatchList></WatchList>
<div className="Footer-Spacer"></div>
        <Footer />
            </div>
    )
}
export default Watchlist