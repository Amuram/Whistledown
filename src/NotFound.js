import { Link } from "react-router-dom"
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>OOPSY!</h1>
            <p>This page doesn't exist</p>
            <Link to="/">Return to Home Page.</Link>
        </div>
     );
}
 
export default NotFound;