import './App.css'
import Dashboard from './components/dashboard/Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UploadCamClassifier from './components/identifier/UploadImage'
import Identification from './components/identifier/Identification'

function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element:
        <div>
          <Dashboard />
        </div>
      },

      {
        path: '/idenfication',
        element:
        <div>
          <UploadCamClassifier />
        </div>
      },

      {
        path: '/identifications',
        element:
        <div>
          <Identification />
        </div>
      }
    ]
  )

  return (
    <>
      <div >
        <RouterProvider router = {router}/>
      </div>
    </>
  )
}

export default App
