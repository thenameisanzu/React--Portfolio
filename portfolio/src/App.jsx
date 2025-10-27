import React from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AnimatePresence mode="wait">
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </AnimatePresence>
    </div>
  );
}

export default App;