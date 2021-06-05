import React, { useContext } from "react";
import SplitPane from 'react-split-pane'
import Panel from '../components/Panel'
import useWindowSize from '../hooks/useWindowSize'
import MenuContext from '../utils/MenuContext'

function Home() {
 const { width, height } = useWindowSize()
 const items = useContext(MenuContext)

 const numberOfItems = Math.floor(height/100)
 console.log(numberOfItems)

  return (
    <div className='container'>
      <SplitPane size={width/2} minSize={width/2} split='vertical'>
          <Panel items={items.slice(0, numberOfItems)}/>
          <Panel items={items.slice(numberOfItems, numberOfItems*2)}/>
      </SplitPane>
    </div>
  );
}

export default Home;
