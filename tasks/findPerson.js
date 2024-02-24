import Person from '../persons/Persons.js'; 

// Define the name to search for
const searchName = 'Alice';

// Use Model.find() to search for people with the given name
Person.find({ name: searchName }, function(err, people) {
  if (err) {
    console.error('Error finding people:', err);
  } else {
    console.log(`People with the name "${searchName}":`, people);
  }
});
