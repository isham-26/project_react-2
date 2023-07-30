import React, { useState } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import About from './components/About';
import Contect from './components/Contect';
import Header from './components/Header';
import Details from './components/Details';
import "./styles/Mediaqueary.css";

function App() {
  const [data,setData]=useState([]);
  function setdata(val){
    setData([...data,val]);
  }
  
  function Delete(index) {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
    
  }

  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contect data={data} setdata={setdata}/>}/>
        <Route path="/Details" element={<Details data={data} Delete={Delete}/>}/>
        <Route path="*" element={<h1>404 page is not found</h1>}/>
      </Routes>
      
    </Router>
  );
}

export default App;
