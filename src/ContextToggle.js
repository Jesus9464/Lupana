import { createContext } from "react";
import { useCycle } from "framer-motion";

export const ToggleCurrent = createContext(null);

const Provider = ({ children }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const value = {
    isOpen,
    OpenNav: () => toggleOpen(),
  };

  return (
    <ToggleCurrent.Provider value={value}>{children}</ToggleCurrent.Provider>
  );
};

export default { Provider };
