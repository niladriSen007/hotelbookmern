import { HotelFormData } from "@/types/hotelFormData";
import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";

interface MyHotelProps {
  hotel: HotelFormData;
}

const MyHotel = ({ hotel }: MyHotelProps) => {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    const changeImage = setTimeout(() => {
      setImgIndex(imgIndex <= hotel?.imageUrls?.length - 2 ? imgIndex + 1 : 0);
    }, 3000);
    return () => {
      clearTimeout(changeImage);
    };
  }, [imgIndex]);

  return (
    <div className="flex flex-col text-white bg-gradient-to-b from-slate-950 to-[#171F34] px-2 py-6">
      <div className="relative px-2">
        <img
          src={hotel?.imageUrls[imgIndex]}
          alt="hotel"
          loading="lazy"
          className="object-cover w-full h-60 rounded-2xl rounded-t-xl"
        />
        <div className="absolute z-50 flex items-center justify-center w-20 gap-2 px-1.5 py-1 font-black text-center bg-blue-600 rounded-full shadow-xl top-4 right-4 ">
          <IoIosStar />{" "}
          <span className="">
            {hotel?.starRating}
            {".00"}
          </span>
        </div>
      </div>
      <div className="px-3 py-4">
        <h2 className="text-xl font-black">{hotel?.name}</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm font-thin">{hotel?.city},</span>
            <span className="text-sm font-thin">{hotel?.country}</span>
          </div>
          <p className="text-sm font-black">
            ${hotel?.pricePerNight}
            <span className="text-gray-400 ">/Night</span>
          </p>
        </div>
      </div>
      <button className="px-2 py-1 mx-2 my-2 text-white transition-all duration-500 bg-blue-600 rounded-lg hover:bg-blue-700 hover:font-bold ">
        View Details
      </button>
    </div>
  );
};
export default MyHotel;
