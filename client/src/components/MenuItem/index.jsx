import React, { useContext } from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import MenuItemContext from '../../contexts/MenuItemContext'

let styles = {
  card: {
    backgroundColor: 'beige',
    margin: '5px',
    minWidth: '100px'
  },
  description: {
    fontSize: 14,
    float: 'left'
  },
  price: {
    float: 'right',
    marginBottom: '15px'
  }
}

export default function MenuItem({ name, description, price, id }) {
  const handleRemoveItem = useContext(MenuItemContext)
  //should assign id as key - need to generate unique
  return (
    <Card style={styles.card} variant='outlined' key={name}>
      <button data-value={name} onClick={handleRemoveItem}>
        X
      </button>
      <CardContent>
        <Typography
          variant='h5'
          component='h2'
          color='textSecondary'
          gutterBottom
        >
          {name}
        </Typography>
        <Typography style={styles.description}>{description}</Typography>
        <Typography style={styles.price} color='textSecondary'>
          {`$${price}`}
        </Typography>
      </CardContent>
    </Card>
  )
}
