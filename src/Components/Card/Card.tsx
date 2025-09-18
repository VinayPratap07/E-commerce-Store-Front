import { NavLink } from "react-router-dom";

type productsProps = {
  id: number;
  price: number;
  rating: number;
  reviews: [];
  thumbnail: string;
  title: string;
  category: string;
};

function Card({ id, title, thumbnail, rating, price }: productsProps) {
  return (
    <div className="relative flex-shrink-0 rounded-lg w-64 h-full p-0 m-2 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-100">
      <NavLink to={`/${id}`}>
        <img
          className="w-full h-2/3 object-contain py-2 rounded-lg"
          src={thumbnail}
          alt={title}
        />
        <div className="text-center w-full p-2">
          <p className="text-[#111827] text-lg font-semibold mt-2">{title}</p>
          <p className="flex justify-center text-[#111827] text-md font-semibold mt-2">
            {[...Array(5)].map((_, index) => (
              <StarIcon key={index} filled={index < rating} />
            ))}
          </p>
          <p className="text-[#111827] text-md mt-2 font-normal">{`$${price}`}</p>
        </div>
      </NavLink>
    </div>
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
    className={`w-[1em] h-[1em] ${className} ${
      filled ? "text-black" : "text-[#b2b2b2]"
    }`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);
