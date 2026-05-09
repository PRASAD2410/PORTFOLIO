import { motion } from 'framer-motion'
import TypeWriter from '../components/TypeWriter'
import PageWindowControls from '../components/PageWindowControls'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  }

  const professionalSummary = "My name is Prasad Arde, a passionate third-year Computer Science student from Pune, SPPU with a consistent 9.0 CGPA. I'm a Junior Penetration Tester with a strong focus on cybersecurity and a genuine interest in foundational web development skills. I hold multiple industry-recognized certifications including the Google Cybersecurity Certificate, eJPT (eLearnSecurity Junior Penetration Tester), and AWS CCP (Cloud Practitioner). My expertise spans vulnerability assessment, security research, and network infrastructure. I'm actively exploring emerging security threats and best practices in the cybersecurity landscape. Beyond security, I'm developing skills in fullstack web development, understanding how secure applications are built from the ground up. I'm driven by continuous learning and enjoy contributing to the cybersecurity community through knowledge sharing and hands-on security projects."

  return (
    <motion.div 
      className="page-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <PageWindowControls />

      <motion.h1 variants={itemVariants} className="page-title">
        $ whoami
      </motion.h1>

      {/* Professional Summary with TypeWriter Effect */}
      <motion.div variants={itemVariants} className="command-section mb-2">
        <div className="command-line mb-3">
          <span className="command-prompt">$</span>
          <span>cat professional_summary.txt</span>
        </div>
        <div className="ml-4 mt-2 text-base leading-relaxed font-mono">
          <TypeWriter text={professionalSummary} delay={0.05} />
        </div>
      </motion.div>

      {/* Personal Details - Super Compact Layout */}
      <motion.div variants={itemVariants} className="command-section">
        <div className="command-line mb-2">
          <span className="command-prompt">$</span>
          <span>cat personal_details.json</span>
        </div>
        <div className="ml-4 grid grid-cols-3 gap-2 text-base">
          <motion.div variants={itemVariants}>
            <p className="text-terminal-muted text-sm mb-0.5">[ Name ]</p>
            <p className="text-terminal-text font-bold">Prasad Arde</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-terminal-muted text-sm mb-0.5">[ Location ]</p>
            <p className="text-terminal-text font-bold">Pune</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-terminal-muted text-sm mb-0.5">[ Degree ]</p>
            <p className="text-terminal-text font-bold">B.E. CSE</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-terminal-muted text-sm mb-0.5">[ University ]</p>
            <p className="text-terminal-text font-bold">SPPU</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-terminal-muted text-sm mb-0.5">[ Grad Year ]</p>
            <p className="text-terminal-hover font-bold">2027</p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <p className="text-terminal-muted text-sm mb-0.5">[ CGPA ]</p>
            <p className="text-terminal-hover font-bold">9.0</p>
          </motion.div>
          <motion.div variants={itemVariants} className="col-span-3">
            <p className="text-terminal-muted text-sm mb-0.5">[ Role ]</p>
            <p className="text-terminal-text font-bold">Junior Penetration Tester</p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
