import styled from "styled-components";
import Card from "../Card/Card";

const Container = styled.div`
    padding: 4rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 3rem;
`

const Shop = ({products, addItemToCart}) => {
    const cards = products.map(product => <Card key={product.id} product={product} addItemToCart={addItemToCart} />)
    return (
        <Container>
           {cards}
        </Container>
    )
}

export default Shop;