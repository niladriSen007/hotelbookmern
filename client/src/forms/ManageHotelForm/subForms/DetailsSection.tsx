import { HotelFormData } from "@/types/hotelFormData";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-2 text-white  ">
      {/* <h1 className="text-3xl font-bold mb-3">Add Hotel</h1> */}
      <label className="font-semibold px-2">Hotel Name</label>
      <input
        type="text"
        className="p-2 mx-2 rounded-xl bg-slate-700 focus:bg-transparent mb-2"
        {...register("name", { required: "This field is required" })}
      ></input>
      {errors.name && (
        <span className="text-red-500">{errors.name.message}</span>
      )}

      <div className="flex gap-4 items-center justify-between mb-2 ">
        <div className="flex flex-col gap-2 flex-1 pb-2 px-2">
          <label className="font-semibold">City</label>
          <input
            type="text"
            className="p-2 rounded-xl bg-slate-700 focus:bg-transparent"
            {...register("city", { required: "This field is required" })}
          ></input>
          {errors.city && (
            <span className="text-red-500">{errors.city.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-2  flex-1 pb-2 px-2">
          <label className="font-semibold">
            Country
          </label>
          <input
            type="text"
            className="p-2 rounded-xl bg-slate-700 focus:bg-transparent"
            {...register("country", { required: "This field is required" })}
          ></input>
          {errors.country && (
            <span className="text-red-500">{errors.country.message}</span>
          )}
        </div>
      </div>
      <label className="font-semibold px-2">
        Description
      </label>
      <textarea
        rows={10}
        className="p-2 rounded-xl bg-slate-700 focus:bg-transparent mx-2"
        {...register("description", { required: "This field is required" })}
      ></textarea>
      {errors.description && (
        <span className="text-red-500">{errors.description.message}</span>
      )}
      <label className="font-semibold px-2">
        Price Per Night
      </label>
      <input
        type="number"
        min={500}
        className="p-2 rounded-xl bg-slate-700 focus:bg-transparent mx-2"
        {...register("pricePerNight", { required: "This field is required" })}
      ></input>
      {errors.pricePerNight && (
        <span className="text-red-500">{errors.pricePerNight.message}</span>
      )}
      <label className="font-semibold px-2">
        Star Rating
      </label>
      <select
        {...register("starRating", {
          required: "This field is required",
        })}
        className="p-2 rounded-xl bg-slate-700 focus:bg-transparent mx-2 mb-2 focus:border"
      >
        <option value="" className="p-2 rounded-xl bg-slate-800 focus:bg-slate-900 text-white">
          Select as Rating
        </option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option value={num} className="p-2 rounded-xl bg-slate-800 focus:bg-transparent text-white">{num}</option>
        ))}
      </select>
      {errors.starRating && (
        <span className="text-red-500">{errors.starRating.message}</span>
      )}
    </div>
  );
};
export default DetailsSection;
