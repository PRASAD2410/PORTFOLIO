import { motion } from 'framer-motion'
import NameASCII from '../components/NameASCII'
import PageWindowControls from '../components/PageWindowControls'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const asciiArt = `
╔═══════════════════════════════════════╗
║      CYBERSECURITY PORTFOLIO          ║
║         TERMINAL-STYLE                ║
╚═══════════════════════════════════════╝
  `.trim()

  return (
    <motion.div 
      className="page-container relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageWindowControls />
      
      {/* Name ASCII Art - Top Right */}
      <motion.div 
        className="absolute -top-2 right-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <NameASCII />
      </motion.div>
      <motion.div variants={itemVariants} className="ascii-art mb-8">
        {asciiArt}
      </motion.div>

      <motion.div variants={itemVariants} className="command-section">
        <div className="command-line">
          <span className="command-prompt">$</span>
          <span>whoami</span>
        </div>
        <p className="ml-4 mt-2">Cybersecurity Specialist | Developer | Cyber Enthusiast</p>
      </motion.div>

      <motion.div variants={itemVariants} className="command-section">
        <div className="command-line">
          <span className="command-prompt">$</span>
          <span>cat portfolio.md</span>
        </div>
        <p className="ml-4 mt-2">
          Welcome to my portfolio. Navigate through the terminal commands above to explore my skills, 
          projects, and experience in cybersecurity and software development.
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="command-section">
        <div className="command-line">
          <span className="command-prompt">$</span>
          <span>help</span>
        </div>
        <div className="ml-4 mt-2 text-sm">
          <p>Available commands:</p>
          <p>HOME - You are here</p>
          <p>ABOUT - Learn about me</p>
          <p>SKILLS - Technical expertise</p>
          <p>PROJECTS - My work</p>
          <p>EDUCATION - Academic background</p>
          <p>EXPERIENCE - Work history</p>
          <p>AWARDS - Achievements & recognition</p>
          <p>CONTACT - Get in touch</p>
        </div>
      </motion.div>
    </motion.div>
  )
}
