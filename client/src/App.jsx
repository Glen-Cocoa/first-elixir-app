import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import * as API from './utils/API'
import MenuItemContext from './contexts/MenuItemContext'
import ItemsContext from './contexts/ItemsContext'

function App() {
  const [menuItems, setMenuItems] = useState([])

  const handleRemoveItem = (e) => {
    const target = e.target.attributes.getNamedItem('data-value').value
    //this is ugly and repetitive - fix
    const item = menuItems.filter((item) => {
      return target === item.name
    })
    setMenuItems(
      menuItems.filter((item) => {
        return target !== item.name
      })
    )
    API.deleteMenuItem(item[0].id)
  }

  useEffect(() => {
    API.getMenu().then((res) => {
      setMenuItems(res?.data?.data || [])
    })
  }, [])

  return (
    <ItemsContext.Provider value={{ menuItems, setMenuItems }}>
      <MenuItemContext.Provider value={handleRemoveItem}>
        <Home />
      </MenuItemContext.Provider>
    </ItemsContext.Provider>
  )
}

export default App
