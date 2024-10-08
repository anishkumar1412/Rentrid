import { useState } from 'react'

import './App.css'
import Signup from './assets/Signup/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<Signup/>
  </>
  )
}

export default App
