import React from 'react'
import { Footer, Blog, Possibility, Features, WhatGP3, Header } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
