import { useQueries } from "@tanstack/react-query";
import { productByCategory } from "../../API/ApiCall";
import Card from "../Card/Card";
import HeroImage from "../HeroImage/HeroImage";
import { NavLink } from "react-router-dom";
import CommitmentSection from "../OurCommitment/Commitment";
import { productApi } from "../../API/ApiCall";
import type { productType } from "../../API/ApiResponse";

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
    return <p>Loading...</p>;
  if (womensBagsQuery.error || mensWatchesQuery.error)
    return <p>Error loading products</p>;

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

      {/*Specials Section */}
      <div className="flex flex-wrap justify-center items-center w-full h-130 ">
        {/*Specials Section 1*/}
        <div className="flex flex-wrap justify-center content-center  w-1/3 h-9/10 p-5 mr-4 rounded-xl shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl">
          <img src={mensWatchesQuery.data.products[0].thumbnail} className="" />
          <p className="w-full font-textFont font-semibold text-3xl text-center ">
            {mensWatchesQuery.data.products[0].title}
          </p>
          <NavLink
            to={`/${mensWatchesQuery.data.products[0].id}`}
            className="w-full text-center mt-4"
          >
            <button className="w-1/5 p-3 rounded-4xl text-white bg-black cursor-pointer">
              Checkout
            </button>
          </NavLink>
        </div>

        {/*Specials Section 2*/}
        <div className="flex flex-wrap justify-center content-center  w-1/3 h-9/10 p-5 mr-4 rounded-xl shadow-xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:shadow-2xl">
          <img src={womensBagsQuery.data.products[0].thumbnail} className="" />
          <p className="w-full font-semibold text-3xl text-center ">
            {womensBagsQuery.data.products[0].title}
          </p>
          <NavLink
            to={`/${womensBagsQuery.data.products[0].id}`}
            className="w-full text-center mt-4"
          >
            <button className="w-1/5 p-3 rounded-4xl text-white bg-black cursor-pointer">
              Checkout
            </button>
          </NavLink>
        </div>
      </div>
      <CommitmentSection />
    </div>
  );
}

export default Home;
