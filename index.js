// INSTRUCTIONS: Write the code that does the following:
// -0 Set up the server correctly
// -1 console logs the method and URL for every request
// -2 sends back "Welcome to the Animal Shelter Network" as an h1 when the client goes to /
// -3 sends back the cat object when the client goes to /api/cat
// -4 sends back the shelters object when the client goes to /api/shelters
// -5 sends back "Go to /api/cat to see cats for adoption and /api/shelters to see shelters in the area" when the client goes to /docs
// -6 BLUE & PINK: sends back "A cat you can adopt is " with the name of the first cat when the client goes to /adopt/cat 
//    (Use dot notation & string concatenation)
// -7 sends back a 404 page for all other paths

// PINK Only: Add the correct status codes to ALL route handlers

const animalShelterData = {
    cats: [
        { name: "Whiskers", age: 2, shelter: "Happy Tails Shelter" },
        { name: "Mittens", age: 3, shelter: "Cozy Paws Sanctuary" },
        { name: "Shadow", age: 1, shelter: "Happy Tails Shelter" }
    ],
    shelters: [
        { name: "Happy Tails Shelter", location: "123 Main Street, Cityville" },
        { name: "Cozy Paws Sanctuary", location: "456 Oak Avenue, Townsburg" }
    ]
};
