import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
    return (<AppStyled>
        <GlobalStyles />
        <div>Здесь скоро появится моё приложение</div>
    </AppStyled>)
}

const AppStyled = styled.div`
    min-height: 100vh;
    background: #ffffff;
`;
