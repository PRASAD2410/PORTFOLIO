const express = require('express');
const router = express.Router();

// GET all skills
router.get('/', (req, res) => {
  try {
    const skillsData = {
      technical: [
        {
          category: 'Languages',
          skills: ['C', 'C++', 'JavaScript', 'Java', 'Python', 'Bash']
        },
        {
          category: 'Web Technologies',
          skills: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React', 'MongoDB', 'SQL']
        },
        {
          category: 'Cybersecurity',
          skills: ['Penetration Testing (EJPT)', 'Web Application Testing', 'OWASP', 'Reconnaissance', 'Exploit Development', 'Ethical Hacking']
        },
        {
          category: 'Tools',
          skills: ['Nmap', 'Burp Suite', 'Wireshark', 'Hydra']
        },
        {
          category: 'DevOps & Cloud',
          skills: ['AWS', 'Docker', 'CI/CD', 'Networking Fundamentals']
        }
      ],
      soft: ['Problem Solving', 'Penetration Testing', 'Security Analysis', 'Research', 'Team Collaboration', 'Attention to Detail']
    };
    res.json(skillsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
