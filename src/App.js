import React from "react"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Offers from "./components/offers/Offers"
import Team from "./components/team/Team"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Offers/>
      <Team/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
