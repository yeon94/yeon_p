import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { mainColor, textColor } from "../components/Colors";
const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:14px;
        background-color:${mainColor};
        color:${textColor};
        

    }
`;

export default globalStyles;
