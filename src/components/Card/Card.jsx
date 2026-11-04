import styled from "styled-components";
import StyledButton from "../Button/StyledButton";
import { useState } from "react";

const Container = styled.div`
    padding: 2rem;
    background-color: #dcf1d2;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const StyledPara = styled.p`
    font-size: 1.2rem;
`

const ImgContainer = styled.div`
    width: 70%;
    height: 70%;
    margin: 0.5rem;
`

const Img = styled.img`
    object-fit: contain;
    object-position: center;
    width: 50%;
`
const Price = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`
const Input = styled.input`
    background-color: #e5f3c5;
    width: 50%;
    font-size: 1.5rem;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    font-size: 1.2rem;
`
const AddButton = styled(StyledButton)`
    font-size: 1.2rem;
    padding: 0.5rem;
`

const Card = ({product,addItemToCart})=>{
    console.log(product);
    const [quantity,setQuantity] = useState(1);

    return (
        <Container>
            <ImgContainer>
                <Img src={product.image} alt={product.title}/>
            </ImgContainer>
            <h2>{product.title}</h2>
            <Price aria-label="price">${product.price}</Price>
            <StyledPara data-testid="rating">Rating: {product.rating.rate}/5</StyledPara>
            <Form id="add-to-cart" onSubmit={(e)=>{
                e.preventDefault();
                addItemToCart(product, quantity);
                e.target.reset();
                }}>
                <label htmlFor="quantity">Please select quanity</label>
                <Input type="number" min="1" id="quantity" defaultValue="1" onChange={(e)=>{
                    console.log(e.target.value);
                    setQuantity(e.target.value);
                }}/>
                <AddButton type="submit">Add to Cart</AddButton>
            </Form>
        </Container>
    )
}

export default Card;