const express = require('express');
const router = express.Router();

// GET about data
router.get('/', (req, res) => {
  try {
    const aboutData = {
      name: 'Prasad Arde',
      bio: 'Cybersecurity Specialist | Full Stack Developer | Penetration Tester',
      description: 'I am a cybersecurity enthusiast with expertise in penetration testing, network security, and full-stack development. Currently studying Computer Science with a minor in Cybersecurity at SPPU PCCOE.',
      image: '/images/profile.jpg',
      socialLinks: {
        github: 'https://github.com/PRASAD2410',
        linkedin: 'https://linkedin.com/in/prasad-arde',
        twitter: 'https://twitter.com',
        email: 'prasad.arde_comp23@pccoer.in'
      }
    };
    res.json(aboutData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
