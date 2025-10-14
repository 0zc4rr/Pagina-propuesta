import styled from "styled-components";
export function Seguimiento_academico() {
  return (
    <Container>
      <h1>seguimiento academico</h1>
      <div>
        <iframe
          title="Análisis de Monitoreo y Seguimiento Académico - 23II"
          width="100%"
          height="100%"
          src="https://app.powerbi.com/view?r=eyJrIjoiNmM5ZThhNjMtMzQ5MS00MDk1LTg5ODctY2FjN2ViYjIyYjcxIiwidCI6IjBhNzc3NjQwLTJhOGUtNDE4Zi1iZDMzLWQ5ZWU4ZjdlMzY0NiIsImMiOjR9"
          allowFullScreen="true"
        ></iframe>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  @media {
      max-width: 768px; 
      "position: absolute; 
      bottom: 0; 
      left: 0; 
      width: 100%; 
      height: 7%; 
      background-color: rgba(256, 256, 256, 1); 
      z-index: 999;"
  }
`;
