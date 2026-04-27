// import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from "./AppRoutes"
import { AuthProvider } from './features/auth/auth.Context'
import "../src/features/shared/global.scss"
import { PostContextProvider } from './features/posts/Post.context'

function App() {
  return (
    <AuthProvider>
      <PostContextProvider>
        <RouterProvider router={router} />
      </PostContextProvider>
    </AuthProvider>
  )
}

export default App
