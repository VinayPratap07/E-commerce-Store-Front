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
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="">
      {/*Main box */}

      <div className="grid grid-flow-col grid-cols-2 gap-4  w-full p-10">
        {/*First box*/}
        <div className="flex">
          <div className="w-1/4 h-full">
            {product?.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`product-${index}`}
                className="w-30 h-30 object-cover rounded border m-4"
              />
            ))}
          </div>
          <div className="flex justify-center items-center w-3/4 h-full mx-auto">
            <img
              className="cover"
              src={product?.thumbnail}
              alt={product?.title}
            />
          </div>
        </div>

        {/*2nd box*/}
        <div className="  p-5">
          <div className="w-4/5 ">
            <p className="flex justify-start text-[#111827] pl-4 text-md font-semibold mt-2 ">
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
            <div className="flex justify-between item-center border rounded-2xl w-1/2 p-3 ml-4 mb-5  font-semibold text-xl ">
              <p>Discount</p>
              <p className="">{`${product?.discountPercentage}%`}</p>
            </div>
            <div className="flex">
              {/*Quantity*/}
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
              {/*Add to cart button*/}
              <button
                type="submit"
                className="w-1/3 p-2 ml-4 bg-black rounded-4xl text-[#f7f3f7] cursor-pointer"
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

      {/*Customer review section*/}
      <div className=" border w-3/4 mx-auto h-100 mt-10 ">
        <h3 className="text-2xl font-semibold ml-10 mt-10 pb-3 w-8/9 border-b border-gray-200 ">
          Customer Reviews
        </h3>
        <p className="flex justify-start text-[#111827] pl-4 text-md font-semibold mt-2 ">
          {[...Array(5)].map((_, index) => (
            <StarIcon
              key={index}
              className="h-5 w-5"
              filled={index < (product?.rating ?? 0)}
            />
          ))}
        </p>
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
