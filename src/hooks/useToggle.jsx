import { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return [toggle, onToggle];
};

export default useToggle;
