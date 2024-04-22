import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAllCharacters, getCharacter } from './Services/Services.jsx';

// const characters = getCharacter(Math.floor(Math.random() * (1011400 - 1011000) + 1011000)).then( res => console.log(res))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
