import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ColorBtn from "./pages/Button/ColorBtn/ColorBtn";
import JapaneseBtn from "./pages/Button/JapanesBtn/JapaneseBtn";
import NeonBtn from "./pages/Button/NeonButton/NeonBtn";
import PageList from "./pages/pageList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* 各ルートを記述する  ↓pathにルーティングを設定し、遷移ファイルを指定*/}
        <Route path="/" element={<PageList />}></Route>
        <Route path="/neonbtn" element={<NeonBtn/>}></Route>
        <Route path="/japanesebtn" element={<JapaneseBtn/>}></Route>
        <Route path="/colorbtn" element={<ColorBtn/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
