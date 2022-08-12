import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthResultPage from "./pages/AuthResultPage";
import BalancePage from "./pages/BalancePage";
import IndexPage from "./pages/IndexPage";
import MainPage from "./pages/MainPage";
import NewsPage from "./pages/NewsPage";
import QrCodePage from "./pages/QrCodePage";
import QrReaderPage from "./pages/QrReaderPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/authResult" element={<AuthResultPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/balance" element={<BalancePage />}></Route>
        <Route path="/qr" element={<QrCodePage />}></Route>
        <Route path="/qrreader" element={<QrReaderPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
