// console.log("hello world 1");

// const { response } = require("express");
// // const http = require('http');

// //importing cors
// const cors = require("cors");

// //using express:
// const express = require("express");
// const app = express();
// app.use(express.json()); // it converts the json data to object while posting

// //using cors
// app.use(cors());

// let notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     important: true,
//   },
// ];

// app.get("/", (request, response) => {
//   response.send("<h1>hellow world</h1>");
// });
// app.get("/api/notes/", (request, response) => {
//   response.json(notes).status(200).end();
// });
// app.get("/api/notes/:id", (request, response) => {
//   const id = Number(request.params.id);
//   // console.log(id);

//   const note = notes.find((note) => {
//     // console.log(note.id, typeof note.id, id, typeof id, note.id === id);
//     return note.id === id;
//   });
//   // console.log(note);
//   if (note) {
//     response.json(note);
//   } else {
//     response.status(404).send("index not avaliable").end();
//   }
// });
// app.delete("/api/notes/:id", (request, response) => {
//   const thisId = Number(request.params.id);
//   // console.log(id);

//   notes = notes.filter((note) => {
//     // console.log(note.id, typeof note.id, id, typeof id, note.id === id);
//     return note.id !== thisId;
//   });
//   response.status(204).send(`this note at id ${thisId} had been deleted`).end();
// });

// app.post("/api/notes", (request, response) => {
//   const myNewPost = request.body;
//   console.log("this is myNewPost", myNewPost);
//   myNewPost.id = notes.length + 1;
//   notes.push(myNewPost);
//   response.status(201).json(myNewPost);
// });

// // setting up server required through http
// // const app = http.createServer((request, response) => {
// //   response.writeHead(200, { 'Content-Type': 'application/json' })
// //   response.end(JSON.stringify(notes))
// // })

// const PORT = 3001;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use(express.static("dist"));

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("we just wrote this code");
  next();
};

app.use(requestLogger);

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/api/notes", (request, response) => {
  response.json(notes);
});

app.get("/api/notes/:id", (request, response) => {
  const myId = Number(request.params.id);
  const myNote = notes.find((note) => note.id === myId);

  if (myNote) {
    response.json(myNote);
  } else {
    response.status(404).send(`There are no notes at ${myId}`);
  }
});

app.put("/api/notes/:id", (request, response) => {
  const myId = Number(request.params.id);
  const updatedNote = request.body;
  let noteFound = false;
  notes = notes.map((note) => {
    if (note.id !== myId) return note;
    else {
      noteFound = true;
      return updatedNote;
    }
  });

  if (noteFound) {
    response.status(202).json(updatedNote);
  } else {
    response.status(404).send(`There are no notes at ${myId}`);
  }
});

app.delete("/api/notes/:id", (request, response) => {
  const myId = Number(request.params.id);
  notes = notes.filter((note) => note.id !== myId);

  response.status(204).send(`The note at id ${myId} has been deleted`);
});

app.post("/api/notes", (request, response) => {
  const myNewPost = request.body;
  myNewPost.id = notes.length + 1;
  notes.push(myNewPost);
  response.status(201).json(myNewPost);
});

app.use((request, response, next) => {
  response.status(404).send("no code available to hande this request");
});

const PORT = process.env.PORT ? process.env.PORT : 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
