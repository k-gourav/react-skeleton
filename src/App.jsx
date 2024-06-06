import Header from './components/Header.jsx'
import Body from './components/Body.jsx'

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };
  
  return (
    <>
    <Header/>
    <Body/>

    </>
  )
}

export default App
