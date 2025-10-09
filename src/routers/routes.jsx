import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "../pages/Index";
import { Seguimiento_academico } from "../pages/Seguimiento_academico";
import { Carreras_transformadoras } from "../pages/Carreras_transformadoras";
import { Apoyo_estudiantil } from "../pages/Apoyo_estudiantil";
export function MyRoutes() {
  return (
    <Routes>
      <Route path="/Index" element={<Index />} />
      <Route
        path="/Seguimiento_academico"
        element={<Seguimiento_academico />}
      />
      <Route
        path="/Carreras_transformadoras"
        element={<Carreras_transformadoras />}
      />
      <Route path="/Apoyo_estudiantil" element={<Apoyo_estudiantil />} />
    </Routes>
  );
}
