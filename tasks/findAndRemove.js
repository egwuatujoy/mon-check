import Person from '../persons/Persons.js'; // Import the Person model

// Define the _id of the person to delete
const personId = 'fake_id'; 

// Delete the person by _id
Person.findByIdAndRemove(personId, function(err, deletedPerson) {
  if (err) {
    console.error('Error deleting person by ID:', err);
  } else {
    if (deletedPerson) {
      console.log('Person deleted successfully:', deletedPerson);
    } else {
      console.log('No person found with the specified ID');
    }
  }
});
