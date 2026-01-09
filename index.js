// INSTRUCTIONS: Write the code that does the following:
// -0 Set up the server correctly
// -1 console logs the method and URL for every request
app.use((req, res, next) => {
    console.log(req.method + " " + req.url)
    next()
    })
// -2 sends back "Welcome to the Animal Shelter Network" as an h1 when the client goes to /
app.get("/", (req, res) => {
    res.send("<h1>Welcome to the Animal Shelter Network</h1>");
    });
// -3 sends back the cat object when the client goes to /api/cat
app.get("/api/cat", (req, res) => {
    res.status(200).json(animalShelterData.cats[0]);
    });
// -4 sends back the shelters object when the client goes to /api/shelters
app.get("/api/shelters", (req, res) => {
    res.status(200).json(animalShelterData.cats)
});
// -5 sends back "Go to /api/cat to see cats for adoption and /api/shelters to see shelters in the area" when the client goes to /docs
app.get("docs", (req, res) => {
    res.status(200).send(
    );
});


// -6 BLUE & PINK: sends back "A cat you can adopt is " with the name of the first cat when the client goes to /adopt/cat 
app.get("/adopt/cat", (req,res => {
    res.status(200).send("A cat you can adopt is " + animalShelterData.cats[0].name);
});

//    (Use dot notation & string concatenation)
// -7 sends back a 404 page for all other paths
app.get((req, res, next ) => {
    res.send("<h1>404 not found</h1>");
    });


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
