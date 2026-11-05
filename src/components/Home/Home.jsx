import styled from "styled-components";
import StyledButton from "../Button/StyledButton"
import { Link } from "react-router";

const Container = styled.div`
    display: flex;
    padding: 4rem;
    gap: 6rem;
    align-items: center;
    justify-content: center;

    @media (max-width: 800px){
        flex-direction: column;
        text-align: center;
        gap: 4rem;
    }
`
const Img  = styled.img`
    width: 35%;
    object-fit: fill;
    box-shadow: 3px 3px 5px #589864;

    @media (max-width: 800px){
        width: 60%;
    }
`
const Main = styled.main`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`
const StyledPara = styled.p`
    font-size: 2rem;
`

const Home = () => {
    return (
        <Main>
            <Container>
                <Img src="/src/assets/shop_large.jpg" alt="An illustration of a store front"/>
                <StyledPara aria-label="about us">
                    Get high quality products trusted by many delivered right at your doorstep from the comfort of your home.
                    To ramp up your already stunning style,
                </StyledPara>
            </Container>
            <StyledButton as={Link} to="/shop">Shop Now!</StyledButton>
        </Main>
    )
}

export default Home;