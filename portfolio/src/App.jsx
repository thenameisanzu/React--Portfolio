import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";


function App() {
  

  return (
    <div className="App">
      <Header/>
      <main>
        <Hero/>
        <About/>
        <Projects/>
        <Skills/>
      
        <Contact/>
        
      </main>
      
    </div>
  )
}

export default App
