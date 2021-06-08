import React from "react";

const ItemsContext = React.createContext({
    menuItems: [],
    setMenuItems: () => null
  });
  
  export default ItemsContext;