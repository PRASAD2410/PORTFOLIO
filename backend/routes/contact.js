const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

// POST contact form
router.post('/', [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required')
], (req, res) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, subject, message } = req.body;

    // Log message to console
    console.log('\n=== NEW CONTACT MESSAGE ===');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Subject: ${subject}`);
    console.log(`Message: ${message}`);
    console.log(`Time: ${new Date().toLocaleString()}`);
    console.log('==========================\n');

    // Send success response
    res.json({
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process message. Please try again later.'
    });
  }
});

// GET contact info
router.get('/', (req, res) => {
  try {
    const contactInfo = {
      email: 'prasad.arde_comp23@pccoer.in',
      github: 'https://github.com/PRASAD2410',
      linkedin: 'https://linkedin.com/in/prasad-arde',
      twitter: 'https://twitter.com',
      phone: '+91-XXXXXXXXXX'
    };
    res.json(contactInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
