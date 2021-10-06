import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Mali&display=swap');

*{
    margin:0;
    padding:0;
}

*,
*::before,
*::after {
    box-sizing: inherit;
}

html {
box-sizing:border-box;
position:relative;
}

body{
    font-family: 'Mali', sans-serif;
}
`;
