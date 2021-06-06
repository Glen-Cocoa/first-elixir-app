import React from 'react'
import MenuItem from '../MenuItem'

const styles = {
    panel : {
        minWidth: '100px',
    }
}

export default function Panel({ items, clickHandler }) {
    return (
        <div style={styles.panel} className='container'>
            { 
                items.length ? items.map(item => MenuItem({...item, clickHandler})) :
                <div></div>
            }
        </div>
    )
}