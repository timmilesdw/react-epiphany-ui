import React, { useState } from 'react'
import { Button, ETheme } from 'react-epiphany-ui'


const App = () => {
  const [color, setColor] = useState()
  const [size, setSize] = useState('default')
  const [event, setEvent] = useState(false)
  const [outlined, setOutlined] = useState(false)
  const [text, setText] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [rounded, setRounded] = useState(false)
  const [block, setBlock] = useState(false)

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
          <div>Rounded</div>
          <Button size="xs" color="#e15f41" label={rounded ? 'true' : 'false'} onClick={() => setRounded(!rounded)}/>
        </div>
        <div>
          <div>Text</div>
          <Button size="xs" color="red" label={text ? 'true' : 'false'} onClick={() => setText(!text)}/>
        </div>
        <div>
          <div>Disabled</div>
          <Button size="xs" color="green" label={disabled ? 'true' : 'false'} onClick={() => setDisabled(!disabled)}/>
        </div>
        <div>
          <div>Block</div>
          <Button size="xs" color="#f5cd79" label={block ? 'true' : 'false'} onClick={() => setBlock(!block)}/>
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2%'}}>
        <Button text={text} outlined={outlined} rounded={rounded} color={color} size={size} disabled={disabled} block={block} onClick={() => setEvent(!event)} label="press me"/>
      </div>
    </ETheme>
  )
}

export default App
