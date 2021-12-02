import React from 'react'
import Intro from '../components/intro/Intro'
import Navbars from '../components/navbar/Navbars'
import Block from '../components/block/Block'
import Footer from '../components/footer/Footer'

const LandingPage = () => {
    return (
        <>
            <Navbars/>
            <Intro/>
            <Block/>
            <Footer/>
        </>
    )
}

export default LandingPage
