import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue) && inputValue.length <= 1) {
      setValue(inputValue);
    }
  };

  return {
    value,
    onChange: handleChange,
  };
};

export default useInput;
