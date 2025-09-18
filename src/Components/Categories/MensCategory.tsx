import { useState } from "react";

function MensCategory() {
  const [sortOption, setSortOption] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
  };
  return (
    <div className="border h-100 w-8/10 p-5 mx-auto">
      <h2 className="font-semibold text-4xl">Best in Men's</h2>
      <div className="relative w-full max-w-xs font-inter ">
        <label htmlFor="sortBy" className="sr-only">
          Sort By
        </label>
        <select
          id="sortBy"
          value={sortOption}
          className="appearance-none block w-full bg-transparent p-2 pr-8 text-base text-gray-900 
                   focus:outline-none"
        >
          {/* The first option acts as the placeholder label */}
          <option value="" disabled>
            Sort by
          </option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
          <option value="rating">Top Rated</option>
        </select>

        {/* This is the custom arrow, positioned absolutely on the right side. */}
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <ChevronDownIcon className="h-5 w-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default MensCategory;

const ChevronDownIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);
