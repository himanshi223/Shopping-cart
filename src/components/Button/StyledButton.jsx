import styled from "styled-components"

const StyledButton = styled.button`
    background-color: pink;
    border: 1px solid black;
    font-size: 1.5rem;
    padding: 1rem 4rem;
    text-decoration: none;
    background-color: #ced7b9;
    color: #0a3b06;
    &:hover{
        transform: scale(1.01);
    }

    @media (max-width: 600px){
        padding: 1rem 1.5rem;
    }
`

export default StyledButton;