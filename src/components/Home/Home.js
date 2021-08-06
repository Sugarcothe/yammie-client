import React from 'react'
import FirstComponent from "./FirstComponent/FirstComponent"
import SecondComponent from "./SecondComponent/SecondComponent"
import './Home.scss'

const Home = () => {
 return (
  <div className='home'>
   <FirstComponent/>
   <SecondComponent />
   <SecondComponent/>
  </div>
 )
}

export default Home
