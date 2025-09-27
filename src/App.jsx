import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Paratag from './Components/Paratag'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Hero1 from './Components/Hero1'
import Hero2 from './Components/Hero2'
import Hero3 from './Components/Hero3'
import Hero4 from './Components/Hero4'
import Content from './Components/Content'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Paratag />
      <Header />
      <Hero />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Content />
      <Footer />
    </>
  )
}

export default App
