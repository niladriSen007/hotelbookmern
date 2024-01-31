import { HotelFormData } from "@/types/hotelFormData";
import { useForm, FormProvider } from "react-hook-form";
import DetailsSection from "./subForms/DetailsSection";
import TypesOfHotelsSection from "./subForms/TypesOfHotelsSection";
import FacilitiesSection from "./subForms/FacilitiesSection";
import GuestsSection from "./subForms/GuestsSection";
import ImagesSection from "./subForms/ImagesSection";

const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formDataJson : HotelFormData)=>{
    // console.log(formData)
    const formData = new FormData()

    formData.append("name", formDataJson.name);
    formData.append("city", formDataJson.city);
    formData.append("country", formDataJson.country);
    formData.append("description", formDataJson.description);
    formData.append("type", formDataJson.type);
    formData.append("pricePerNight", formDataJson.pricePerNight.toString());
    formData.append("starRating", formDataJson.starRating.toString());
    formData.append("adultCount", formDataJson.adultCount.toString());
    formData.append("childCount", formDataJson.childCount.toString());

    formDataJson.facilities.forEach((facility, index) => {
      formData.append(`facilities[${index}]`, facility);
    });

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formData.append(`imageFiles`, imageFile);
    });
    
  })
  
  return (
    <FormProvider {...formMethods}>
      <form className="bg-gradient-to-b from-slate-900 to-violet-950 p-6 rounded-lg shadow-2xl mx-64" onSubmit={onSubmit}>
        <DetailsSection />
        <TypesOfHotelsSection />
        <FacilitiesSection />
        <GuestsSection />
        <ImagesSection />
        <span className="flex justify-end mr-2">
          <button
            // disabled={true}
            type="submit"
            className="bg-violet-800 text-white px-6 py-2 font-bold hover:bg-violet-700 transition-all duration-300  rounded-md disabled:bg-gray-400"
          >
            Confirm
          </button>
        </span>
      </form>
    </FormProvider>
  );
};
export default ManageHotelForm;
