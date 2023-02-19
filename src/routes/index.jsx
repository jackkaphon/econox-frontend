import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'
import Project from './Project'
import Story from './Story'

import Navbar from '../components/Navbar'

export default function index() {
    return (
        <div>
            
            <BrowserRouter>
            <Navbar />
                <Routes>
                
                    <Route path='/' element={<Home />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/story' element={<Story />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
