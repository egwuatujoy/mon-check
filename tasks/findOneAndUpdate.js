import Person from '../persons/Persons.js'; // Import the Person model

// Define the person's name to search for
const personName = 'Alice';

// Update the person's age to 20
Person.findOneAndUpdate(
  { name: personName }, 
  { age: 20 }, // Update age to 20
  { new: true }, // Options to return the updated document
  function(err, updatedPerson) {
    if (err) {
      console.error('Error updating person:', err);
    } else {
      if (updatedPerson) {
        console.log('Person updated successfully:', updatedPerson);
      } else {
        console.log('No person found with the specified name');
      }
    }
  }
);
