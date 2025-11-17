import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Enlaces({ id }) {
  const [iframeUrl, setIframeUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    (async () => {
      try {
        const res = await fetch(`/api/Obtener?id=${id}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error(`Error: ${res.status} ${res.statusText}`);
        const html = await res.text();

        // Extrae correctamente la URL del iframe
        const iframeMatch = html.match(/src=["']([^"']+)["']/i);
        const url = iframeMatch ? iframeMatch[1] : null;

        if (!mounted) return;
        if (url) setIframeUrl(url);
        else setIframeUrl(html); // fallback: si la respuesta ya es la URL
      } catch (err) {
        if (err.name === "AbortError") {
          // petición abortada por timeout o desmontaje — no tratar como error de usuario
          console.log("Fetch abortado (timeout/desmontaje).");
        } else {
          console.error("Error al obtener:", err);
          if (mounted)
            setError(`No se pudo cargar el contenido: ${err.message}`);
        }
      } finally {
        clearTimeout(timeoutId);
        if (mounted) setLoading(false);
      }
    })();

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [id]);

  if (loading) return <LoadingMessage>Cargando reporte...</LoadingMessage>;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;
  if (!iframeUrl)
    return <ErrorMessage>No hay contenido disponible</ErrorMessage>;

  return (
    <Container>
      <IframeContainer
        src={iframeUrl}
        frameBorder="0"
        allowFullScreen
        title={`Reporte ${id}`}
        allow="fullscreen"
      />
    </Container>
  );
}

export default Enlaces;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IframeContainer = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
`;

const LoadingMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #666;
`;

const ErrorMessage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  text-align: center;
  padding: 20px;
  font-size: 16px;
`;
