import Button from "./Button"
import styles from "./App.module.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";


function App() {
  return <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<Home />}/>
      <Route path="/movie/:id" element={<Detail />}/>
    </Routes>
  </BrowserRouter>
}

export default App;
