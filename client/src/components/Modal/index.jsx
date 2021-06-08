import React, { useState, useEffect } from 'react'
import { Modal, Backdrop, Fade, TextField } from '@material-ui/core'
import ErrorMessage from '../ErrorMessage'

const styles = {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #000',
    boxShadow: '10px black',
    padding: '30px',
    height: '40%'
  },
  footer: {
    position: 'fixed',
    left: '50%',
    bottom: '0%',
    width: '33%',
    margin: '3% -16%'
  },
  submitBtn: {
    margin: '50px',
    width: '105px'
  },
  errorMessage: {
    display: 'inline-block'
  }
}

export default function TransitionsModal({
  handleOpen,
  handleClose,
  open,
  formBtnHandler
}) {
  const [itemName, setItemName] = useState()
  const [itemPrice, setItemPrice] = useState()
  const [itemDescription, setItemDescription] = useState()
  const [errorsShown, setErrorsShown] = useState(false)
  const [formErrors, setFormErrors] = useState({
    invalidName: false,
    invalidPrice: false
  })

  const setters = [setItemName, setItemPrice, setItemDescription]

  const validateFields = (name, price) => {
    // make sure the price matches format of 1.00
    const regex = /^([0-9])\d*(?:\.\d{2})$/
    return {
      invalidName: !name?.length > 0,
      invalidPrice: !regex.test(price)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const containsErrors = Object.values(formErrors).reduce(
      (acc, curVal) => acc || curVal,
      false
    )
    if (!containsErrors) {
      formBtnHandler(e, itemName, itemPrice, itemDescription, [setItemName, setItemPrice, setItemDescription])
    } else if(containsErrors){
      setErrorsShown(true)
    }
  }

  const handleModalOpen = () => {
    setErrorsShown(false)
    handleOpen(setters)
  }

  useEffect(() => {
    setFormErrors(validateFields(itemName, itemPrice))
  }, [itemName, itemPrice])

  return (
    <div>
      <button style={styles.footer} type='button' onClick={handleModalOpen}>
        Click here to add a menu item
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        style={styles.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div style={styles.paper}>
            <form noValidate autoComplete='off'>
              <TextField
                id='name-input'
                label='Name'
                variant='outlined'
                onChange={(e) => {
                  setItemName(e.target.value.trim())
                }}
              />
              <br />
              <TextField
                id='price-input'
                label='Price'
                variant='outlined'
                onChange={(e) => {
                  setItemPrice(e.target.value.trim())
                }}
              />
              <br />
              <TextField
                id='descr-input'
                multiline
                rowsMax={4}
                label='Description'
                variant='outlined'
                onChange={(e) => {
                  setItemDescription(e.target.value.trim())
                }}
              />
              <br />
              <button onClick={handleSubmit} style={styles.submitBtn}>
                Save
              </button>
              <ErrorMessage shown={errorsShown} errors={formErrors} />
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  )
}
