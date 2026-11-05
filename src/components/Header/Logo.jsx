import { Link } from "react-router";
import styled from "styled-components"

const Image = styled.img`
    width: 80px;
    border-radius: 100%;
    border: 3px solid white;
    @media (max-width: 600px){
        height: 4rem;
        width: 4rem;
    }
`
const Logo = () => {
    return (
       <Link to="/home"><Image alt="logo" src="/src/assets/logo.png"/></Link>
    )
}

export default Logo;