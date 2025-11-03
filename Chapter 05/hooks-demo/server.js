const express = require("express");
const app = express();
app.use(express.json());

let currentUser = {
  name: "Nabendu Biswas",
  age: 42,
  country: "India",
  books: ["TypeScript Basics", "Practical GraphQL"]
};

let users = [
    {
        id: "1",
        name: "Nabendu Biswas",
        age: 42,
        country: "India",
        books: ["TypeScript Basics", "Practical GraphQL"]
    },
    {
        id: "2",
        name: "Ami Ganatra",
        age: 36,
        country: "India",
        books: ["Ramayana Unravelled", "Mahabharata Unravelled"]
    },
    {
        id: "3",
        name: "Chetan Bhagat",
        age: 45,
        country: "India",
        books: ["400 Days", "Five point someone"]
    },
];

let books = [
    {
        id: "1",
        name: "TypeScript Basics",
        pages: 300,
        title: "Nabendu Biswas",
        price: 3500
    },
    {
        id: "2",
        name: "Ramayana Unravelled",
        pages: 380,
        title: "Ami Ganatra",
        price: 380
    },
    {
        id: "3",
        name: "400 Days",
        pages: 356,
        title: "Chetan Bhagat",
        price: 206
    }
];

app.get("/current-user", (req, res) => res.json(currentUser));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.json(users.find((user) => user.id === id));
});

app.get("/users", (req, res) => res.json(users));

app.post("/users/:id", (req, res) => {
  const { id } = req.params;
  const { user: editedUser } = req.body;
  users = users.map((user) => (user.id === id ? editedUser : user));
  res.json(users.find((user) => user.id === id));
});

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  res.json(books.find((book) => book.id === id));
});

let SERVER_PORT = 9090;
app.listen(SERVER_PORT, () =>
  console.log(`Server is listening on port: ${SERVER_PORT}`)
);
