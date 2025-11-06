import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from './Components/Home';
import Blogs from "./Components/Blogs"


function App() {
  const [count, setCount] = useState(0)

  return (
    // <BrowserRouter basename="/">
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="/" element={<Home />}></Route>
    //       <Route path="/blogs" element={<Blogs/>}></Route>
    //       {/* <Route path="/" element={<Feed />}></Route>
    //       <Route path="/login" element={<Login />}></Route>
    //       <Route path="/profile" element={<Profile />}></Route>
    //       <Route path="/connections" element={<Connections />}></Route>
    //       <Route path="/requests" element={<Requests />}></Route>
    //       <Route path="/signup" element={<Signup />}></Route>
    //       <Route path="/signup" element={<Signup />}></Route>
    //       <Route path="/signup" element={<Signup />}></Route>
    //       <Route path="/chat/:targetUserId" element={<Chat />}></Route> */}
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <Layout/>
  );
}

export default App
