import { useEffect, useState } from "react"
import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { About } from "./components/About"

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

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

  return (
    <div className='w-full dark:bg-black bg-white transition-colors duration-500'>
      <header className="flex flex-row h-16 items-center justify-between dark:text-white p-6">
        <h1 className="text-3xl font-bold font-roboto-mono">
          Rian<span className="text-purple-800 text-3xl">.</span>DEV
        </h1>
        <Nav />
      </header>

      <Hero theme={theme}/>
      <About />
      <Projects />

    </div>
  )
}

export default App
