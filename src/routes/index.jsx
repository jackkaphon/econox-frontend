import React, { useState, useEffect, createContext } from 'react'
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'
import Home from './Home'
import Project from './Project'
import Story from './Story'
import Profile from './Profile'

import Navbar from '../components/Navbar'
import SignInDialog from '../components/SignInDialog'
import SignUpDialog from '../components/SignUpDiag'
import axios from 'axios'


export const userContext = createContext(null)

export default function Index() {
    const [openSignInDiag, setopenSignInDiag] = useState(false)
    const [openSignUpDiag, setopenSignUpDiag] = useState(false)
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [userInfo, setuserInfo] = useState({})

    useEffect(() => {
        axios({
            url: window.$api + '/refresh',
            method: 'post',
            withCredentials: true
        }).then(res => {
            switch (res.data.status) {
                case 200:
                    setisLoggedIn(true)
                    setuserInfo(res.data.data)
                    break;
                default:
                    console.log(res.data)
                    break;
            }
        })
    }, [])


    const handleCloseSignInDiag = () => {
        setopenSignInDiag(false)
    }

    const handleCloseSignUpDiag = () => {
        setopenSignUpDiag(false)
    }

    const globalState = {
        isLoggedIn,
        setisLoggedIn,
        userInfo,
        setuserInfo
    }

    return (
        <div>
            <userContext.Provider value={globalState}>
                <BrowserRouter>
                    <Navbar setopenSignInDiag={setopenSignInDiag} setopenSignUpDiag={setopenSignUpDiag} />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/project' element={<Project />} />
                        <Route path='/about-us' element={<AboutUs />} />
                        <Route path='/contact-us' element={<ContactUs />} />
                        <Route path='/story' element={<Story />} />
                        <Route
                            path='/profile'
                            element={
                                isLoggedIn ? <Profile /> : <Navigate to="/" replace />
                            }
                        />
                    </Routes>
                    <SignInDialog
                        open={openSignInDiag}
                        handleClose={handleCloseSignInDiag}
                        setopenSignInDiag={setopenSignInDiag}
                        setopenSignUpDiag={setopenSignUpDiag}
                        setisLoggedIn={setisLoggedIn}
                    />
                    <SignUpDialog
                        open={openSignUpDiag}
                        handleClose={handleCloseSignUpDiag}
                        setopenSignInDiag={setopenSignInDiag}
                        setopenSignUpDiag={setopenSignUpDiag}
                    />
                </BrowserRouter>
            </userContext.Provider>
        </div>
    )
}
