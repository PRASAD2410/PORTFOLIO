const express = require('express');
const router = express.Router();

// GET all education
router.get('/', (req, res) => {
  try {
    const educationData = [
      {
        id: 1,
        degree: 'Bachelor of Science in Computer Science',
        institution: 'SPPU PCCOE College',
        graduationYear: 2026,
        gpa: '9.0',
        description: 'Major in Computer Science with Minor in Cybersecurity',
        image: '/images/pccoe.jpg'
      }
    ];
    res.json(educationData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
