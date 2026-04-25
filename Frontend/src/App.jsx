// import React from 'react'
import AppRoutes from './AppRoutes'
import { AuthProvider } from './features/auth.Context'

function App() {
  return (
    <div>
      <AuthProvider>
        <AppRoutes/>
      </AuthProvider>
    </div>
  )
}

export default App
