import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Vlog from './pages/Vlog'
import Layout from './pages/admin/Layout'
import DashBoard from './pages/admin/DashBoard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/vlog/:id' element={<Vlog />} />
          <Route path='/admin' element={true ? <Layout /> : <Login />}>
            <Route index element={<DashBoard />} />
            <Route path='addblog' element={<AddBlog />} />
            <Route path='listblog' element={<ListBlog />} />
            <Route path='comments' element={<Comments />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
