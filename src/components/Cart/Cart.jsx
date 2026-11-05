import { Minus, Plus } from "lucide-react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #104e05;
    gap: 4rem;
    padding: 2rem 4rem;
    &>*{
        width: 10%;
    }
`
const InnerContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`

const Image = styled.img`
    width: 5%:
`

const Text = styled.p`
    font-size: 1.2rem;
    text-align: center;
`

const Heading = styled.h2`
    text-align: center;
`
const Button  = styled.button`
    background-color: #b0cfaf;
    border: none;
    padding: 0.2rem;
`

const Cart = ({items, increaseQuantity, decreaseQuantity}) => {
    let total = 0;
    items.forEach(item => {
        total+= item.product.price*item.quantity;
        total = Math.round(total*100)/100
    })
    const cards = items.map(item => {
        const product = item.product;
        const quantity = item.quantity;
        return (
        <Container id={product.id}>
            <Image src={product.image} alt={product.title}/>
            <Heading>{product.title}</Heading>
            <Text aria-label="price">${product.price}</Text>
            <InnerContainer>
                <Button type="button" aria-label="decrease" onClick={()=>decreaseQuantity(product.id)}><Minus/></Button>
                <Text aria-label="quantity">{quantity}</Text>
                <Button type="button" aria-label="increase" onClick={()=>increaseQuantity(product.id)}><Plus/></Button>
            </InnerContainer>
            <Text aria-label="Total">${product.price * quantity}</Text>
        </Container>
        )
    })
    if(items.length === 0)
        return (
            <Heading>No items in the cart yet</Heading>
        )
    return (
        <>
           {cards}
           <Container>
            <Heading>Grand Total</Heading>
            <Text aria-label="Grand Total">${total}</Text>
           </Container>
        </>
    )
}

export default Cart;