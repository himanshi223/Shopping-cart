import './App.css'
import Navbar from './components/Navbar/Navbar';
import { useParams } from 'react-router';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import { useEffect, useState } from 'react';
import getProducts from './getProducts';

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
            <Header items = {total}/>
            <Navbar />
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
