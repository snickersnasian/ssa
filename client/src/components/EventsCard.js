import React from "react"

export const EventsCard = (props) => {

    
    

    return (
        <div className="events-card">
            <div className="events-card-header"><p><a href={'/events/' + props.id}>{ props.title }</a></p></div>
            
            <div className="date-time-place-wrapper">
                <div className="event-date"><p>{ props.date }</p></div>
                
                <div className="event-card-time-place">
                    <div className="event-time"><p>{ props.time }</p></div>
                    <div className="events-card-place"><p>{ props.place }</p></div>
                </div>
            </div>
        </div>
    )
}