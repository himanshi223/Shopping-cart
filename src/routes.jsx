import App from './App.jsx'

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