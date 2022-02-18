import { useState } from 'react'
import logo from './logo.svg'
import { GlobalStyle } from './styles/global'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <GlobalStyle />
    </div>
  )
}

export default App
