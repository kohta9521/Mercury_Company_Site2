import React from "react";

import "./App.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import News from "./components/news/News";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Member from "./components/member/Member";
import Company from "./components/company/Company";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-container">
        <Hero />

        <News />

        <About />

        <Service />

        <Member />

        <Company />

        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
