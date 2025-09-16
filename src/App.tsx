import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardPrato from "./components/CardPrato";
import DetalhesPrato from "./components/DetalhesPrato";
import FormularioPrato from "./components/FormularioPrato";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={< Login/>} />
        <Route path="/" element={<CardPrato/>}/>
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/cadastro-prato" element={<FormularioPrato />} />
      </Routes>
    </Router>
  );
}

export default App;
