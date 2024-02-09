import { getMyHotels } from "@/api/authApi";
import Loading from "@/components/Loading";
// import MyHotel from "@/components/shared/MyHotel";
const MyHotel = lazy(() => import("@/components/shared/MyHotel"));
import { HotelFormData } from "@/types/hotelFormData";
import { useQuery } from "@tanstack/react-query";
import { lazy } from "react";
// #B7BEC2

const MyHotels = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: getMyHotels,
  });
  console.log(data);

  return (
    <div className="py-12 overflow-x-hidden bg-gradient-to-b from-slate-950 to-[#0939aa]  px-40 min-h-screen ">
      {isLoading ? (
       <div className="flex items-center justify-center w-screen h-screen">
         <Loading />
       </div>
      ) : (
        <>
        <h2 className="pb-8 text-3xl font-black text-white">My Hotels</h2>
          <div className="grid grid-cols-3 gap-14 ">
            {data?.map((hotel: HotelFormData) => (
              <div
                className="duration-300 shadow-2xl rounded-xl "
              >
                <MyHotel {...{ hotel }} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default MyHotels;
