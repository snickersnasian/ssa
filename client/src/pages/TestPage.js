import React from "react"
import { Navbar } from "../components/Navbar"
import { News } from "../components/News"
import { Events } from "../components/Events"


export const TestPage = () => {
    return (
        <div className="">
            {/* <Navbar /> */}
            
            <div className="news-events-align">
                <News />
                <Events />
            </div>

        </div>
    )
}