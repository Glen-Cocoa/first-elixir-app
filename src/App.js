import React, { useState, useEffect } from 'react'
import Home from './pages/Home'
import MenuContext from './utils/MenuContext'
import * as API from './utils/API'

function App() {

  const [ menuState, setMenuState ] = useState([])

  const handleBtnClick = (e) => {
    const target = e.target.attributes.getNamedItem('data-value').value 
    setMenuState(menuState.filter((item) => {
      return target !== item.name
      }) 
    )
  }
  useEffect(() => {
    API.getMenu.then((res) => {
      setMenuState(res)
    })
  }, [])

  return (
    <MenuContext.Provider value={menuState}>
      <Home handleBtnClick={handleBtnClick}/>
    </MenuContext.Provider>
  )
}

export default App