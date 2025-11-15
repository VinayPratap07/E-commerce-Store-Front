import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../Store/Store";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../Slices/CartSlice";
import { NavLink } from "react-router-dom";
function Cart() {
  const state = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const grandTotal = state.products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );

  if (state.products.length === 0) {
    return (
      <div className=" font-inter text-gray-900 p-8 md:p-16 text-center">
        {/* === MAIN "EMPTY CART" SECTION === */}
        <div className="py-16">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            Your cart is empty
          </h1>
          <NavLink to="/">
            <button className="font-poppins bg-gray-900 text-white border-none rounded-full py-3 px-8 text-base font-medium cursor-pointer transition-opacity hover:opacity-80">
              Continue shopping
            </button>
          </NavLink>
        </div>

        {/* === "HAVE AN ACCOUNT?" SECTION === */}
        <div className="my-8 md:my-16">
          <h2 className="font-poppins text-xl md:text-2xl font-medium mb-2">
            Have an account?
          </h2>
          <p className="text-gray-500">
            <a className="text-blue-600 underline cursor-pointer">Log in</a> to
            check out faster.
          </p>
        </div>

        {/* === THREE-COLUMN INFO SECTION === */}
        <div className="flex flex-col md:flex-row justify-between gap-10 text-left pt-12 border-t border-gray-200">
          <div className="flex-1">
            <h3 className="font-poppins text-lg font-medium mb-4">Delivery</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              UK Evri Standard Delivery: £3.95, free on orders over £50
              <br />
              Islands & Highlands Evri Standard Delivery: £6.95, free on orders
              over £80
              <br />
              EU DHL Standard Delivery: £19.99
              <br />
              Please note, we're temporarily unable to ship orders to Spain,
              Italy, or Greece - we apologise for any inconvenience.
            </p>
            <button className="font-poppins bg-gray-900 text-white border-none rounded-full py-2.5 px-6 text-sm font-medium cursor-pointer mt-6 transition-opacity hover:opacity-80">
              Find out more
            </button>
          </div>
          <div className="flex-1">
            <h3 className="font-poppins text-lg font-medium mb-4">Returns</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Returns accepted; you have 28 days from receipt of your order to
              return an unwanted item to us for a full refund. All other terms
              and conditions related to returns and refunds apply.
            </p>
            <button className="font-poppins bg-gray-900 text-white border-none rounded-full py-2.5 px-6 text-sm font-medium cursor-pointer mt-6 transition-opacity hover:opacity-80">
              Find out more
            </button>
          </div>
          <div className="flex-1">
            <h3 className="font-poppins text-lg font-medium mb-4">Security</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              At Velora we understand that your online security is of paramount
              concern. We are committed to providing a secure online shopping
              environment that goes above and beyond industry security standards
              and guidelines through our payments service provider.
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      // Main container: full width on mobile, max-width on larger screens. Reduced padding on mobile.
      <div className="w-full max-w-6xl mx-auto mt-5 p-4 md:p-5">
        <h3 className="font-semibold text-3xl md:text-4xl p-4">Your cart</h3>
        <p className="p-4 font-overpass">
          Spend an extra £12 to get FREE Standard UK Shipping
        </p>

        <div className="hidden md:grid grid-cols-3 font-normal text-sm text-gray-600 w-full mt-10 p-5">
          <p>Product</p>
          <p className="text-center">Quantity</p>
          <p className="text-right">Total</p>
        </div>
        <hr className="hidden md:block w-full mx-auto border-b border-gray-200"></hr>

        {state.products.map((p) => (
          <div
            className="flex flex-col md:flex-row justify-between items-center p-5 border-b"
            key={p.id}
          >
            <div className="flex items-center w-full md:w-2/5 mb-4 md:mb-0">
              <img
                src={p.image}
                alt={p.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="ml-4">
                <p className="font-semibold">{p.title}</p>
                <p className="text-gray-600">${p.price}</p>
              </div>
            </div>

            {/* Quantity box */}
            <div className="flex justify-between items-center w-full md:w-auto md:justify-center mb-4 md:mb-0">
              <span className="md:hidden font-semibold text-gray-700">
                Quantity
              </span>
              <div className="flex items-center">
                <div className="flex items-center justify-between w-28 p-2 ml-4 border border-gray-700 rounded-full">
                  <button
                    className="text-xl text-gray-600 px-2 leading-none cursor-pointer transition-colors hover:text-gray-900"
                    aria-label="Decrease quantity"
                    onClick={() => dispatch(decreaseQuantity(p.id))}
                  >
                    -
                  </button>
                  <p className="text-base font-medium text-gray-900 select-none">
                    {p.quantity}
                  </p>
                  <button
                    className="text-xl text-gray-600 px-2 leading-none cursor-pointer transition-colors hover:text-gray-900"
                    aria-label="Increase quantity"
                    onClick={() => dispatch(increaseQuantity(p.id))}
                  >
                    +
                  </button>
                </div>
                <button
                  className="ml-4 cursor-pointer"
                  onClick={() => dispatch(removeFromCart(p.id))}
                >
                  <BinIcon className="h-6 w-6 text-gray-500 hover:text-red-500" />
                </button>
              </div>
            </div>

            {/* Total box */}
            <div className="flex justify-between items-center w-full md:w-1/4 md:justify-end">
              <span className="md:hidden font-semibold text-gray-700">
                Total
              </span>
              <p className="font-semibold">
                ${(p.quantity * p.price).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
        <hr className="w-full mx-auto border-b border-gray-200"></hr>

        {/* Total Section */}
        <div className="flex flex-col items-end w-full p-5">
          <p className="text-xl">Estimated total: ${grandTotal.toFixed(2)}</p>
          <p className="text-right text-sm text-gray-500 mt-2">
            Tax included and shipping calculated at checkout.
          </p>
        </div>

        <div className="flex justify-end w-full p-1">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <button className="w-full p-3 rounded-full text-white bg-black cursor-pointer hover:bg-gray-800">
              Checkout
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-10 text-left pt-12 mt-12 border-t border-gray-200">
          <div className="flex-1">
            <h3 className="font-poppins text-lg font-medium mb-4">Delivery</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              UK Evri Standard Delivery: £3.95, free on orders over £50
              <br />
              Islands & Highlands Evri Standard Delivery: £6.95, free on orders
              over £80
              <br />
              EU DHL Standard Delivery: £19.99
            </p>
            <button className="font-poppins bg-gray-900 text-white border-none rounded-full py-2.5 px-6 text-sm font-medium cursor-pointer mt-6 transition-opacity hover:opacity-80">
              Find out more
            </button>
          </div>
          <div className="flex-1">
            <h3 className="font-poppins text-lg font-medium mb-4">Returns</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Returns accepted; you have 28 days from receipt of your order to
              return an unwanted item to us for a full refund.
            </p>
            <button className="font-poppins bg-gray-900 text-white border-none rounded-full py-2.5 px-6 text-sm font-medium cursor-pointer mt-6 transition-opacity hover:opacity-80">
              Find out more
            </button>
          </div>
          <div className="flex-1">
            <h3 className="font-poppins text-lg font-medium mb-4">Security</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              We are committed to providing a secure online shopping environment
              that goes above and beyond industry security standards.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;

type IconProps = {
  className?: string; // className is an optional string
};

const BinIcon = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Bin body */}
    <rect x="6" y="7" width="12" height="13" rx="2" />
    {/* Lid */}
    <path d="M4 7h16" />
    <path d="M9 7V5h6v2" />
    {/* Inner lines */}
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);
