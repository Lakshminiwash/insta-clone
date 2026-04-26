// import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from "./AppRoutes"
import { AuthProvider } from './features/auth/auth.Context'
import "../src/features/shared/global.scss"

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
