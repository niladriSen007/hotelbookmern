import { HotelFormData } from "@/types/hotelFormData";
import { useFormContext } from "react-hook-form";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>();

  return (
    <div className="flex flex-col gap-2 my-8 ">
      <label className="font-semibold px-2">Choose hotel images</label>
      <input
        type="file"
        multiple
        accept="image/*"
        className=" mx-2 pl-[520px] py-12 rounded-xl border-2 border-dotted focus:bg-transparent mb-2"
        {...register("imageFiles", {
          validate: (imgFiles) => {
            const totalImages = imgFiles?.length;

            if (totalImages === 0) {
              return "At least one image should be added";
            }

            if (totalImages > 6) {
              return "Total number of images cannot be more than 6";
            }

            return true;
          },
        })}
      ></input>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};
export default ImagesSection;
