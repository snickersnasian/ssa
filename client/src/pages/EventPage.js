import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { BigTitle } from '../components/BigTitle'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hooks'



export const EventPage = () => {

    const params = useParams()

    const { loading, request, error, clearError } = useHttp()

    const [event, setEvent] = useState([])

    useEffect( async () => {
        const res = await request('/api/content/events/' + params.id)
        setEvent(res)
    }, [])


    return (
        <div className="main-page">
            <Navbar />
            <BigTitle title={event.title}/>
            <BigTitle title={event.date}/>
            <BigTitle title={event.time}/>
            <BigTitle title={event.place}/>
            <Footer />
        </div>
    )
}