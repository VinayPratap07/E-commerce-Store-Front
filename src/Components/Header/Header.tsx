import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1 className="my-10 text-blue-400 text-5xl">E-commerce Store Front</h1>
      <NavLink to="/" className="mx-2">
        Home
      </NavLink>
      <NavLink to="/cart" className="mx-2">
        Cart
      </NavLink>
      <NavLink to="/wishlist" className="mx-2">
        Wishlist
      </NavLink>
    </div>
  );
}

export default Header;
