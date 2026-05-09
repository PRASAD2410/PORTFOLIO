const express = require('express');
const router = express.Router();

// GET all projects
router.get('/', (req, res) => {
  try {
    const projectsData = [
      {
        id: 1,
        title: 'CourseHub',
        description: 'Full-stack online course marketplace. Users browse & purchase courses securely. Admins create & manage listings.',
        image: '/images/coursehub.jpg',
        technologies: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT'],
        liveLink: 'https://coursehub-demo.com',
        githubLink: 'https://github.com/PRASAD2410/CourseHub',
        featured: true
      },
      {
        id: 2,
        title: 'CookieSec',
        description: 'Express.js + Puppeteer tool that scans websites for cookie security issues. Checks flags like HttpOnly, Secure, SameSite, detects sensitive data, and gives each cookie a security score.',
        image: '/images/cookiesec.jpg',
        technologies: ['Express.js', 'Puppeteer', 'Node.js'],
        liveLink: 'https://github.com/PRASAD2410/COOKIESEC',
        githubLink: 'https://github.com/PRASAD2410/COOKIESEC',
        featured: true
      }
    ];
    res.json(projectsData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET single project
router.get('/:id', (req, res) => {
  try {
    const { id } = req.params;
    const project = {
      id: parseInt(id),
      title: 'Project One',
      description: 'An amazing web application built with React and Node.js',
      longDescription: 'Detailed project description...',
      image: '/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB'],
      liveLink: 'https://project1.com',
      githubLink: 'https://github.com/yourname/project1',
      caseStudy: 'Case study content here'
    };
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
