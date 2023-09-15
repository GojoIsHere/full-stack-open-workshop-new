import { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import Notes from "./components/Notes.jsx";
import Note from "./components/Note.jsx";
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

const Users = () => (
  <div>
    {" "}
    <h2>Users</h2>{" "}
  </div>
);

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

  const padding = {
    padding: 5,
  };

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

    <Router>
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
      </div>

      <Routes>
        <Route path="/notes/:id" element={<Note notes={notes} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Note app, Department of Computer Science 2023</i>
      </div>
    </Router>
  );
};

export default App;
