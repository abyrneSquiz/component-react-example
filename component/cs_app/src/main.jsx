import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './default.scss'

var root = document.getElementById('root');
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App feed={root.dataset.feed} /> 
  </React.StrictMode>, 
) 

