import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <img src="src\assets\logo-web-flux.jpg" alt="logo-webflux" />
      </header>
      <div className='cardMain'>
        <div className='card'>
          <img src="src\assets\dpx-logo.jpg" alt="dpx-logo"/>

          <a href="https://site-dpx-wzsh.onrender.com/">Visualizar</a>
        </div>

        <div className='card'>
          <img src="src\assets\logo-consulta.png" alt="consulta" />

           <a href="http://192.168.1.2:8080">Visualizar</a>
        </div>
      </div>
    </>
  )
}

export default App
