import React from 'react'
import { Routes , Route } from "react-router-dom"
import Admin from '../Admin/Admin'

function AdminRouters() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Admin/>} ></Route>
      </Routes>
    </div>
  )
}

export default AdminRouters
