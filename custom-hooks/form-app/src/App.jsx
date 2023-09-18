// import { useState } from "react";
import useField from "./hooks/useField";
const App = () => {
  const name = useField("text");
  const born = useField("date");
  const height = useField("number");

  return (
    <div>
      <form>
        name:
        <input
          // type={name.type}
          // value={name.value}
          // onChange={name.onChange}
          {...name}
        />
        <br />
        birthdate:
        <input
          // type={born.type}
          // value={born.value}
          // onChange={born.onChange}
          {...born}
        />
        <br />
        height:
        <input
          // type={height.type}
          // value={height.value}
          // onChange={height.onChange}
          {...height}
        />
      </form>
      <div>
        {name.value} {born.value} {height.value}
      </div>
    </div>
  );
};
export default App;
