import React from 'react'
import '../App.css'

export const Home = () => {
  return (
    <div className='home' id="home">
       <br/>
        <h1 className='display-1 mx-5 animate__animated animate__fadeInLeft'>Binary News</h1>
        <hr className='animate__animated animate__fadeIn' size="4" align="center" width="100%" color="white"/>
        <p className='fst-italic mx-5 animate__animated animate__fadeInRight'>The news that suits your needs</p>
        {/* <Carousel/> */}
        <br/>
    </div>
  )
}
