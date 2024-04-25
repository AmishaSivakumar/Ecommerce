import React from 'react'
import Navbar from '../Components/Navbar'
import Main from '../Components/Main'
import Footer from '../Components/Footer'
import FeaturedProducts from '../Components/FeaturedPdts'

function Home() {
    return (
        <>
            <Navbar />
            <Main />
            <FeaturedProducts/>
            <Footer />
        </>
    )
}

export default Home