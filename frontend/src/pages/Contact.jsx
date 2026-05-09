import { motion } from 'framer-motion'
import { useState } from 'react'
import PageWindowControls from '../components/PageWindowControls'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      
      const result = await res.json()
      
      if (result.success) {
        setMessage('✓ Message sent successfully!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setMessage('✗ Error sending message. Try again.')
      }
    } catch (error) {
      setMessage('✗ Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageWindowControls />
      <motion.h1 variants={itemVariants} className="page-title">
        $ mail -compose
      </motion.h1>

      <motion.div variants={itemVariants} className="command-section">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block command-prompt mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-terminal-bg border border-terminal-text px-3 py-2 text-terminal-text focus:outline-none focus:border-terminal-hover"
            />
          </div>

          <div>
            <label className="block command-prompt mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-terminal-bg border border-terminal-text px-3 py-2 text-terminal-text focus:outline-none focus:border-terminal-hover"
            />
          </div>

          <div>
            <label className="block command-prompt mb-2">Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full bg-terminal-bg border border-terminal-text px-3 py-2 text-terminal-text focus:outline-none focus:border-terminal-hover"
            />
          </div>

          <div>
            <label className="block command-prompt mb-2">Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full bg-terminal-bg border border-terminal-text px-3 py-2 text-terminal-text focus:outline-none focus:border-terminal-hover"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="border border-terminal-text px-4 py-2 terminal-link hover:bg-terminal-bg transition"
          >
            {loading ? 'Sending...' : '> SEND'}
          </button>

          {message && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`p-3 border ${message.includes('✓') ? 'border-green-500 text-green-500' : 'border-red-500 text-red-500'}`}
            >
              {message}
            </motion.div>
          )}
        </form>
      </motion.div>

      <motion.div variants={itemVariants} className="command-section mt-8">
        <div className="command-line">
          <span className="command-prompt">$</span>
          <span>cat contact_info.txt</span>
        </div>
        <div className="ml-4 mt-3 text-sm">
          <p>Email: prasad.arde_comp23@pccoer.in</p>
          <p>GitHub: https://github.com/PRASAD2410</p>
          <p>LinkedIn: https://www.linkedin.com/in/prasad-arde-421753292</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
