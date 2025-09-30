import React from 'react'
import {Routes, Route} from "react-router-dom"
import { Login } from '../Page/Login'
import { Register } from '../Page/Register'
import { Dashboard } from '../Page/Dashboard'

import { NotFoundPage } from '../Page/NotFoudpage'
import { Test } from '../Page/test'

export const Allroutes = () => {
  return (
    <div>
          <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
    <Route path='/test' element={<Test />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}




