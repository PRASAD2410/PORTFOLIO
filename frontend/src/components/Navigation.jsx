import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navigation() {
  const location = useLocation()
  
  const menuVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT' },
    { path: '/skills', label: 'SKILLS' },
    { path: '/projects', label: 'PROJECTS' },
    { path: '/education', label: 'EDUCATION' },
    { path: '/internship', label: 'EXPERIENCE' },
    { path: '/achievements', label: 'AWARDS' },
    { path: '/contact', label: 'CONTACT' },
  ]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="terminal-header sticky top-0 z-50">
      <motion.div 
        className="flex items-center justify-between"
        variants={menuVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo/Brand - Always links to home */}
        <Link 
          to="/" 
          className="text-xl font-bold terminal-link hover:text-terminal-hover mr-8"
        >
          {'>'} PORTFOLIO
        </Link>

        {/* Navigation Links */}
        <div className="command-line flex flex-wrap gap-4">
          <span className="command-prompt">$</span>
          <div className="flex flex-wrap gap-4">
            {navItems.map((item) => (
              <motion.div key={item.path} variants={itemVariants}>
                <Link 
                  to={item.path} 
                  className={`transition ${
                    isActive(item.path)
                      ? 'text-terminal-hover font-bold border-b-2 border-terminal-hover'
                      : 'terminal-link'
                  }`}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
