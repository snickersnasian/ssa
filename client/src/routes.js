import React from 'react'
import { Routes , Route, Navigate} from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { EventPage } from './pages/EventPage'


export const useRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/events/:id' element={<EventPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
        </Routes>
    )
}