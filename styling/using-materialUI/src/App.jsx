import { useState } from "react";
import { Container, AppBar, Button, Toolbar, IconButton } from "@mui/material";

import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom";
import Home from "./components/Home.jsx";
import Notes from "./components/Notes.jsx";
import Note from "./components/Note.jsx";
import Login from "./components/Login.jsx";
import Users from "./components/Users.jsx";
const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: true,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
  {
    content: "hello ",
    important: false,
    id: 4,
  },
];

const App = () => {
  const [user, setUser] = useState(null);

  const padding = {
    padding: 5,
  };

  const match = useMatch("/notes/:id");
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null;

  return (
    <Container>
      {/* <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Button color="inherit">
            <Link to="/">home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/notes">notes</Link>
          </Button>
          <Button color="inherit">
            <Link to="/users">users</Link>
          </Button>
          <Button color="inherit">
            {user ? <em>{user} logged in</em> : <Link to="/login">login</Link>}
          </Button>
        </Toolbar>
      </AppBar> */}
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            home
          </Button>
          <Button color="inherit" component={Link} to="/notes">
            notes
          </Button>
          <Button color="inherit" component={Link} to="/users">
            users
          </Button>
          {user ? (
            <em>{user} logged in</em>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </Container>
  );
};

export default App;
