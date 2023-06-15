import React, {Component} from "react";
import ReactDOM  from "react-dom/client";
import Navbar from "../src/component/Navbar";
import News from "../src/component/News";
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";
const App = ()=>{
    const pagesize=5;
        return (
            <Router>
              <div className="header">
                <Navbar title ="NewsBreeze" about="About"/>
            <Routes>
                <Route index element={<News key="general" pageSize={pagesize} country="in" category="general"/>}/>
                <Route path="/business" element={<News key="business" pageSize={pagesize} country="in" category="business"/>}/> 
                <Route path="/entertainment" element={<News key="entertainment" pageSize={pagesize} country="in" category="entertainment"/>}/>
                <Route path="/general" element={<News key="general" pageSize={pagesize} country="in" category="general"/>}/>
                <Route path="/health" element={<News key="health" pageSize={pagesize} country="in" category="health"/>}/> 
                <Route path="/science" element={<News key="science" pageSize={pagesize} country="in" category="science"/>}/> 
                <Route path="/sports" element={<News key="sports" pageSize={pagesize} country="in" category="sports"/>}/> 
                <Route path="/technology" element={<News key="technology" pageSize={pagesize} country="in" category="technology"/>}/> 
            </Routes>
            </div>
            </Router>
           
        )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>) 