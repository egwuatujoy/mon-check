import Person from '../persons/Persons.js'; 

// Define the food to search for
const searchFood = 'Pizza';

// Use Model.findOne() to search for a person with the given favorite food
Person.findOne({ favoriteFoods: searchFood }, function(err, person) {
  if (err) {
    console.error('Error finding person:', err);
  } else {
    if (person) {
      console.log(`Person who likes "${searchFood}":`, person);
    } else {
      console.log(`No person found who likes "${searchFood}"`);
    }
  }
});
