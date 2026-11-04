import { Link } from "react-router";
import styled from "styled-components";
import StyledButton from "../Button/StyledButton";

const StyledNav = styled.nav`
    padding: 1rem;
    background-color: #b6c9b2;
`

const StyledList = styled.ul`
    display: flex;
    list-style: none;
    justify-content: center;
    gap: 4rem;
    font-size: 1.2rem;
    padding: 1rem;
`

const Navbar = () => {
    return (
        <StyledNav>
            <StyledList>
                <li>
                    <StyledButton as={Link} to="/home">Home</StyledButton>
                </li>
                <li>
                    <StyledButton as={Link} to="/shop">Shop</StyledButton>
                </li>
                <li>
                    <StyledButton as={Link} to="/cart">Cart</StyledButton>
                </li>
            </StyledList>
        </StyledNav>
    )
}

export default Navbar;