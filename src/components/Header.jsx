import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../utils/style/colors';
import logo from '../assets/dark-logo.png'
import lightLogo from '../assets/light-logo.png'
import { useTheme } from "../utils/hooks";

const StyledLink = styled(Link)`
    padding: 1rem;
    margin: 1rem;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: inset 0px -2px 2px #c2c3c989;
`;
const Links = styled.div`
    display: flex;
`;
const Logo = styled.img`
    height: 3rem;
`;

const Header = () => {
    const { theme } = useTheme();

    return (
        <Nav>
            <Logo src={theme === 'light' ? logo : lightLogo} alt="logo shiny" />
            <Links>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/freelances">Profils</StyledLink>
                <StyledLink to="/survey/1" $isFullLink>
                    Faire le test
                </StyledLink>
            </Links>
        </Nav>
    );
};

export default Header;
