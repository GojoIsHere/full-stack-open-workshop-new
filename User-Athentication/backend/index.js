const express = require('express');
const app = express();

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true
    }
  ]

app.get('/',(request, response)=>{
    response.send('Hello world! ');
})
app.get('/api/notes',(request, response)=>{
    response.send(JSON.stringify(notes));
    console.log("this is not stringify: ",notes);
    console.log("this is stringify: ",JSON.stringify(notes));
})
app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    if (note) {
        response.json(note).status(200);
      } else {
        response.status(200).end();
      }
  })
  app.post('/api/notes', (req, res) => {
    const newNote = req.body;
  
    // Assuming the request body contains a 'note' field
    if (!newNote) {
      return res.status(400).json({ error: 'Note is required' });
    }
  
    // Add the new note to the notes array
    notes.push(newNote);
  
    // Respond with the updated notes array
    res.json({ notes });
  });


const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`Server is running in port http://localhost:${PORT}`);
})