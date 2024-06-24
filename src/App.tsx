import { useEffect, useState } from "react"
import { Nav } from "./components/views/Nav"
import { Hero } from "./components/views/Hero"
import { Projects } from "./components/views/Projects"
import { About } from "./components/views/About"

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('html')?.classList.add('dark')
    } else {
      document.querySelector('html')?.classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  const handleScroll = () => {
    const position = window.scrollY;
    if (position > 10) {
      setHasScrolled(true)
    } else {
      setHasScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={
        `w-full dark:bg-black bg-white transition-colors duration-500
      `}>
      <header
        className={`
        flex flex-row h-16 items-center justify-between 
        dark:text-white p-6 fixed w-full top-0 
        z-50 shadow-lg
        ${hasScrolled ? 'dark:bg-zinc-950 bg-black' : 'dark:bg-black bg-white text-white'}
        `}>
        <h1 className="text-3xl font-bold font-roboto-mono">
          Rian<span className="text-purple-800 text-3xl">.</span>DEV
        </h1>
        <Nav />
      </header>

      <Hero theme={theme} />
      <About />
      <Projects />

    </div >
  )
}

export default App
