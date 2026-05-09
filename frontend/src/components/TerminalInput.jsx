import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function TerminalInput() {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Portfolio Terminal' },
    { type: 'output', text: 'Type /help for available commands' }
  ])
  const [isExpanded, setIsExpanded] = useState(false)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const historyEndRef = useRef(null)

  const commands = {
    '/help': {
      description: 'Show available commands',
      action: () => {
        const helpText = `
Available Commands:
  /home          - Navigate to home page
  /about         - View about section
  /skills        - See technical skills
  /projects      - Browse your projects
  /education     - View education
  /experience    - Check internship/work experience
  /awards        - View achievements
  /contact       - Contact form
  /clear         - Clear terminal history
  /help          - Show this help message
  /whoami        - Display portfolio info
        `.trim()
        return helpText
      }
    },
    '/home': {
      description: 'Navigate to home',
      action: () => {
        navigate('/')
        return 'Navigating to home...'
      }
    },
    '/about': {
      description: 'Navigate to about',
      action: () => {
        navigate('/about')
        return 'Navigating to about section...'
      }
    },
    '/skills': {
      description: 'Navigate to skills',
      action: () => {
        navigate('/skills')
        return 'Loading skills...'
      }
    },
    '/projects': {
      description: 'Navigate to projects',
      action: () => {
        navigate('/projects')
        return 'Loading projects...'
      }
    },
    '/education': {
      description: 'Navigate to education',
      action: () => {
        navigate('/education')
        return 'Loading education...'
      }
    },
    '/experience': {
      description: 'Navigate to experience',
      action: () => {
        navigate('/internship')
        return 'Loading experience...'
      }
    },
    '/awards': {
      description: 'Navigate to achievements',
      action: () => {
        navigate('/achievements')
        return 'Loading achievements...'
      }
    },
    '/contact': {
      description: 'Navigate to contact',
      action: () => {
        navigate('/contact')
        return 'Loading contact form...'
      }
    },
    '/clear': {
      description: 'Clear terminal',
      action: () => {
        setHistory([])
        return null
      }
    },
    '/whoami': {
      description: 'Display portfolio info',
      action: () => {
        return 'Cybersecurity Professional Portfolio | Terminal Style Interface'
      }
    }
  }

  const scrollToBottom = () => {
    historyEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [history])

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isExpanded])

  const handleCommand = (e) => {
    e.preventDefault()
    
    if (!input.trim()) return

    // Add command to history
    const newHistory = [
      ...history,
      { type: 'command', text: input }
    ]

    // Check if command exists
    const trimmedInput = input.trim().toLowerCase()
    if (commands[trimmedInput]) {
      const output = commands[trimmedInput].action()
      if (output) {
        newHistory.push({ type: 'output', text: output })
      }
    } else {
      newHistory.push({ 
        type: 'output', 
        text: `Command not found: ${input}. Type /help for available commands` 
      })
    }

    setHistory(newHistory)
    setInput('')
  }

  return (
    <>
      {/* Terminal Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="fixed bottom-4 right-4 z-40 border-2 border-terminal-text px-6 py-3 bg-terminal-bg hover:bg-terminal-border transition terminal-link font-bold text-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isExpanded ? '⌃ 🖥️ Close' : '⌄ 🖥️ Terminal'}
      </motion.button>

      {/* Terminal Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 z-40 w-full md:w-[600px] lg:w-[800px] border-2 border-terminal-text bg-terminal-bg shadow-2xl"
          >
            <div className="p-6 h-96 overflow-y-auto flex flex-col">
              {/* History */}
              <div className="flex-1 space-y-2 mb-4 text-base font-mono">
                {history.length === 0 ? (
                  <div className="text-terminal-muted">Terminal ready...</div>
                ) : (
                  history.map((item, idx) => (
                    <div key={idx}>
                      {item.type === 'command' ? (
                        <div className="flex gap-2">
                          <span className="command-prompt">$</span>
                          <span className="text-terminal-text">{item.text}</span>
                        </div>
                      ) : (
                        <div className="text-terminal-muted whitespace-pre-wrap break-words">
                          {item.text}
                        </div>
                      )}
                    </div>
                  ))
                )}
                <div ref={historyEndRef} />
              </div>

              {/* Input */}
              <form onSubmit={handleCommand} className="border-t-2 border-terminal-border pt-4">
                <div className="flex gap-2">
                  <span className="command-prompt text-lg">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type command... (/help)"
                    className="flex-1 bg-transparent outline-none text-terminal-text placeholder-terminal-muted text-base"
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
