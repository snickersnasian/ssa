import React from 'react'
import { Routes , Route, Navigate} from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { EventPage } from './pages/EventPage'
import { TestPage } from './pages/TestPage'
import { AboutPage } from './pages/AboutPage'
import { TicketPage } from './pages/TicketPage'


export const useRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/events/:id' element={<EventPage />}/>
            <Route path='/dev' element={<TestPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
            <Route path='/about' element={<AboutPage />}/>
            <Route path='/ticket/:id' element={<TicketPage />}/>
        </Routes>
    )
}