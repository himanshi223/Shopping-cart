import App from './components/App/App.jsx'
import Cart from './components/Cart/Cart.jsx';
import ErrorPage from './components/Error/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Shop from './components/Shop/Shop.jsx';

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home />},
      { path: "home", element: <Home/>},
      { path: "shop", element: <Shop />}, 
      { path: "cart", element: <Cart />}
    ]
  }
];

export default routes;