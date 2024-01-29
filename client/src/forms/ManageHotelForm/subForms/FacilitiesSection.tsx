import { hotelFacilities } from "@/config/hotel-types-config";
import { HotelFormData } from "@/types/hotelFormData";
import { useFormContext } from "react-hook-form";

const FacilitiesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="px-3 my-8">
      <h2 className=" font-bold text-base pb-3">Facilities</h2>
      <div className="grid grid-cols-5 gap-4">
        {hotelFacilities?.map((facility) => (
          <label
          // className={` ${typeWatch === type ? "bg-blue-800" : "bg-transparent"} border  rounded-full text-center py-1 backdrop-blur-xl cursor-pointer hover:bg-blue-800 transition-all duration-300`}
          >
            <input
              type="checkbox"
              value={facility}
              {...register("facilities", {
                validate: (facilities) => {
                  if (facilities && facilities.length > 0) {
                    return true;
                  } else {
                    return "At least one facility is required";
                  }
                },
              })}
              className="mr-2"
            />
            <span>{facility}</span>
          </label>
        ))}
      </div>
      {errors.facilities && (
        <span className="text-red-500 text-sm font-bold">
          {errors.facilities.message}
        </span>
      )}
    </div>
  );
};
export default FacilitiesSection;
