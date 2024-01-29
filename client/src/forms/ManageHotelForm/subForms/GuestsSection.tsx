import { HotelFormData } from "@/types/hotelFormData";
import { useFormContext } from "react-hook-form";

const GuestsSection = () => {

    const {
        register,
        formState: { errors },
      } = useFormContext<HotelFormData>();

  return (
    <div className="px-3">
    <h2 className=" font-bold pb-3">Guests</h2>
    <div className="grid grid-cols-2 backdrop-blur-xl border border-dashed p-2 shadow-2xl rounded-md gap-5 ">
        <div className="flex flex-col gap-2 flex-1 pb-2 px-2">

      <label className=" text-sm font-semibold">
        Adults
        </label>
        <input
          className="p-2 rounded-xl bg-slate-700 focus:bg-transparent"
          type="number"
          min={1}
          {...register("adultCount", {
              required: "This field is required",
            })}
            />
        {errors.adultCount?.message && (
            <span className="text-red-500 text-sm fold-bold">
            {errors.adultCount?.message}
          </span>
        )}
        </div>
        <div className="flex flex-col gap-2 flex-1 pb-2 px-2">

      <label className=" text-sm font-semibold">
        Children
        </label>
        <input
          className="p-2 rounded-xl bg-slate-700 focus:bg-transparent"
          type="number"
          min={0}
          {...register("childCount", {
              required: "This field is required",
            })}
            />
        {errors.childCount?.message && (
            <span className="text-red-500 text-sm fold-bold">
            {errors.childCount?.message}
          </span>
        )}
        </div>
    </div>
  </div>
  )
}
export default GuestsSection