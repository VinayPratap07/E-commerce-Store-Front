import { heroImageApi } from "../../API/ApiCall";

async function HeroImage() {
  const images = await heroImageApi();
  console.log(images);
  return (
    <div className="w-full h-150">
      <img
        src="/your-image.jpg"
        alt="Hero"
        className="w-full h-150 object-cover rounded-2xl shadow-lg"
      />
    </div>
  );
}

export default HeroImage;
