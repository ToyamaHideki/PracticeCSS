import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import PageList from "./pages/pageList";
import NeonBtn from './pages/NeonButton/NeonBtn';
import StyledComponents from "./pages/StyledComponets/StyledComponents";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* 各ルートを記述する  ↓pathにルーティングを設定し、遷移ファイルを指定*/}
        <Route path="/" element={<PageList />}></Route>
        <Route path="/neonbtn" element={<NeonBtn />}></Route>
        <Route path="/styled_components" element={<StyledComponents />}></Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
