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

//  try again  -------------------------------------------------------------------------------------------- >
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

//  try again  -------------------------------------------------------------------------------------------- >
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

//  try again  -------------------------------------------------------------------------------------------- >

import { createRoot } from "react-dom/client";
import { createStore } from "redux";

const container = document.getElementById("root");
const root = createRoot(container);

// code for notes (store) -- >

const noteStore = (
  state = [
    {
      content: "This is noteStore test",
      id: 1,
      importance: true,
    },
  ],
  action
) => {
  if (action.type === "NEW_NOTE") {
    return state.concat(action.payload);
  }
  return state;
};
// creating note store

const notes = createStore(noteStore);

// code for list (store) -- >
const listStore = (
  state = [
    {
      content: "This is listStore test ",
      id: 1,
      importance: true,
    },
  ],
  action
) => {
  if (action.type === "NEW_LIST") {
    return state.concat(action.payload);
  }
  return state;
};

// creating list store

const lists = createStore(listStore);

// App starts from here -- ->

const App = () => {
  let newNote;
  const handleNote = (e) => {
    newNote = e.target.value;
    console.log(e.target.value);
  };

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

  // code for lists (store)----->
  let newList;
  const handleList = (e) => {
    newList = e.target.value;
    console.log(e.target.value);
  };

  const addList = (e) => {
    e.preventDefault();

    lists.dispatch({
      type: "NEW_LIST",
      payload: {
        content: newList,
        id: lists.getState().length + 1,
        importance: true,
      },
    });
    // console.log("this is test 22: ", lists.getState()[1]);
  };
  return (
    <div>
      {/* note ---> */}
      <form name="notes">
        <input type="text" name="noteText" onChange={handleNote} />
        <button onClick={addNote}>Add Note</button>
      </form>

      <div>
        Notes will be here :
        <ul>
          {notes.getState().map((note) => (
            <li key={note.id}>
              {note.content} , <b>{note.importance ? "important" : ""}</b>
            </li>
          ))}
        </ul>
      </div>

      {/* list ---> */}
      <form name="lists">
        <input type="text" name="listText" onChange={handleList} />
        <button onClick={addList}>Add Note</button>
      </form>
      <div>
        New lists wil be here :
        <ul>
          {lists.getState().map((list) => (
            <li key={list.id}>
              {list.content} ,<b>{list.importance ? "important" : ""}</b>
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
lists.subscribe(() => {
  root.render(<App />);
});

//  try again  -------------------------------------------------------------------------------------------- >

// import { useState } from "react";
// import { createRoot } from "react-dom/client";
// import { createStore } from "redux";

// const container = document.getElementById("root");
// const root = createRoot(container);

// const noteReducer = (state, action) => {
//   console.log(action);
//   console.log("this is test for action type:", action.type);
// };

// const note = createStore(noteReducer);

// note.dispatch({
//   type: "NEW_NOTE",
//   payload: {
//     content: "state changes are made with actions",
//     important: false,
//     id: 2,
//   },
// });

// const App = () => {
//   // [notes, setNotes]= useState([]);
//   // setNote(1);
// };

// root.render("hello ");
// // notes.subscribe(() => {
// //   root.render(<App />);
// // });
