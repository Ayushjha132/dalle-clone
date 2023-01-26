import React from 'react'
import {BrowserRouter, Link, Route, Routes } from "react-router-dom";

import {logo} from "./assets";
import { Home, CreatePost } from './pages';
const App = () => {
  return (
    // using latest version of react DOM 
    <BrowserRouter>

     {/* used tailwind property here to design stuff */}
      <header className='w-full flex justify-between items-center bg-white
      sm:px-8 px-4 py-4 border-b border-b-[#e6e6f4]' >

      {/* inserted logo using logo component which here imported form assets */}
      <Link to="/">
        <img src={logo} alt="logo" className='w-28 object-contain' />
      </Link>

      {/* Create button  */}
      <Link to="/create-post" className='font-inter font-medium bg-[#6469ff]
      text-white px-4 py-2'>Create</Link>
   
      </header>

       {/* making left part other then nav bar ligth gray in color */}
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h[calc(100vh-73px]'>

      {/* navagate b/w to different pagaes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>
 
      </main>
    </BrowserRouter>
  )
}

export default App
