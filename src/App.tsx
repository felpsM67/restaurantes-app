import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardPrato from "./components/CardPrato";
import DetalhesPrato from "./components/DetalhesPrato";
import FormularioPrato from "./components/FormularioPrato";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CardPrato />} />
        <Route path="/cadastro-prato" element={<FormularioPrato />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/editar-prato/:id" element={<FormularioPrato isEditing />} />
      </Routes>
    </Router>
  );
}

export default App;
