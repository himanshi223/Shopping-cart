import styled from "styled-components";
import CartIcon from "./CartIcon";
import Logo from "./Logo";

const StyledHeader = styled.header`
    padding: 2rem 5rem;
    box-shadow: 1px 2px gray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #10490e;
    color: #effdf4;

    @media (max-width: 800px){
        padding: 1rem;
    }
`
const Header = ({items})=>{
    return (
         <StyledHeader>
            <Logo />
            <h1>C Hill Store</h1>
            <CartIcon items={items}/>
        </StyledHeader>
    )
}

export default Header;