import { BrowserRouter, Routes, Route } from "react-router-dom";
import NormalLayout from "./layouts/NormalLayout";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Preguntas from "./pages/Preguntas";
import Usuarios from "./pages/Usuarios";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NormalLayout />}>
          <Route path="" element={<Index />} />
          <Route path="inicio" element={<Home />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="preguntas" element={<Preguntas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
