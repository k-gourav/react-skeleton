import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import { useState } from 'react'

function App() {
  const [inputText, setInputText] = useState('')

  return (
    <>
    <Header handleInputText={setInputText}/>
    <Body asideText={inputText} />
    </>
  )
}

export default App
