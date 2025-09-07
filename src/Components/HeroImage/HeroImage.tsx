import { useQuery } from "@tanstack/react-query";
import { heroImageApi } from "../../API/ApiCall";

async function fetchImage() {
  const images = await heroImageApi();
  console.log(images);
  return images;
}

function HeroImage() {
  const {
    isLoading,
    error,
    data: Images,
  } = useQuery({
    queryKey: ["HeroImage"],
    queryFn: fetchImage,
    staleTime: 10000,
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
    <div className="relative w-full h-170 shadow-lg">
      <img
        src={Images[0].urls.full}
        alt="Hero"
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-10">
        <h1 className="textFont text-4xl md:text-5xl font-bold text-[#f5f2f1]">
          The Bear Hug Hamper
        </h1>
        <p className="textFont mt-2 text-lg text-[#f5f2f1]">
          Jellycat x Cowshed
        </p>
        <p className="textFont mt-1 text-[#f5f2f1]">
          For first cuddles and endless memories.
        </p>
        <button className="textFont mt-5 px-6 py-2 rounded-full bg-white text-black font-semibold shadow">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default HeroImage;
