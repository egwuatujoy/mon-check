import Person from '../persons/Persons.js'; 

// Define the _id to search for
const personId = 'fake_id'; 


Person.findById(personId, function(err, person) {
  if (err) {
    console.error('Error finding person by ID:', err);
  } else {
    if (person) {
      // Add "hamburger" to the list of favoriteFoods
      person.favoriteFoods.push('hamburger');
      
      // Save the updated Person
      person.save(function(err, updatedPerson) {
        if (err) {
          console.error('Error saving updated person:', err);
        } else {
          console.log('Person updated successfully:', updatedPerson);
        }
      });
    } else {
      console.log('No person found with the specified ID');
    }
  }
});
