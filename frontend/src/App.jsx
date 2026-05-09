import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import TerminalInput from './components/TerminalInput'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Internship from './pages/Internship'
import Achievements from './pages/Achievements'
import Contact from './pages/Contact'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-terminal-bg">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/education" element={<Education />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <TerminalInput />
      </div>
    </Router>
  )
}
