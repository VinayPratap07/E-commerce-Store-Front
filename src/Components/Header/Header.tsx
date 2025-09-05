import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="container max-w-screen  ">
      <header className="flex justify-evenly items-center h-20 w-full shrink-0 md:px-6">
        <h1 className="font-mono text-5xl text-[#111827] w-1/4 pl-20 font-bold">
          Velora
        </h1>

        <form className="w-2/4">
          <button type="submit" className="text-xl">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
          <input
            type="text"
            className="border-b w-17/20 mx-6 p-1 text-xl hover:border-b-[#3B82F6] focus:border-b-[#3B82F6] focus:outline-none"
          />
        </form>

        <div className="flex justify-evenly w-2/4 pr-20">
          <NavLink to="/" className="headerNavLink textFont">
            Home
          </NavLink>
          <NavLink to="/cart" className="headerNavLink">
            Cart
          </NavLink>
          <NavLink to="/wishlist" className="headerNavLink">
            Wishlist
          </NavLink>
          <button className="p-1 border border-[#6B7280] ">Light</button>
          <button className="textFont p-2 bg-[#3B82F6] rounded-md font-bold text-white text-xl hover:bg-[#2563EB]">
            LogIn
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
