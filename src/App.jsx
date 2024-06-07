import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Lodha from './Components/Hero/lodha'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Lodha />
      <About />
      <Services />
      <MyWork />
    </div>
  )
}

export default App