import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'
import Project from './Project'
import Story from './Story'
import Profile from './Profile'

import Navbar from '../components/Navbar'
import SignInDialog from '../components/SignInDialog'
import SignUpDialog from '../components/SignUpDiag'

export default function Index() {
    const [openSignInDiag, setopenSignInDiag] = useState(false)
    const [openSignUpDiag, setopenSignUpDiag] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)

    const handleCloseSignInDiag = () => {
        setopenSignInDiag(false)
    }

    const handleCloseSignUpDiag = () => {
        setopenSignUpDiag(false)
    }

    return (
        <div>
            <BrowserRouter>
                <Navbar isLoggedIn={isLoggedIn} setopenSignInDiag={setopenSignInDiag} setopenSignUpDiag={setopenSignUpDiag} />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/about-us' element={<AboutUs />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/story' element={<Story />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
                <SignInDialog
                    open={openSignInDiag}
                    handleClose={handleCloseSignInDiag}
                    setopenSignInDiag={setopenSignInDiag}
                    setopenSignUpDiag={setopenSignUpDiag}
                />
                <SignUpDialog
                    open={openSignUpDiag}
                    handleClose={handleCloseSignUpDiag}
                    setopenSignInDiag={setopenSignInDiag}
                    setopenSignUpDiag={setopenSignUpDiag}
                />
            </BrowserRouter>
        </div>
    )
}
