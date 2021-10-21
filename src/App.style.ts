import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-size: cover;
        margin:0;
        justify-content: center;
        background-color: #c1cdd7
    }

    *{
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
    `;

    export const Wrapper = styled.div`
        display: flex;
        flex-direction: row;
        //flex-basis: 25%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        
        `;