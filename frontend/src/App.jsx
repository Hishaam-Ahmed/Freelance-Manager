import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CreateFreelancer from './pages/CreateFreelancer.jsx'
import EditFreelancer from './pages/EditFreelancer.jsx'
import DeleteFreelancer from './pages/DeleteFreelancer.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/freelancers/create' element={<CreateFreelancer />} />
      <Route path='/freelancers/edit/:id' element={<EditFreelancer />} />
      <Route path='/freelancers/delete/:id' element={<DeleteFreelancer />} />
    </Routes>
  )
}

export default App