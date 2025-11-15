import { useQuery } from "@tanstack/react-query";
import { productById } from "../../API/ApiCall";
import { useParams } from "react-router-dom";
import type { productType } from "../../API/ApiResponse";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../Slices/CartSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { RootState } from "../../Store/Store.ts";
import Loader from "../Loader/Loader.tsx";
import Error from "../Error/Error.tsx";
import CustomerReviews from "./CustomerReview.tsx";

function Page() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { products } = useSelector((state: RootState) => state.cart);

  async function fetchProductById() {
    const res = await productById(id as string);
    console.log(res);
    return res;
  }

  const {
    isLoading,
    error,
    data: product,
  } = useQuery<productType>({
    queryKey: ["product", id],
    queryFn: fetchProductById,
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        productId: product?.id,
        productQuantity: quantity,
        productImage: product?.thumbnail,
        productPrice: product?.price,
        productTitle: product?.title,
      })
    );
  };
  useEffect(() => {
    const existingProduct = products.find((p) => p.id === product?.id);
    if (existingProduct) {
      setQuantity(existingProduct.quantity);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-flow-col gap-4 w-full p-4 md:p-10">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4 lg:h-full order-2 lg:order-1 flex flex-row lg:flex-col gap-x-4 overflow-x-auto">
            {product?.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`product-${index}`}
                className="w-24 h-24 lg:w-30 lg:h-30 object-cover rounded border m-2 lg:m-4 flex-shrink-0"
              />
            ))}
          </div>
          <div className="flex justify-center items-center w-full lg:w-3/4 h-full mx-auto order-1 lg:order-2">
            <img
              className="cover rounded-lg"
              src={product?.thumbnail}
              alt={product?.title}
            />
          </div>
        </div>

        <div className="p-0 md:p-5">
          <div className="w-full lg:w-4/5">
            <p className="flex justify-start text-[#111827] pl-4 text-md font-semibold mt-2">
              {[...Array(5)].map((_, index) => (
                <StarIcon
                  key={index}
                  className="h-5 w-5"
                  filled={index < (product?.rating ?? 0)}
                />
              ))}
            </p>
            <h2 className="text-4xl font-semibold pl-4 p-3 mb-5">
              {product?.title}
            </h2>
            <p className="font-lg font-semibold pl-4 mb-5">{`$${product?.price}`}</p>
            <p className="font-lg pl-4 mb-5">{product?.description}</p>

            <div className="flex justify-between item-center border rounded-2xl w-full md:w-1/2 p-3 ml-4 mb-5 font-semibold text-xl">
              <p>Discount</p>
              <p>{`${product?.discountPercentage}%`}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center">
              {/* Quantity */}
              <div className="flex items-center justify-between w-28 p-2 ml-4 border border-gray-700 rounded-full">
                <button
                  onClick={() => {
                    if (quantity === 1) {
                      return;
                    } else {
                      setQuantity(quantity - 1);

                      dispatch(decreaseQuantity(product?.id));
                    }
                  }}
                  className="text-xl text-gray-600 px-2 leading-none cursor-pointer transition-colors hover:text-gray-900"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <p className="text-base font-medium text-gray-900 select-none">
                  {quantity}
                </p>
                <button
                  onClick={() => {
                    if (quantity === 10) {
                      return;
                    } else {
                      setQuantity(quantity + 1);

                      dispatch(increaseQuantity(product?.id));
                    }
                  }}
                  className="text-xl text-gray-600 px-2 leading-none cursor-pointer transition-colors hover:text-gray-900"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <button
                type="submit"
                className="w-full sm:w-1/3 p-2 ml-0 sm:ml-4 bg-black rounded-4xl text-[#f7f3f7] cursor-pointer"
                onClick={addToCartHandler}
              >
                {products.find((p) => p.id === product?.id)
                  ? "Added to cart"
                  : "Add to cart"}
              </button>
            </div>

            <h3 className="text-2xl font-semibold my-5 pl-4">
              Product details
            </h3>
            <ul className="text-base list-disc font-lg pl-8 mb-10">
              <li>{`Brand: ${product?.brand}`}</li>
              <li>{`Warranty: ${product?.warrantyInformation}`}</li>
              <li>{`Shipping: ${product?.shippingInformation}`}</li>
              <li>{`Availability: ${product?.availabilityStatus}`}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full text-center">
        <h1 className="text-4xl font-bold p-2 my-20">
          Honest Reviews From Our Happy Customers
        </h1>
        <CustomerReviews />
      </div>
    </div>
  );
}

export default Page;

const StarIcon = ({
  className,
  filled,
}: {
  className?: string;
  filled: boolean;
}) => (
  <svg
    className={`${className} ${filled ? "text-black" : "text-[#b2b2b2]"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
