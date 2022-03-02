import React, { useState, useEffect } from "react";
import { EventsCard } from "./EventsCard"
import { useHttp } from "../hooks/http.hooks"

export const Events = () => {
    
    const { loading, request, error, clearError } = useHttp()

    const [events, setEvents] = useState([])

    useEffect( async () => {
        const res = await request('/api/content/events')
        setEvents(res)
    }, [])

    const eventsRender = (props) => {
        return props.map((element, index) => {
            return (<EventsCard 
                title = {element.title}
                date = {element.date}
                time = {element.time}
                place = {element.place}
                id = {element._id}
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

            <div className="events__more">
                <a href="/events">Больше мероприятий</a>
            </div>
        </div>
    )
}