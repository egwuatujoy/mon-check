import Person from '../persons/Persons.js'; 

// Define an array of people data
const arrayOfPeople = [
  { name: 'Alice', age: 25, favoriteFoods: ['Sushi', 'Pasta'] },
  { name: 'Bob', age: 30, favoriteFoods: ['Burger', 'Steak'] },
  { name: 'Charlie', age: 35, favoriteFoods: ['Pizza', 'Tacos'] }
];

// Use Model.create() to create and save multiple records
Person.create(arrayOfPeople, function(err, people) {
  if (err) {
    console.error('Error creating people:', err);
  } else {
    console.log('People created successfully:', people);
  }
});
