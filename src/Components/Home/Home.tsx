import Card from "../Card/Card";
import HeroImage from "../HeroImage/HeroImage";

function Home() {
  return (
    <div className="w-full">
      <HeroImage />
      <div className="flex flex-wrap justify-center items-center w-full h-130 bg-[#fefeff]">
        <h2 className="text-3xl font-semibold">You'll love</h2>
        <div className=" flex items-end space-x-4 overflow-x-auto scrollbar-hide w-full h-89 p-5 scrollbar-hide">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Home;
