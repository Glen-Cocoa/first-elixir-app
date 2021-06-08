import React, { useContext } from "react";
import SplitPane from "react-split-pane";
import Panel from "../components/Panel";
import useWindowSize from "../hooks/useWindowSize";
import TransitionsModal from "../components/Modal";
import ItemsContext from "../contexts/ItemsContext";
import { addMenuItem } from "../utils/API"

function Home() {
  const { width, height } = useWindowSize();
  const numberOfItems = Math.floor(height / 130);
  const [open, setOpen] = React.useState(false);
  const { menuItems, setMenuItems } = useContext(ItemsContext)

  const styles = {
    container: {
      paddingTop: "3%",
    },
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formBtnHandler = (e, name, price, description) => {
    e.preventDefault()
    if(!menuItems.map((item)=>item.name).includes(name)){
      const newItem = { name, price, description}
      setMenuItems([...menuItems, newItem])
      addMenuItem(newItem)
      setOpen(false)
    } else { 
      console.error("Name must be unique")
    }
  }

  return (
    <div style={styles.container} className="container">
      <SplitPane size={width / 2} minSize={width / 2} split="vertical">
        <Panel
          items={menuItems.slice(0, numberOfItems)}
        />
        <Panel
          items={menuItems.slice(numberOfItems, numberOfItems * 2)}
        />
      </SplitPane>
      <TransitionsModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        formBtnHandler={formBtnHandler}
      />
    </div>
  );
}

export default Home;
