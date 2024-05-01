import AuthPage from "./pages/AuthPage";
import FeedPage from "./pages/FeedPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<FeedPage />} />
          <Route path="/profil" element={<h1>Profil</h1>} />
          <Route path="/ayar" element={<h1>Ayar</h1>} />
          <Route path="/mesaj" element={<h1>Mesajlar</h1>} />
          <Route path="/mail" element={<h1>Mail</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
