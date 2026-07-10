import React from 'react'
import { NavBar, Hero, Problem, Product } from './sections/sections-a.jsx'
import { Athletes, Privacy, DayCompare, Why, FAQ, FinalCTA, Footer } from './sections/sections-b.jsx'

export default function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Hero />
        <Problem />
        <Product />
        <Athletes />
        <Privacy />
        <DayCompare />
        <Why />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </React.Fragment>
  )
}
