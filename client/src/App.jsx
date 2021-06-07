import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import * as API from "./utils/API";

function App() {
  const [menuState, setMenuState] = useState([]);

  const handleBtnClick = (e) => {
    const target = e.target.attributes.getNamedItem("data-value").value;
    setMenuState(
      menuState.filter((item) => {
        return target !== item.name;
      })
    );
  };
  useEffect(() => {
    API.getMenu().then((res) => {
      setMenuState(res.data);
    });
  }, []);

  return (
      <Home handleBtnClick={handleBtnClick} items={menuState} setItems={setMenuState} />
  );
}

export default App;
