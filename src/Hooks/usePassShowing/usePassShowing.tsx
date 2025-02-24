import { useState } from "react";

const usePassShowing = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleToggle = () => setShow((c) => !c);
  return { show, handleToggle };
};

export default usePassShowing;
