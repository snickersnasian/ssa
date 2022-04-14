import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { BigTitle } from '../components/BigTitle'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hooks'



export const TicketPage = () => {

    const [ticketData, setTicketData] = useState({
        firstName: '',
        lastName: '',
        mail: '',
        event: '',
        place: '',
        time: ''
    })

    const params = useParams()

    const { loading, request, error, clearError } = useHttp()

    const [event, setEvent] = useState([])

    useEffect( () => {
        
        ( async () => {
            const res = await request('/api/tickets/getTicket/' + params.id)

            console.log(res)

            setTicketData(res.ticket)
        })()

    }, [])


    return (
        <div className="ticket-page">
            <Navbar />

            <BigTitle style color='green' title="Билет действителен"/>

            <BigTitle title={
                `
                    мероприятие: ${ticketData.event} 
                    время: ${ticketData.time} 
                `
            }/>

            <BigTitle title={
                `
                    имя: ${ticketData.firstName} 
                    фамилия: ${ticketData.lastName} 
                `
            }/>
            
            <Footer />
        </div>
    )
}