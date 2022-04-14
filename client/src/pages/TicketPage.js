import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { BigTitle } from '../components/BigTitle'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hooks'



export const TicketPage = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        mail: "",
        q6_input6: "",
    })

    const params = useParams()

    const { loading, request, error, clearError } = useHttp()

    const [event, setEvent] = useState([])

    useEffect( () => {
        
        ( async () => {
            const res = await request('/api/tickets/getTicket' + params.id)
            setEvent(res)
        })()

    }, [])

    const handleSubmit = async (evt) => {
        evt.preventDefault()

        const body = new URLSearchParams(formData)

        fetch("https://it-mailer.herokuapp.com/api/createTicket",{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: "POST",
            body: body
        })
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson)
        })
    }


    return (
        <div className="ticket-page">
            <Navbar />
            <BigTitle title="Билет действителен"/>

            
            <Footer />
        </div>
    )
}