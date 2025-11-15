import { useQueries } from "@tanstack/react-query";
import { productByCategory } from "../../API/ApiCall";
import Card from "../Card/Card";
import HeroImage from "../HeroImage/HeroImage";
import { NavLink } from "react-router-dom";
import CommitmentSection from "../OurCommitment/Commitment";
import { productApi } from "../../API/ApiCall";
import type { productType } from "../../API/ApiResponse";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";

async function getSpecialProduct(category: string) {
  const res = await productByCategory(category);
  return res;
}

async function fetchProduct() {
  const res = await productApi();
  return res.products;
}

function Home() {
  const results = useQueries({
    queries: [
      {
        queryKey: ["specialProduct", "womens-bags"],
        queryFn: () => getSpecialProduct("womens-bags"),
      },
      {
        queryKey: ["specialProduct", "mens-watches"],
        queryFn: () => getSpecialProduct("mens-watches"),
      },
      {
        queryKey: ["CardProducts"],
        queryFn: () => fetchProduct(),
      },
    ],
  });
  const [womensBagsQuery, mensWatchesQuery, cardProductsQuery] = results;

  if (womensBagsQuery.isLoading || mensWatchesQuery.isLoading)
    return <Loader />;
  if (womensBagsQuery.error || mensWatchesQuery.error) return <Error />;

  const products = cardProductsQuery.data || [];

  return (
    <div className="w-full">
      <HeroImage />
      <div className="flex flex-wrap justify-center content-center w-full p-5 bg-[#fefeff]">
        <h2 className="font-Epunda4 tracking-wide m-2 text-3xl font-semibold">
          You'll love
        </h2>
        <div className=" flex items-end space-x-4 overflow-x-auto scrollbar-hide w-full h-89 p-5 scrollbar-hide">
          {products
            .filter((product: productType) => product.category !== "groceries")
            .map((product: productType) => (
              <Card key={product.id} {...product} />
            ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center w-full h-auto py-12 px-4 gap-8">
        <div className="flex flex-col justify-center items-center w-full sm:w-2/3 md:w-5/12 lg:w-1/3 p-5 rounded-xl shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
          <img
            src={mensWatchesQuery.data.products[0].thumbnail}
            className="max-w-full h-auto"
            alt={mensWatchesQuery.data.products[0].title}
          />
          <p className="w-full font-textFont font-semibold text-2xl md:text-3xl text-center mt-6">
            {mensWatchesQuery.data.products[0].title}
          </p>
          <div className="w-full text-center mt-4">
            <NavLink to={`${mensWatchesQuery.data.products[0].id}`}>
              <button className="w-1/2 sm:w-2/5 lg:w-1/3 p-3 rounded-full text-white bg-black cursor-pointer">
                Checkout
              </button>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full sm:w-2/3 md:w-5/12 lg:w-1/3 p-5 rounded-xl shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl">
          <img
            src={womensBagsQuery.data.products[0].thumbnail}
            className="max-w-full h-auto"
            alt={womensBagsQuery.data.products[0].title}
          />
          <p className="w-full font-semibold text-2xl md:text-3xl text-center mt-6">
            {womensBagsQuery.data.products[0].title}
          </p>
          <div className="w-full text-center mt-4">
            <NavLink to={`${womensBagsQuery.data.products[0].id}`}>
              <button className="w-1/2 sm:w-2/5 lg:w-1/3 p-3 rounded-full text-white bg-black cursor-pointer">
                Checkout
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <CommitmentSection />
    </div>
  );
}

export default Home;
