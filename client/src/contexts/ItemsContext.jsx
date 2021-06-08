import { createContext } from 'react'

const ItemsContext = createContext({
  menuItems: [],
  setMenuItems: () => null
})

export default ItemsContext
