// Import the font-generator package
const fontGenerator = require('font-generator');

// Generate a random font
const randomFont = fontGenerator.generateFont();

// Apply the random font to a specific element (e.g., a paragraph)
const textElement = document.getElementById('my-paragraph');
textElement.style.fontFamily = randomFont;
