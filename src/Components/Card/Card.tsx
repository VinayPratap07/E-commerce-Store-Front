function Card() {
  return (
    <div className="flex flex-wrap justify-center rounded-lg w-2xs h-100 p-0 m-5 shadow-lg hover:shadow-xl/20 transition delay-10 duration-300 ease hover:-translate-y-1 hover:scale-100">
      <img
        className="w-full object-cover py-2 rounded-lg"
        src="../public/Product.png"
        alt="Product"
      />
      <div className="grid grid-cols-2 w-full p-2">
        <p className="text-[#111827] font-semibold text-xl">Shampoo</p>
        <button className="w-10 h-10 ml-17 border border-[#6B7280] rounded-full font-bold text-[#FB7185] text-xl hover:text-white hover:bg-[#FB7185]">
          <i className="fa-regular fa-heart"></i>
        </button>
        <p className="text-[#111827] font-semibold text-xl">$999.00</p>
        <button className="w-10 h-10 ml-17 border border-[#6B7280] rounded-full font-bold text-[#6B7280] text-xl hover:bg-[#6B7280] hover:text-white">
          <i className="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
