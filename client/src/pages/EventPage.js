import React, { useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar'
import { BigTitle } from '../components/BigTitle'
import { Footer } from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useHttp } from '../hooks/http.hooks'



export const EventPage = () => {

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
            const res = await request('/api/content/events/' + params.id)
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

    const handleChange = async (evt) => {

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            q6_input6: event.title,
            date: event.date,
            time: event.time,
            place: event.place
        })
    }

    return (
        <div className="event-page">
            <Navbar />
            <BigTitle title={event.title}/>
            <BigTitle title={event.date}/>
            <BigTitle title={event.time}/>
            <BigTitle title={event.place}/>

            <div className="form-wrapper">
                <form
                    onSubmit = {handleSubmit}
                    onChange = {handleChange}
                >
                    <div className="form-title"><p>Регистрация на мероприятие</p></div>
                    <input type="text" placeholder="Имя" name="firstName"/>
                    <input type="text" placeholder="Фамилия" name="lastName"/>
                    <input type="mail" placeholder="Почта" name="mail"/>
                    <input type = "hidden" name = "q6_input6"  />
                    <button type="submit"> Получить билет! </button>
                
                </form>
            </div>

            <Footer />
        </div>
    )
}