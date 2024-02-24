import mongoose from 'mongoose';
import Person from '../persons/Persons.js'; // Import the Person model

// Define the _id to search for
const personId = 'fake_id'; 

// Use Model.findById() to search for a person by _id
Person.findById(personId, function(err, person) {
  if (err) {
    console.error('Error finding person by ID:', err);
  } else {
    if (person) {
      console.log('Person found:', person);
    } else {
      console.log('No person found with the specified ID');
    }
  }
});
