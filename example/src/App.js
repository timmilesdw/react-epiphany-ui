import React, { useState } from 'react'
import { Button, ETheme } from 'react-epiphany-ui'


const App = () => {
  const [color, setColor] = useState()
  const [size, setSize] = useState('default')
  const [event, setEvent] = useState(false)
  return(
    <ETheme>
      <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '10%'}}>
        <div>
          <div>Color</div>
          <input 
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="default"/>
        </div>
        <div>
          <div>Size</div>
          <input 
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="xs, sm, md or lg"/>
        </div>
        <div>
          <div>Event</div>
          <div>{event ? 'true' : 'false'}</div>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
        <Button text color={color} size={size} onClick={() => setEvent(!event)} label="press me"/>
      </div>
    </ETheme>
  )
}

export default App
