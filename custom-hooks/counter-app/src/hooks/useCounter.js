import { useState } from "react";
const useCounter = (initialVal = 0) => {
  const [value, setValue] = useState(initialVal);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    setValue(value - 1);
  };

  const zero = () => {
    setValue(0);
  };

  return {
    value,
    increase,
    decrease,
    zero,
  };
};
export default useCounter;
