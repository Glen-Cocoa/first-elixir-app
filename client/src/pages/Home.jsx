import React from "react";
import SplitPane from "react-split-pane";
import Panel from "../components/Panel";
import useWindowSize from "../hooks/useWindowSize";
import TransitionsModal from "../components/Modal";

function Home({ handleBtnClick, items, setItems }) {
  const { width, height } = useWindowSize();
  const numberOfItems = Math.floor(height / 130);
  const [open, setOpen] = React.useState(false);

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
    setItems([...items, { name, price, description}])
    setOpen(false)
  }

  return (
    <div style={styles.container} className="container">
      <SplitPane size={width / 2} minSize={width / 2} split="vertical">
        <Panel
          items={items.slice(0, numberOfItems)}
          clickHandler={handleBtnClick}
        />
        <Panel
          items={items.slice(numberOfItems, numberOfItems * 2)}
          clickHandler={handleBtnClick}
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
