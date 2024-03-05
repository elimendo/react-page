import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/portfolio",
      element: <div>Portfolio</div>,
    },
    {
      path: "/contact",
      element: <div>Contact</div>,
    },
    {
      path: "/resume",
      element: <div>resume</div>,
    },
  ]);
  return (
  <RouterProvider router={router} />
  )
}

export default App
