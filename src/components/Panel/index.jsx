import React, { useContext } from 'react'
import MenuItem from '../MenuItem'

const styles = {
    panel : {
        minWidth: '100px',
    }
}

export default function Panel({ items }) {
   
    return (
        <div style={styles.panel} className='container'>
            { 
                items.length ? items.map(item => MenuItem(item)) :
                <h1> Lorem Ipsum </h1> 
            }
        </div>
    )
}