import React from "react";
import FetchData from "../components/FetchData";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Products() {
  const data = FetchData();
  // console.log(data);

  return (
    <div className="flex gap-y-6 flex-wrap justify-center mt-3 mb-5 p-4">
  {data.length > 0 &&
    data.map((item) => (
      <div key={item.id} className="mx-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-3 rounded-lg bg-[#181818] shadow-lg">
        <Link to={`/products/${item.id}`}>
          <div>
            <div className="border-b border-yellow-500 my-2">
              <img
                className="hover-image hover:ease-in-out hover:duration-500"
                src={item.image1}
                alt={item.title}
              />
            </div>

            <div className="text-gray-300 font-semibold text-md mx-2">
              {item.title.length > 30 ? `${item.title.substr(0, 30)}...` : item.title}
            </div>
            <div className="mx-2 text-yellow-500 text-lg font-bold">${item.price}</div>
            <div className="flex justify-between items-center my-2 text-yellow-600">
              <div className="text-white rounded-xl px-4 py-1 bg-yellow-600 cursor-pointer hover:opacity-75">
                Add to Cart
              </div>
              <AiOutlineShoppingCart size={25} />
            </div>
          </div>
        </Link>
      </div>
    ))}
</div>

  );
}
