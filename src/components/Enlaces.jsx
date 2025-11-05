import React, { useState, useEffect } from "react";

function Enlaces() {
  const [embedHtml, setEmbedHtml] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/Obtener")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error al obtener: ${res.statusText}`);
        }
        return res.text();
      })
      .then((data) => {
        setEmbedHtml(data);
      })
      .catch((err) => {
        console.error("Error al obtener", err);
        setError("No se pudo cargar");
      });
  }, []);
  if (error) {
    return <div>{error}</div>;
  }
  if (!embedHtml) {
    return null;
  }
  return (
    <div
      className="containerp"
      style={{ width: "100%", height: "100vh" }}
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
}
export default Enlaces;
