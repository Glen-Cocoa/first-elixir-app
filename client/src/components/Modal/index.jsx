import React, { useState, useEffect } from "react";
import { Modal, Backdrop, Fade, TextField } from "@material-ui/core";

const styles = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: "10px black",
    padding: "30px",
    height: "40%",
  },
  footer: {
    position: "fixed",
    left: "50%",
    bottom: "0%",
    width: "33%",
    margin: "3% -16%",
  },
  submitBtn: {
    margin: "50px",
    width: "105px",
  },
};

const showErrors = (errorMap) => {
  //todo: append errors to modal
  console.log(errorMap);
};

const resetFields = (...args) => {
  args.forEach((fn) => fn(""));
};

const isInvalidPrice = (input) => {
  const regex = /^\s*-?[1-9]\d*(\.\d{1,2})?\s*$/;
  return !regex.test(input);
};

const isInvalidName = (name) => {
  return !name?.length > 0;
};

const validateFields = (name, price) => {
  return {
    invalidName: isInvalidName(name),
    invalidPrice: isInvalidPrice(price),
  };
};

export default function TransitionsModal({
  handleOpen,
  handleClose,
  open,
  formBtnHandler,
}) {
  const [itemName, setItemName] = useState();
  const [itemPrice, setItemPrice] = useState();
  const [itemDescription, setItemDescription] = useState();
  const [formErrors, setFormErrors] = useState({
    invalidName: true,
    invalidPrice: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const containsErrors = Object.values(formErrors).reduce(
      (acc, curVal) => acc || curVal,
      false
    );
    if (!containsErrors) {
      formBtnHandler(e, itemName, itemPrice, itemDescription);
      resetFields(setItemName, setItemPrice, setItemDescription);
    } else {
      showErrors(formErrors);
    }
  };

  const handleModalOpen = () => {
    resetFields(setItemName, setItemPrice, setItemDescription);
    validateFields(itemName, itemPrice);
    handleOpen();
  };

  useEffect(() => {
    setFormErrors(validateFields(itemName, itemPrice));
  }, [itemName, itemPrice]);

  return (
    <div>
      <button style={styles.footer} type="button" onClick={handleModalOpen}>
        Click here to add a menu item
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={styles.paper}>
            <form noValidate autoComplete="off">
              <TextField
                id="name-input"
                label="Name"
                variant="outlined"
                onChange={(e) => {
                  setItemName(e.target.value);
                }}
              />
              <br />
              <TextField
                id="price-input"
                label="Price"
                variant="outlined"
                onChange={(e) => {
                  setItemPrice(e.target.value);
                }}
              />
              <br />
              <TextField
                id="descr-input"
                multiline
                rowsMax={4}
                label="Description"
                variant="outlined"
                onChange={(e) => {
                  setItemDescription(e.target.value);
                }}
              />
              <br />
              <button onClick={handleSubmit} style={styles.submitBtn}>
                Save
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
