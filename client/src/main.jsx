import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Layout>
      <Routes>

        <Route path="/" element={<App />} />
      </Routes>
      </Layout>
    </Router>
  </React.StrictMode>,
)
