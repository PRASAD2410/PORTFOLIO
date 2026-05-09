import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import PageWindowControls from '../components/PageWindowControls'

export default function Internship() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/internship')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error:', err)
        setLoading(false)
      })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
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
        $ grep -r "experience" ~/career
      </motion.h1>

      {loading ? (
        <motion.div variants={itemVariants} className="command-section">
          <span className="command-prompt">$</span> Loading<span className="cursor"></span>
        </motion.div>
      ) : data.length > 0 ? (
        <div className="space-y-4">
          {data.map((intern) => (
            <motion.div key={intern.id} variants={itemVariants} className="command-section">
              <div className="command-line">
                <span className="command-prompt">$</span>
                <span>{intern.company.toUpperCase()} - {intern.position.toUpperCase()}</span>
              </div>
              
              <div className="ml-4 mt-3">
                <p><strong>Duration:</strong> {intern.duration}</p>
                <p className="mt-2">{intern.description}</p>
                
                <div className="mt-3">
                  <strong>Technologies:</strong>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {intern.technologies.map((tech, i) => (
                      <span key={i} className="border border-terminal-text text-xs px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3">
                  <strong>Highlights:</strong>
                  <ul className="list-none mt-1 text-sm">
                    {intern.highlights.map((highlight, i) => (
                      <li key={i} className="ml-4">• {highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div variants={itemVariants} className="command-section">
          <p className="text-red-500">Error loading data</p>
        </motion.div>
      )}
    </motion.div>
  )
}
