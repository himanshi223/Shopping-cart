import Navbar from '../Navbar/Navbar';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import { useEffect, useState } from 'react';
import getProducts from '../../getProducts';
import styled from 'styled-components';

const Container = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
`

function App() {
    const { page } = useParams();
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
        setItems([...items, {product: product, quantity: quantity}]);
        console.log(items);
    }

    return (
        <>
            <Container>
                <Header items = {total}/>
                <Navbar />
            </Container>
            {page  === "home" || page === ""? (
                <Home />
            ) : page === "shop" ? (
                <Shop products={products} addItemToCart={addItemToCart}/>
            ) : page === "cart" ? (
                <Cart />
            ) : (
                <h2>Page Not Found</h2>
            )}
        </>
    )
}

export default App
