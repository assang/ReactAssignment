import { BrowserRouter, Link } from "react-router-dom"

export const Header = () => {
    return (
        <div>
            <BrowserRouter>
            <Link to="/">Home</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
          <Link to="/employees">Employee List</Link>
          </BrowserRouter>
        </div>
    )
}