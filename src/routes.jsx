import App from './components/App/App.jsx'

const routes = [
  {
    path: "/",
    element: <App />
  },
  {
    path: "/:page",
    element: <App />
  }
];

export default routes;