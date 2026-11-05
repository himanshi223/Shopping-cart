import styled from "styled-components";
import Card from "../Card/Card";
import { useOutletContext } from "react-router";

const Container = styled.div`
    padding: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 3rem;

    @media (max-width: 800px){
      padding: 2rem;
    }
`

const Shop = () => {
    const {products} = useOutletContext();
    const cards = products.map(product => <Card key={product.id} product={product}/>)
    return (
        <Container>
           {cards}
        </Container>
    )
}

export default Shop;