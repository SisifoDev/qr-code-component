import "./App.css";
import styled from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import Card from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Card />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
