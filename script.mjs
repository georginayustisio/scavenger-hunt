import randomItem from 'random-item';

// List of lunch options
const lunchOptions = [
  'Pizza',
  'Sushi',
  'Burger',
  'Salad',
  'Birria Tacos',
  'Vodka Pasta',
  'Kimchi Jjigae',
  'Burrito',
  'Poke Bowl',
  'Deli Sandwich',
  'Lamb Over Rice',
];

// Function to generate a random lunch suggestion
function suggestLunch() {
  const randomLunch = randomItem(lunchOptions);
  return `You should have ${randomLunch} for lunch today!`;
}

// Display the lunch suggestion
console.log(suggestLunch());
