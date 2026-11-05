import Navbar from '../Navbar/Navbar';
import { Outlet} from 'react-router';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';
import getProducts from '../../getProducts';
import styled from 'styled-components';

const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
`

function App() {
    const [products, setProducts] = useState([]);
    const [items, setItems]= useState([]);
    const total = items.reduce((total, item)=>{
        total+= +item.quantity;
        return total;
    },0);

    useEffect(()=>{
        let ignore = false;
        getProducts().then(result => {
            if(!ignore){
                setProducts(result);
            }
        });
        return ()=>{
            ignore = true;
        }
    },[]);

    const addItemToCart = (product, quantity)=>{
        let added = false;
        items.forEach((item, index, items) => {
            if(item.product.id === product.id){
                const updatedItems = [...items.slice(0, index), ...items.slice(index+1, items.length)];
                updatedItems.push({product: product, quantity: item.quantity + quantity});
                console.log(updatedItems);
                setItems(updatedItems)
                added = true;
            }
        });
        if(added) return;
        setItems([...items, {product: product, quantity: quantity}]);
    }

    const increaseQuantity = (productId)=>{
        items.forEach((item, index, items) => {
            if(item.product.id === productId){
                const updatedItems = [...items.slice(0, index)];
                updatedItems.push({product: item.product, quantity: item.quantity+1});
                updatedItems.push(...items.slice(index+1, items.length))
                setItems(updatedItems)
            }
        });
    }

    const decreaseQuantity = (productId)=>{
        items.forEach((item, index, items) => {
            if(item.product.id === productId){
                if(item.quantity > 1){
                    const updatedItems = [...items.slice(0, index)];
                    updatedItems.push({product: item.product, quantity: item.quantity-1});
                    updatedItems.push(...items.slice(index+1, items.length))
                    setItems(updatedItems)
                }
                else{
                    const updatedItems = [...items.slice(0, index)];
                    updatedItems.push(...items.slice(index+1, items.length))
                    setItems(updatedItems)
                }
            }
        });
    }

    return (
        <>
            <Container>
                <Header items = {total}/>
                <Navbar />
            </Container>
            <Outlet context={{products, items, addItemToCart, increaseQuantity, decreaseQuantity}}/>
        </>
    )
}

export default App
