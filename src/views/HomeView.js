import React from 'react'
import Header from '../component/Header'
import Skip from '../component/Skip'
import Intro from '../component/Intro'
import Skill from '../component/Skill'
import Site from '../component/Site'
import Port from '../component/Port'
import Contact from '../component/Contact'
import Footer from '../component/Footer'
import Main from '../component/Main'


const HomeView = () => {
  return (
    <div>
        <Skip />
        <Header />
        <Main>
            <Intro />
            <Skill />
            <Site />
            <Port />
            <Contact />
        </Main>
        <Footer />  
    </div>   
  )
}

export default HomeView