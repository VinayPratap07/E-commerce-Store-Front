import { useQuery } from "@tanstack/react-query";
import { productApi } from "../../API/ApiCall";
import type { productType } from "../../API/ApiResponse";
import { addToCart } from "../../Slices/CartSlice.ts";
import { useDispatch } from "react-redux";

async function fetchProduct() {
  const res = await productApi();
  console.log(res.products);
  return res.products;
}

function Card() {
  const dispatch = useDispatch();

  const addToCartHandler = (productId: number) => {
    dispatch(addToCart(productId));
  };

  const {
    isLoading,
    error,
    data: products,
  } = useQuery<productType[]>({
    queryKey: ["product"],
    queryFn: fetchProduct,
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <>
      {/*Do Fonts*/}
      {products
        ?.filter((product) => product.category !== "groceries")
        .map((product) => (
          <div
            className=" flex-shrink-0 rounded-lg w-64 h-full p-0 m-2  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100"
            key={product.id}
          >
            <img
              className="w-full h-2/3 object-contain py-2 rounded-lg"
              src={product.thumbnail}
              alt="Product"
            />
            <div className=" text-center w-full p-2 ">
              <p className=" text-[#111827] text-lg font-semibold mt-2 ">
                {product.title}
              </p>
              <p className="flex justify-center text-[#111827] text-md font-semibold mt-2 ">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className="h-5 w-5"
                    filled={index < product.rating}
                  />
                ))}
              </p>
              <p className="text-[#111827] text-md mt-2 font-normal">
                {`$${product.price}`}
              </p>
            </div>
            <button
              className="border"
              onClick={() => addToCartHandler(product.id)}
            >
              Cart
            </button>
          </div>
        ))}
    </>
  );
}

export default Card;

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
