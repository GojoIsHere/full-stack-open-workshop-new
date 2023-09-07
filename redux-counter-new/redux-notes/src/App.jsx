import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import { filterChange } from "./reducers/filterReducer";

const App = () => {
  // const [filter, setFilter] = useState("ALL");
  const dispatch = useDispatch;

  const filter = useSelector((state) => {
    console.log("test 4: ", state.filter);
    return state.filter;
  });

  const filterSelected = (filter) => {
    console.log("Clicked is the selected filter :", filter);
    // setFilter(filter);
    dispatch(filterChange(filter));
  };
  return (
    <div>
      <div>
        all{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("ALL")}
        />
        important{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("IMPORTANT")}
        />
        nonimportant{" "}
        <input
          type="radio"
          name="filter"
          onChange={() => filterSelected("NONIMPORTANT")}
        />
      </div>
      <NoteForm />
      <Notes />
    </div>
  );
};

export default App;
