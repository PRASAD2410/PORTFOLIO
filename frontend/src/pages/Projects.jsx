import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import PageWindowControls from '../components/PageWindowControls'

export default function Projects() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/projects')
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
        $ find . -name "*.project"
      </motion.h1>

      {loading ? (
        <motion.div variants={itemVariants} className="command-section">
          <span className="command-prompt">$</span> Loading<span className="cursor"></span>
        </motion.div>
      ) : data.length > 0 ? (
        <div className="space-y-4">
          {data.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="command-section">
              <div className="command-line">
                <span className="command-prompt">$</span>
                <span>cat project_{project.id}.md</span>
              </div>
              
              <div className="ml-4 mt-3">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                
                <div className="mb-2">
                  <strong>Tech Stack:</strong>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="border border-terminal-text text-xs px-2 py-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-3">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="terminal-link text-sm">
                    [Live Demo]
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="terminal-link text-sm">
                    [Source Code]
                  </a>
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
