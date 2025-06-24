import AboutMe from "./components/AboutMe"
import ContactMe from "./components/ContactMe"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"

const App = () => {
  return (
    <div className="font-[Poppins] w-full dark:bg-primary dark:text-primary-dull">
      <Navbar />
      <div className='flex flex-col gap-10'>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  )
}

export default App
