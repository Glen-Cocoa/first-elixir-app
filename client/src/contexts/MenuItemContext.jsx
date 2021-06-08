import { createContext } from "react";

const MenuItemContext = createContext({
    handleRemoveItem: () => null,
  });
  
  export default MenuItemContext;