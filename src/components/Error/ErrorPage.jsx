import { Link } from "react-router"

const ErrorPage = ()=>{
    return (
        <div>
            <h1>Sorry, Page not found</h1>
            <Link to="/">Go back to Homepage</Link>
        </div>
    )
}

export default ErrorPage;