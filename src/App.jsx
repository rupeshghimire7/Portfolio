import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header */}
      <header className="bg-white/60 dark:bg-slate-800/60 backdrop-blur sticky top-0 z-40 border-b dark:border-slate-700">
  <div className="container mx-auto px-4 py-3 flex items-center justify-between">
    <Link to="/" className="font-bold text-lg">Rupesh Ghimire</Link>
    <nav className="flex gap-4 items-center">
      <Link to="/" className="text-sm font-medium">Home</Link>
      <Link to="/projects" className="text-sm font-medium">Projects</Link>
      <Link to="/about" className="text-sm font-medium">About</Link>
      <Link to="/contact" className="text-sm font-medium">Contact</Link>
      
      {/* Theme toggle button */}
      <button
        onClick={toggleTheme}
        className="ml-4 p-2 rounded-md border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </nav>
  </div>
</header>

      {/* Main Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-white/60 dark:bg-slate-800/60 border-t dark:border-slate-700">
        <div className="container mx-auto px-4 py-6 flex items-center justify-center">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} Rupesh Ghimire
          </div>
          {/* <div className="text-sm text-slate-600 dark:text-slate-400">
            Hosted on GitHub Pages
          </div> */}
        </div>
      </footer>
    </div>
  )
}
