import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 16px;
        box-sizing: border-box;
    }

    *, *::before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 10px;
    }
`