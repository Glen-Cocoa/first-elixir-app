import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import MenuContext from './utils/MenuContext'
import * as API from './utils/API'

function App() {

  const [ menuState, setMenuState ] = useState([])

  useEffect(() => {
    API.getMenu.then((res) => {
      setMenuState(res)
    })
  }, [menuState])

  return (
    <MenuContext.Provider value={menuState}>
      <Home/>
    </MenuContext.Provider>
  )
}

export default App