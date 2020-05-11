import React, { useState } from 'react'
import { Button, ETheme } from 'react-epiphany-ui'


const App = () => {
  const [color, setColor] = useState()
  const [size, setSize] = useState('default')
  const [event, setEvent] = useState(false)
  const [outlined, setOutlined] = useState(false)
  const [text, setText] = useState(false)
  return(
    <ETheme>
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'center', marginTop: '10%'}}>
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
        <div>
          <div>Outlined</div>
          <Button size="xs" color="purple" label={outlined ? 'true' : 'false'} onClick={() => setOutlined(!outlined)}/>
        </div>
        <div>
          <div>Text</div>
          <Button size="xs" color="red" label={text ? 'true' : 'false'} onClick={() => setText(!text)}/>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
        <Button text={text} outlined={outlined} color={color} size={size} onClick={() => setEvent(!event)} label="press me"/>
      </div>
    </ETheme>
  )
}

export default App
