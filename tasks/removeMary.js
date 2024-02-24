import Person from '../persons/Persons.js'; // Import the Person model

// Define the query document to find people with name "Mary"
const query = { name: "Mary" };

// Delete all people with name "Mary"
Person.remove(query, function(err, result) {
  if (err) {
    console.error('Error deleting people:', err);
  } else {
    console.log(`${result.deletedCount} person(s) with name "Mary" deleted successfully.`);
    // You can use the result object to access the number of documents deleted
    // For example: result.deletedCount
  }
});
