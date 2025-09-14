function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex items-center justify-center space-x-2">
        <div className="w-3 h-3 bg-gray-900 rounded-full animate-pulse"></div>
        <div className="w-3 h-3 bg-gray-900 rounded-full animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-3 h-3 bg-gray-900 rounded-full animate-pulse [animation-delay:0.4s]"></div>
      </div>
    </div>
  );
}
export default Loader;
