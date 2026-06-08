import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Goals from './components/Goals.jsx'
import Impact from './components/Impact.jsx'
import Programs from './components/Programs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Goals />
        <Impact />
        <Programs />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}
