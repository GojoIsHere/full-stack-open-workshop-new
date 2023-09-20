import { useState } from "react";

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
  // const [page, setPage] = useState("home");

  // const toPage = (page) => (event) => {
  //   event.preventDefault();
  //   setPage(page);
  // };

  // const content = () => {
  //   if (page === "home") {
  //     return <Home />;
  //   } else if (page === "notes") {
  //     return <Notes />;
  //   } else if (page === "users") {
  //     return <Users />;
  //   }
  // };

  const [user, setUser] = useState(null);

  const padding = {
    padding: 5,
  };

  const match = useMatch("/notes/:id");
  const note = match
    ? notes.find((note) => note.id === Number(match.params.id))
    : null;

  return (
    // <div>
    //   <div>
    //     <a href="" onClick={toPage("home")} style={padding}>
    //       home
    //     </a>
    //     <a href="" onClick={toPage("notes")} style={padding}>
    //       notes
    //     </a>
    //     <a href="" onClick={toPage("users")} style={padding}>
    //       users
    //     </a>
    //   </div>

    //   {content()}
    // </div>

    <>
      <div>
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
      </div>

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
    </>
  );
};

export default App;
