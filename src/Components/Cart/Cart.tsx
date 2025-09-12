import { useDispatch, useSelector } from "react-redux";
import { createCart } from "../../API/ApiCall";
import type { RootState } from "../../Store/Store";
import { addCartId } from "../../Slices/CartSlice";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

async function creatingCart() {
  let res = await createCart();
  return res;
}

function Cart() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.cart);

  const createCartMutation = useMutation({
    mutationFn: creatingCart,
    onSuccess: (data) => {
      console.log("Cart created successfully:", data);
      dispatch(addCartId(data.id));
    },
    onError: (error) => {
      console.error("Failed to create cart:", error);
    },
  });

  useEffect(() => {
    if (
      state.cartId === null &&
      state.products.length > 0 &&
      !createCartMutation.isPending
    ) {
      console.log("Creating a new cart...");
      createCartMutation.mutate();
    }
  }, [state.cartId, state.products, createCartMutation.isPending]);

  if (state.products.length === 0) {
    return (
      <div className=" font-inter text-gray-900 p-8 md:p-16 text-center">
        {/* === MAIN "EMPTY CART" SECTION === */}
        <div className="py-16">
          <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
            Your cart is empty
          </h1>
          <button className="font-poppins bg-gray-900 text-white border-none rounded-full py-3 px-8 text-base font-medium cursor-pointer transition-opacity hover:opacity-80">
            Continue shopping
          </button>
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
      <div className="border max-w-3/4 mx-auto mt-5 p-5">
        <h3 className="font-semibold text-4xl p-4">Your cart</h3>
        <p className="p-4 font-overpass">
          Spend an extra £12 to get FREE Standard UK Shipping
        </p>
        <div className=" grid grid-cols-3 font-normal text-sm text-gray-600 w-full mt-10 p-5">
          <p className="">Product</p>
          <p className=" text-end pr-5">Quantity</p>
          <p className=" text-end ">Total</p>
        </div>
        <hr className="w-340 mx-auto border-b border-gray-200 "></hr>
        <div className="flex flex-wrap justify-center p-4">
          <div className="border w-2/5 h-50"></div>
          <div className="border w-7/20 h-50"></div>
          <div className="border w-1/4 h-50"></div>
        </div>
      </div>
    );
  }
}

export default Cart;
