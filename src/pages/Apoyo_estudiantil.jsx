import styled from "styled-components";
import Enlaces from "../components/Enlaces";

export function Apoyo_estudiantil() {
  return (
    <Container>
      <h1>apoyo estudiantil</h1>
      <ContentWrapper>
        <Enlaces id="2" />
      </ContentWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
`;
