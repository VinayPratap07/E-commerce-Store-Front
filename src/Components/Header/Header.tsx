import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type { RootState } from "../../Store/Store";
import { useState } from "react";

function Header() {
  const state = useSelector((state: RootState) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky z-40 top-0 right-0 left-0 grid grid-cols-1 text-center bg-[#f5f2f1] h-32 md:h-40 w-full rounded-b-4xl p-4 md:p-5">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center h-1/2">
            <div className="w-1/4 md:w-1/3 flex justify-start items-start p-2">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="md:hidden p-2"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
              <div className="hidden md:block">
                <LightIcon className="h-5 w-5" />
              </div>
            </div>

            <div className="w-1/2 md:w-1/3 flex justify-center items-start">
              <NavLink to="/">
                <h1 className="font-Epunda text-3xl md:text-4xl text-[#111827] tracking-widest">
                  VELORA
                </h1>
              </NavLink>
            </div>

            <div className="relative flex justify-end items-start w-1/4 md:w-1/3 h-full p-2 pr-0 md:pr-5 text-xl textFont gap-x-3 md:gap-x-4">
              <div className="hidden md:flex justify-center items-center w-1/2 border-b border-gray-200 focus-within:border-gray-700">
                <button type="submit" className="text-black p-2">
                  <SearchIcon className="h-5 w-5" />
                </button>
                <input
                  type="text"
                  className="w-full p-2 text-sm bg-transparent focus:outline-none"
                  placeholder="Search"
                />
              </div>
              <NavLink to="/login" className="headerNavLink textFont">
                <UserIcon className="h-5 w-5" />
              </NavLink>
              <NavLink to="/cart" className="headerNavLink textFont">
                <CartIcon className="h-5 w-5" />
              </NavLink>
              <span className="relative right-5 md:right-5 text-black text-xs">
                {state.products.length === 0 ? "" : state.products.length}
              </span>
            </div>
          </div>

          <div className="hidden lg:flex justify-around items-center w-full lg:w-1/3 h-1/2 mx-auto">
            <NavLink
              to="/men's"
              className={({ isActive }) =>
                isActive
                  ? "headerNavLink textFont border-b-1 border-black font-semibold"
                  : "headerNavLink textFont hover:border-b-1 hover:border-black"
              }
            >
              Men
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "headerNavLink textFont border-b-1 border-black font-semibold"
                  : "headerNavLink textFont hover:border-b-1 hover:border-black"
              }
            >
              Women
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "headerNavLink textFont border-b-1 border-black font-semibold"
                  : "headerNavLink textFont hover:border-b-1 hover:border-black"
              }
            >
              Kids
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "headerNavLink textFont border-b-1 border-black font-semibold"
                  : "headerNavLink textFont hover:border-b-1 hover:border-black"
              }
            >
              Electronics
            </NavLink>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#f5f2f1] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="font-semibold text-lg">Menu</h2>
          <button onClick={() => setIsMenuOpen(false)} className="p-2">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="p-4">
          <div className="flex justify-center items-center w-full border-b border-gray-200 focus-within:border-gray-700 mb-6">
            <button type="submit" className="text-black p-2">
              <SearchIcon className="h-5 w-5" />
            </button>
            <input
              type="text"
              className="w-full p-2 text-sm bg-transparent focus:outline-none"
              placeholder="Search"
            />
          </div>

          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/men's"
              className="text-left p-2 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Men
            </NavLink>
            <NavLink
              to="/"
              className="text-left p-2 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Women
            </NavLink>
            <NavLink
              to="/"
              className="text-left p-2 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Kids
            </NavLink>
            <NavLink
              to="/"
              className="text-left p-2 rounded hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Electronics
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;

type IconProps = {
  className?: string;
};

const SearchIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const MenuIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const CartIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const UserIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const LightIcon = ({ className }: IconProps) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
