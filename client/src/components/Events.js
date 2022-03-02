import React from "react";
import { EventsCard } from "./EventsCard"
import events from "../testDB/events.json"

export const Events = () => {
    
    const eventsRender = (props) => {
        return props.map((element,index) => {
            return (<EventsCard 
                title = {element.title}
                date = {element.date}
                time = {element.time}
                place = {element.place}
                key = {index}
            />)
        });
    }
    
    return (
        <div className="events">
            <div className="events-header">
                <p>Мепроприятия</p>
            </div>
            {eventsRender(events)}  
        </div>
    )
}