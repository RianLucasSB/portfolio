import { useEffect, useState } from "react"
import { Nav } from "./components/Nav"

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
    <div className='h-screen w-full dark:bg-black bg-white transition-colors duration-500'>
      <header className="flex flex-row h-16 items-center justify-between dark:text-white p-6">
        <h1 className="text-3xl font-bold font-roboto-mono">
          Rian<span className="text-purple-800 text-3xl">.</span>DEV
        </h1>
        <Nav />
      </header>

      <main className=" h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col justify-between items-center">
          <span className="bg-clip-text text-transparent text-3xl font-bold font-roboto-mono bg-gradient-to-r from-pink-500 to-purple-900">
            RIAN BOAS
          </span>

          <div className="animate-image bg-white h-32 w-32" />
          </div>
          
        </div>
      </main>

    </div>
  )
}

export default App
