import React, { useState, useEffect } from 'react'
import Panel from './components/Panel'
import MenuContext from './utils/MenuContext'
import * as API from './utils/API'

function App() {
  const [ menuState, setMenuState ] = useState()

  useEffect(() => {
    API.getMenu.then((res) => {
      setMenuState(res)
      console.log(menuState)
    })
  }, [menuState])

  return (
    <MenuContext.Provider value={menuState}>
      <Panel/>
    </MenuContext.Provider>
  )
}

export default App