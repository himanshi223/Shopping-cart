import { ShoppingCart } from "lucide-react"
import { Link } from "react-router"
import styled from "styled-components"

const StyledCart = styled(ShoppingCart)`
    height: 4rem;
    width: 4rem;
`

const StyledContainer = styled("div")`
    align-items: center;
    position: relative;
    color: white;
`

const Items = styled.div`
    display: inline-block;
    background-color: red;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    right: 0;
`

const CartIcon = ({items}) => {
    return (
        <StyledContainer as={Link} to="/cart" aria-label="cart-icon">
            {items!==0?
            <Items>
                <div>{items}</div>
            </Items>
            :""}
            <StyledCart />
        </StyledContainer>
    )
}

export default CartIcon;