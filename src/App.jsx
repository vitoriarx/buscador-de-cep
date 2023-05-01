import { useState } from 'react'
import './App.css'
import {FiSearch} from 'react-icons/fi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <h1 className='title'>Buscador CEP</h1>

        <div className="containerInput">
          <input type="text" placeholder='Digite seu cep...' />

          <button className='buttonSearch'><FiSearch size={25} color='white'/></button>
        </div>

        <main className='main'>
          <h2>CEP: 79003222</h2>

          <span>Rua Teste Algum</span>
          <span>Complemento: Algum complemento</span>
          <span>Vila Rosa</span>
          <span>Campo Grande - MS</span>
        </main>

      </div>
    </>
  )
}

export default App
