import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import PageWindowControls from '../components/PageWindowControls'

export default function Achievements() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/achievements')
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
        $ ls -la /awards/
      </motion.h1>

      {loading ? (
        <motion.div variants={itemVariants} className="command-section">
          <span className="command-prompt">$</span> Loading<span className="cursor"></span>
        </motion.div>
      ) : data.length > 0 ? (
        <div className="space-y-4">
          {data.map((achievement) => (
            <motion.div key={achievement.id} variants={itemVariants} className="command-section">
              <div className="command-line">
                <span className="command-prompt">$</span>
                <span>{achievement.icon} {achievement.title}</span>
              </div>
              
              <div className="ml-4 mt-3">
                <p><strong>Organization:</strong> {achievement.organization}</p>
                <p><strong>Date:</strong> {new Date(achievement.date).toLocaleDateString()}</p>
                <p className="mt-2">{achievement.description}</p>
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
