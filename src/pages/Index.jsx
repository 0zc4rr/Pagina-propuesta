import styled from "styled-components";
import { SlLogin } from "react-icons/sl";
import Slider from "../components/Slider";

export function Index() {
  const handleLogin = () => {
    // Implementar lógica de login
    console.log("Iniciando sesión...");
  };

  return (
    <Container>
      <div className="ini">
        <h1>Inicio</h1>
        <h2>Bienvenido a la plataforma de administrativos de UNIFRANZ</h2>
        <div className="intro">
          <h2>¡Aclaración!</h2>
          <p>
            Existen algunos componentes que no son visibles para ciertos
            usuarios
          </p>
        </div>
        <div className="admin">
          <p>¿Es usted un administrativo?</p>
          <button className="sesion" onClick={handleLogin}>
            Iniciar sesión
          </button>
        </div>
      </div>
      <div className="slide">
        <Slider />
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;

  h1 {
    padding: 50px;
    text-align: center;
    margin-top: 10px;
  }

  h2 {
    text-align: center;
    margin-top: 2px;
    font-size: 20px;
  }

  .intro {
    margin: 40px auto;
    text-align: center;
    padding: 20px;
    max-width: 800px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 14px;
    background-color: #827f7fff;

    p {
      color: #fff;
      margin: 0;
    }
  }

  .admin {
    text-align: center;
    margin: 40px auto;
  }

  .sesion {
    padding: 10px 20px;
    background-color: #4d4a4aff;
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #6b6868ff;
    }
  }
`;
