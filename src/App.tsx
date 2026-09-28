// import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import UserPage from './components/UserPage'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-[auto_1fr] min-h-screen">
     <div className='row-span-2'>

      <Sidebar />
     </div>
      <div className='col-span-4'>

      <Navbar  />
      </div>
      <div className="col-span-4 p-4">
        {/* <UserPage /> */}
        <Dashboard />
        {/* <Login />  */}
     </div>
    </div>
  )
}

export default App