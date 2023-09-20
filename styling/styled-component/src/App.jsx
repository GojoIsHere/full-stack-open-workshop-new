import { useState } from "react";
import styled from "styled-components";
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

const Page = styled.div`
  padding: 1em;
  background: papayawhip;
`;

const Navigation = styled.div`
  background: BurlyWood;
  padding: 1em;
`;

const Footer = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`;

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
    <Page>
      <Navigation>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/notes">
          notes
        </Link>
        <Link style={padding} to="/users">
          users
        </Link>
        {user ? (
          <em>{user} logged in</em>
        ) : (
          <Link style={padding} to="/login">
            login
          </Link>
        )}
      </Navigation>

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

      <Footer>
        <i>Note app, Department of Computer Science 2023</i>
      </Footer>
    </Page>
  );
};

export default App;
