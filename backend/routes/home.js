const express = require('express');
const router = express.Router();

// GET home data
router.get('/', (req, res) => {
  try {
    const homeData = {
      title: 'Welcome to My Portfolio',
      subtitle: 'Full Stack Developer | Creative Problem Solver',
      cta: 'Explore My Work',
      image: '/images/hero.jpg'
    };
    res.json(homeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
