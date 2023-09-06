// import { useState } from "react";
// import { createRoot } from "react-dom/client";
// import { createStore } from "redux";

// // import App from "./App";

// const container = document.getElementById("root");
// const root = createRoot(container);

// const noteReducer = (state = [], action) => {
//   if (action.type === "NEW_NOTE") {
//     state.push(action.payload);
//     return state;
//   }

//   return state;
// };

// const store = createStore(noteReducer);

// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "the app state is in redux store",
//     important: true,
//     id: 1,
//   },
// });

// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2,
//   },
// });

// const App = () => {
//   return (
//     <div>
//       <ul>
//         {store.getState().map((note) => (
//           <li key={note.id}>
//             {note.content} <strong>{note.important ? "important" : ""}</strong>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// root.render(<App />);

// try again -- >

// import { createRoot } from "react-dom/client";
// import { createStore } from "redux";

// const root = createRoot(document.getElementById("root"));

// const noteReducer = (state = [], action) => {
//   if (action.type === "NEW_NOTE") {
//     state.push(action.payload);
//     return state;
//   }
//   return state;
// };

// const store = createStore(noteReducer);

// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2,
//   },
// });

// const App = () => {
//   return (
//     <div>
//       <ul>
//         {store.getState().map((note) => {
//           <li key={note.id}>
//             {note.content}
//             <strong>{note.important ? "improtant" : ""}</strong>
//           </li>;
//         })}
//       </ul>
//     </div>
//   );
// };
// root.render(<App />);

//----> try again

// import { createRoot } from "react-dom/client";
// import { createStore } from "redux";

// const container = document.getElementById("root");
// const root = createRoot(container);
// const noteStore = (state = [], action) => {
//   if (action.type === "NEW_NOTE") {
//     state.push(action.payload);
//     return state;
//   }
//   return state;
// };
// const store = createStore(noteStore);
// store.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2,
//   },
// });
// const App = () => {
//   return (
//     <div>
//       <ul>
//         {store.getState().map((val) => (
//           <li key={val.id}>{val.content}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// root.render(<App />);

// ---- > try again
import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const container = document.getElementById("root");
const root = createRoot(container);

const noteStore = (state = [], action) => {
  if (action.type === "NEW_NOTE") {
    return state.concat(action.payload);
  }
  return state;
};
const notes = createStore(noteStore);

const App = () => {
  let newNote;
  const addNote = (e) => {
    e.preventDefault();

    notes.dispatch({
      type: "NEW_NOTE",
      payload: {
        content: newNote,
        id: notes.getState().length + 1,
        importance: true,
      },
    });
    // console.log(notes.getState()[0]);
  };
  const handleChange = (e) => {
    newNote = e.target.value;
    console.log(e.target.value);
  };
  return (
    <div>
      <form>
        <input type="text" name="noteText" onChange={handleChange} />
        <button onClick={addNote}>Add Note</button>
      </form>
      <div>
        Notes will be here :
        <ul>
          {notes.getState().map((val) => (
            <li key={val.id}>
              {val.content} , <b>{val.importance ? "important" : ""}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
root.render(<App />);
notes.subscribe(() => {
  root.render(<App />);
});
