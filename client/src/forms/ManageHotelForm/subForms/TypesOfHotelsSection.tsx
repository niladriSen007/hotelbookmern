import { hotelTypes } from "@/config/hotel-types-config";
import { HotelFormData } from "@/types/hotelFormData";
import { useFormContext } from "react-hook-form";

const TypesOfHotelsSection = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  const typeWatch = watch("type");
  console.log(typeWatch)

  return (
    <div className="px-3 my-6">
      <h2 className=" font-bold pb-3">Type</h2>
      <div className="grid grid-cols-5 gap-4">
        {hotelTypes?.map((type) => (
          <label
            className={` ${typeWatch === type ? "bg-blue-800" : "bg-transparent"} border  rounded-full text-center py-1 backdrop-blur-xl cursor-pointer hover:bg-blue-800 transition-all duration-300`}
          >
            <input
              type="radio"
              value={type}
              {...register("type", {
                required: "This field is required",
              })}
              className="hidden"
            />
            <span>{type}</span>
          </label>
        ))}
      </div>
      {errors.type && (
        <span className="text-red-500 text-sm font-bold">
          {errors.type.message}
        </span>
      )}
    </div>
  );
};
export default TypesOfHotelsSection;
