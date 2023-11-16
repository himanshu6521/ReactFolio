import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { ThemeProvider } from "@material-tailwind/react";
// https://www.material-tailwind.com/docs/react/guide/cra



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>,
)
