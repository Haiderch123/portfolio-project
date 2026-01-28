import './App.css'
import Body from './components/body'
import Contact from './components/contact'

import Header from './components/header'
import Herosection1 from './components/herosection1'
import Portfolio from './components/portfolio'
import Services from './components/services'
import Testimonials from './components/testimonials'

function App() {
 

  return (
    <>
  <div id="home">
  <Header />
</div>
<Body />
<div id="about">
  <Herosection1 />
</div>

<div id="services">
  <Services />
</div>

<div id="portfolio">
  <Portfolio />
</div>

<div id="testimonials">
  <Testimonials />
</div>

<div id="contact">
  <Contact />
</div>



    </>
  )
}

export default App
