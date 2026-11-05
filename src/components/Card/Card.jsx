import styled from "styled-components";
import StyledButton from "../Button/StyledButton";
import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { useOutletContext } from "react-router";

const Container = styled.div`
    padding: 2rem;
    background-color: #dcf1d2;
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.2rem;
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
    width: 4ch;
    font-size: 1.5rem;
    padding: 0.1rem;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    padding: 0.2rem;
    margin-top: 1rem;
`
const Button = styled(StyledButton)`
    font-size: 1.2rem;
    padding: 0.5rem;

    &:active{
    transform: scale(0.9);
    box-shadow: 1px 1px 1px black;
    }
`
const SmallButton = styled(Button)`
    font-size: 1rem;
    padding: 0.1rem;
`

const Card = ({product})=>{
    const [quantity,setQuantity] = useState(1);
    const {addItemToCart} = useOutletContext();
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
                    setQuantity(1);
                }}>
                <div>
                    <label htmlFor="quantity">Please select a quantity to add</label>
                    <QuantityContainer>
                        <SmallButton type="button" onClick={()=>{
                            if(quantity>1)
                                setQuantity(quantity-1);
                        }} aria-label="decrease"><Minus/></SmallButton>
                        <Input type="number" min="1" id="quantity" value={quantity} onChange={(e)=>{
                            setQuantity(e.target.value);
                        }}/>
                        <SmallButton type="button" onClick={()=>{
                            setQuantity(quantity+1);
                        }} aria-label="increase"><Plus/></SmallButton>
                    </QuantityContainer>
                </div>
                <Button type="submit">Add to Cart</Button>
            </Form>
        </Container>
    )
}

export default Card;