import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function TypeWriter({ text, delay = 0.05 }) {
  const words = text.split(' ')
  const [displayedWords, setDisplayedWords] = useState([])
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (displayedWords.length >= words.length) {
      setIsComplete(true)
      return
    }

    const timer = setTimeout(() => {
      setDisplayedWords(prev => {
        if (prev.length < words.length) {
          return [...prev, words[prev.length]]
        }
        return prev
      })
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [displayedWords, words, delay])

  return (
    <div className="text-terminal-text leading-relaxed">
      {displayedWords.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="ml-1 inline-block"
        >
          |
        </motion.span>
      )}
    </div>
  )
}
