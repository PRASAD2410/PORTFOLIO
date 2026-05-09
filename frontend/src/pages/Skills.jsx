import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import PageWindowControls from '../components/PageWindowControls'

export default function Skills() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/skills')
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
        $ ls -la skills/
      </motion.h1>

      {loading ? (
        <motion.div variants={itemVariants} className="command-section">
          <span className="command-prompt">$</span> Loading<span className="cursor"></span>
        </motion.div>
      ) : data ? (
        <>
          <motion.h2 variants={itemVariants} className="text-xl mt-6 mb-3 terminal-text">
            Technical Skills
          </motion.h2>
          {data.technical?.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="command-section">
              <div className="command-line">
                <span className="command-prompt">$</span>
                <span>{category.category}</span>
              </div>
              <div className="ml-4 mt-2 flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span key={i} className="border border-terminal-text px-2 py-1">
                    [{skill}]
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          <motion.h2 variants={itemVariants} className="text-xl mt-8 mb-3 terminal-text">
            Soft Skills
          </motion.h2>
          <motion.div variants={itemVariants} className="command-section">
            <div className="flex flex-wrap gap-3">
              {data.soft?.map((skill, i) => (
                <span key={i} className="border border-terminal-text px-2 py-1">
                  [{skill}]
                </span>
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        <motion.div variants={itemVariants} className="command-section">
          <p className="text-red-500">Error loading data</p>
        </motion.div>
      )}
    </motion.div>
  )
}
