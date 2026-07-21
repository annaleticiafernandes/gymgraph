import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import App from './App.jsx'

import AppLayout from './layouts/AppLayout/AppLayout.jsx'
import Home from './pages/Home/Home.jsx'
import Workouts from './pages/Workouts/Workout.jsx'
import Exercises from './pages/Exercises/Exercises.jsx'
import History from './pages/History/History.jsx'
import Settings from './pages/Settings/Settings.jsx'

const router = createBrowserRouter([
  {path: "/", element: <AppLayout />, children: [
    {index: true, element: <Home />},
    {path: "/workouts", element: <Workouts />},
    {path: "/exercises", element: <Exercises />},
    {path: "/history", element: <History />},
    {path: "/settings", element: <Settings />}
  ]}

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
