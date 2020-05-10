import React from 'react'
import { Button, ETheme } from 'react-epiphany-ui'


const App = () => {
  return(
    <ETheme>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '10%'}}>
        <Button onClick={() => console.log('shish')} label="My Button"/>
      </div>
    </ETheme>
  )
}

export default App
