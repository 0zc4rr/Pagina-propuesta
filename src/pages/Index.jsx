import styled from "styled-components";
import { SlLogin } from "react-icons/sl";
import Slider from "../components/Slider";
export function Index() {
  return (
    <Container>
      <div className="ini">
        <h1>Inicio</h1>
        <h2>Bienvenido a la plataforma de administrativos de UNIFRANZ</h2>
        <div> </div>
        <div className="intro">
          <p>
            <h2>!Aclaracion!</h2>
            Existen algunos componentes que no son visibles para ciertos
            usuarios
          </p>
        </div>
        <div className="admin">
          <p>Es usted un administrativo?</p>

          <div>
            <button className="sesion" onClick={"Iniciar"}>
              iniciar sesion
            </button>
          </div>
        </div>
      </div>
      <div calssName="slide">
        <Slider />
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;

  h1 {
    padding: 50px;
    position: 50px 0;
    text-align: center;
    margin-top: 10px;
  }
  h2 {
    text-align: center;
    margin-top: 2px;
    font-size: 20px;
  }
  .intro {
    margin-top: 40px;
    margin: 40px;
    text-align: center;
    padding: 20px;
    width: 800px 50px;

    box-shadow: 8px;
    margin: 0;
    border-radius: 14px;
    background-color: #827f7fff;
    p {
      color: #fff;
    }
  }
`;
