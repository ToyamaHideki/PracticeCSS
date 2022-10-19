import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css'

import PageList from "./pages/pageList";
import NeonBtn from './pages/NeonButton/NeonBtn';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* 各ルートを記述する  ↓pathにルーティングを設定し、遷移ファイルを指定*/}
        <Route path="/" element={<PageList />}></Route>
        <Route path="/neonbtn" element={<NeonBtn />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
