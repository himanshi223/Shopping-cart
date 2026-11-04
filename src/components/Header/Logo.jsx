import styled from "styled-components"

const StyledLogo = styled("div")`
    width: 4rem;
    height: 4rem;
    background-color: black;
    border-radius: 50%;
`
const Logo = () => {
    return (
        <StyledLogo>
            <img alt="logo"/>
        </StyledLogo>
    )
}

export default Logo;