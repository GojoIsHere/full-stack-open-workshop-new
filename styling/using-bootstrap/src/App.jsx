import { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
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

    <div className="container">
      {/* for colors choice in bootstrap : 
        $primary = $blue;
         $secondary = $gray-600;
         $success =green;
          $info = cyan; 
        $warning = yellow;
         $danger = red; 
        $light = gray-100; 
        $dark = gray-900;
      */}
      <Navbar collapseOnSelect expand="lg" bg="warning" variant="warning">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/">
                home
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/notes">
                notes
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link style={padding} to="/users">
                users
              </Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              {user ? (
                <em style={padding}>{user} logged in</em>
              ) : (
                <Link style={padding} to="/login">
                  login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
    </div>
  );
};

export default App;
