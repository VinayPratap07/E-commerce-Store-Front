function Error() {
  return (
    <div className="flex flex-wrap justify-center content-center text-center w-full h-100 ">
      <h2 className="font-poppins text-2xl w-full font-bold text-gray-900 mb-2">
        Something went wrong
      </h2>
      <p className="text-gray-600 mb-6 w-full">
        "We couldn't load the data. Please try again."
      </p>
      <button
        onClick={() => window.location.reload()}
        className="font-poppins bg-gray-900 text-white border-none rounded-full py-3 px-8 text-base font-medium cursor-pointer transition-opacity hover:opacity-80"
      >
        Try Again
      </button>
    </div>
  );
}
export default Error;
