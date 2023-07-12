import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Gaming Blog</h1>
      <div className="links">
        <NavLink to="./home">Home</NavLink>
        <NavLink to="./allblogs">Blog</NavLink>
        <NavLink to="./aboutus">About Us</NavLink>
        <NavLink to="./teams">Teams</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
