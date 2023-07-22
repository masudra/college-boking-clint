import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Route/Router'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='bg-slate-100 px-5'>
        <RouterProvider router={router}>
        </RouterProvider></div>
    </AuthProvider>
  </React.StrictMode>,
)
