
import Person from '../persons/Persons.js';

// Create a new Person document instance
const person = new Person({
  name: 'John Doe',
  age: 30,
  favoriteFoods: ['Pizza', 'Sushi', 'Burger']
});

// Save the document instance
person.save(function(err, data) {
  if (err) {
    console.error('Error saving person:', err);
  } else {
    console.log('Person saved successfully:', data);
  }
});
