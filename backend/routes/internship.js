const express = require('express');
const router = express.Router();

// GET all internships
router.get('/', (req, res) => {
  try {
    const internshipData = [
      {
        id: 1,
        company: 'DIAT DU DRDO',
        location: 'Pune, Khadakwasla',
        position: 'Cybersecurity Intern',
        duration: 'Jan 2025 - May 2025',
        description: 'Conducted penetration testing techniques on adversaries and set up secure lab environments using Qubes and Whonix OS with focus on internet anonymity.',
        technologies: ['Penetration Testing', 'Qubes OS', 'Whonix', 'Network Security', 'Anonymous Communication'],
        image: '/images/diat-drdo.jpg',
        highlights: [
          'Executed penetration testing on network adversaries',
          'Set up isolated lab environment using Qubes and Whonix OS',
          'Implemented anonymity techniques for secure internet communication',
          'Conducted security assessments and vulnerability analysis',
          'Documented security findings and recommendations'
        ]
      }
    ];
    res.json(internshipData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
