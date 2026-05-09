const express = require('express');
const router = express.Router();

// GET all achievements
router.get('/', (req, res) => {
  try {
    const achievementsData = [
      {
        id: 1,
        title: 'eLearnSecurity Junior Penetration Tester (EJPT)',
        organization: 'eLearnSecurity',
        date: '2024-07-01',
        description: 'Certified in penetration testing and network security fundamentals',
        icon: '🔐'
      },
      {
        id: 2,
        title: 'AWS Certified Cloud Practitioner (CCP)',
        organization: 'Amazon Web Services',
        date: '2026-02-20',
        description: 'Certified cloud practitioner with AWS fundamentals knowledge',
        icon: '☁️'
      },
      {
        id: 3,
        title: 'NPTEL Ethical Hacking',
        organization: 'NPTEL (IIT)',
        date: '2024-04-15',
        description: 'Completed NPTEL certification course in Ethical Hacking',
        icon: '🛡️'
      },
      {
        id: 4,
        title: 'Google Cybersecurity Certificate',
        organization: 'Google',
        date: '2025-09-06',
        description: 'Professional certificate in cybersecurity fundamentals and best practices',
        icon: '🔒'
      }
    ];
    res.json(achievementsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
