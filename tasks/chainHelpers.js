import Person from '../persons/Persons.js'; // Import the Person model

// Define the query to find people who like burritos
const query = { favoriteFoods: 'burritos' };

// Chain the query helpers to narrow down the search results
Person.find(query)
  .sort({ name: 1 }) // Sort by name in ascending order
  .limit(2) // Limit the results to two documents
  .select('-age') // Hide the age field
  .exec(function(err, data) {
    if (err) {
      console.error('Error executing query:', err);
    } else {
      console.log('People who like burritos (sorted by name, limited to two documents, and age hidden):', data);
    }
  });
