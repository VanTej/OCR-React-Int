import { createGlobalStyle } from 'styled-components';
import colors from "./colors";
import { useTheme } from '../hooks';

const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
 
    body {       
        background-color: ${({ isDarkMode }) =>
            isDarkMode ? '#2F2E41' : colors.backgroundLight};
        color: ${({ isDarkMode }) =>
            isDarkMode ? colors.backgroundLight : '#2F2E41'};
        margin: 0;  
    }

    li {
        text-decoration: none;
    }

    .text-primary {
        color: ${colors.primary};
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-inline: 20%;
        margin-inline: auto;
        & h2 {
            padding: 10%;
            text-align: center;
        }
    }

`;

export const GlobalStyle = () => {
    const { theme } = useTheme();

    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />;
};
