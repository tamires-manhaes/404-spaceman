import React from 'react'
import ReactDOM from 'react-dom/client'
import Page404 from './Page404'
import './App.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Page404 
      title="OOPS!" 
      subtitle="Page not found" 
      btn1Label="GO HOME" 
      btn1Action={() => alert('btn 1 click')} 
      btn2Label="GO BACK" 
      btn2Action={() => alert('btn 2 click')}
    />
  </React.StrictMode>,
)
