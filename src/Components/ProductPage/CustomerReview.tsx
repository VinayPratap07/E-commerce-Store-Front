import React, { useState } from "react";

// --- ICONS ---
// Re-using the StarIcon you provided
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

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const CheckIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// --- MOCK DATA ---
// In a real app, this data would come from your props or an API.
const reviewSummary = {
  averageRating: 4.5,
  totalReviews: 2,
  ratingBreakdown: [
    { star: 5, percentage: 50 },
    { star: 4, percentage: 50 },
    { star: 3, percentage: 0 },
    { star: 2, percentage: 0 },
    { star: 1, percentage: 0 },
  ],
};

const reviews = [
  {
    id: 1,
    author: "Debra R.",
    isVerified: true,
    rating: 5,
    date: "16 days ago",
    text: "Love this fragrance. I use all year round, not just winter",
    reply: {
      author: "Velora",
      date: "9 days ago",
      text: "Hi Debra, Thanks for taking the time to review. We're so glad you love it!",
    },
  },
  {
    id: 2,
    author: "Alex T.",
    isVerified: true,
    rating: 4,
    date: "20 days ago",
    text: "Great product, fast shipping. The packaging was also very high quality. Will definitely shop here again.",
    reply: null,
  },
];
// --- END MOCK DATA ---

// --- RATING STARS COMPONENT ---
// A helper component to render a row of stars
const RatingStars = ({ rating }) => (
  <div className="flex text-lg">
    {[...Array(5)].map((_, index) => (
      <StarIcon key={index} filled={index < rating} />
    ))}
  </div>
);

// --- MAIN CUSTOMER REVIEWS COMPONENT ---
function CustomerReviews() {
  return (
    <div className="font-inter bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto">
        {/* === 1. TOP SUMMARY SECTION === */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12">
          {/* Left Side: Overall Rating */}
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-0">
            <span className="text-4xl md:text-5xl font-bold font-poppins">
              {reviewSummary.averageRating}
            </span>
            <div className="flex flex-col">
              <RatingStars rating={reviewSummary.averageRating} />
              <span className="text-sm text-gray-500 mt-1">
                Based on {reviewSummary.totalReviews} reviews
              </span>
            </div>
          </div>

          {/* Right Side: Rating Histogram */}
          <div className="w-full md:w-1/2 lg:w-1/3">
            {reviewSummary.ratingBreakdown
              .slice()
              .reverse()
              .map((item) => (
                <div
                  key={item.star}
                  className="flex items-center gap-2 text-sm mb-1"
                >
                  <span className="w-10 text-gray-600">{item.star}★</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full">
                    <div
                      style={{ width: `${item.percentage}%` }}
                      className="h-full bg-gray-900 rounded-full"
                    ></div>
                  </div>
                  <span className="w-8 text-right text-gray-500">
                    {item.percentage}%
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* === 2. REVIEWS HEADER & FILTERS === */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4 md:mb-0">
            Reviews{" "}
            <span className="text-gray-500 font-normal">
              {reviewSummary.totalReviews}
            </span>
          </h2>
          <button className="bg-gray-900 text-white font-poppins rounded-full py-2.5 px-6 text-sm font-medium transition-opacity hover:opacity-80">
            Write a review
          </button>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap gap-2 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search reviews"
              className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 rounded-full border border-transparent focus:outline-none focus:bg-white focus:border-gray-400"
            />
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>

          {/* Dropdown Filters */}
          <div className="relative">
            <select className="appearance-none text-sm bg-gray-100 rounded-full pl-4 pr-10 py-2 border border-transparent cursor-pointer focus:outline-none focus:bg-white focus:border-gray-400">
              <option>Most relevant</option>
              <option>Newest</option>
              <option>Highest rating</option>
              <option>Lowest rating</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select className="appearance-none text-sm bg-gray-100 rounded-full pl-4 pr-10 py-2 border border-transparent cursor-pointer focus:outline-none focus:bg-white focus:border-gray-400">
              <option>All ratings</option>
              <option>5 stars</option>
              <option>4 stars</option>
              <option>3 stars</option>
              <option>2 stars</option>
              <option>1 star</option>
            </select>
            <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
          <button className="text-sm bg-gray-100 rounded-full px-4 py-2 border border-transparent hover:bg-white hover:border-gray-400 focus:outline-none">
            With media
          </button>
        </div>

        {/* === 3. INDIVIDUAL REVIEW LIST === */}
        <div className="space-y-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <div className="flex justify-between items-center mb-2">
                <RatingStars rating={review.rating} />
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h4 className="font-poppins font-medium">{review.author}</h4>
                {review.isVerified && (
                  <span className="flex items-center gap-1 text-xs text-green-600">
                    <CheckIcon className="h-4 w-4" /> Verified buyer
                  </span>
                )}
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {review.text}
              </p>

              {/* Company Reply */}
              {review.reply && (
                <div className="ml-4 md:ml-8 p-4 bg-gray-100 rounded-lg">
                  <p className="font-poppins font-medium text-gray-800">
                    {review.reply.author}{" "}
                    <span className="text-gray-500 font-normal text-sm">
                      replied {review.reply.date}
                    </span>
                  </p>
                  <p className="text-gray-600 mt-1">{review.reply.text}</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
