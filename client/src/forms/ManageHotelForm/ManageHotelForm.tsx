import { HotelFormData } from "@/types/hotelFormData";
import { useForm, FormProvider } from "react-hook-form";
import DetailsSection from "./subForms/DetailsSection";
import TypesOfHotelsSection from "./subForms/TypesOfHotelsSection";
import FacilitiesSection from "./subForms/FacilitiesSection";
import GuestsSection from "./subForms/GuestsSection";
import ImagesSection from "./subForms/ImagesSection";


type Props = {
  onSave: (hotelFormData: FormData) => void,
  isPending: boolean
}

const ManageHotelForm = ({onSave,isPending}:Props) => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit } = formMethods;

  const onSubmit = handleSubmit((formDataJson : HotelFormData)=>{
    // console.log(formDataJson.name)
    const formDataNew = new FormData()

    formDataNew.append('name', formDataJson.name);
    formDataNew.append('description', formDataJson.description);
    formDataNew.append('type', formDataJson.type);
    formDataNew.append('city', formDataJson.city);
    formDataNew.append('country', formDataJson.country);
    formDataNew.append("pricePerNight", formDataJson.pricePerNight.toString());
    formDataNew.append("starRating", formDataJson.starRating.toString());
    formDataNew.append("adultCount", formDataJson.adultCount.toString());
    formDataNew.append("childCount", formDataJson.childCount.toString());

    formDataJson.facilities.forEach((facility, index) => {
      formDataNew.append(`facilities[${index}]`, facility);
    });

    Array.from(formDataJson.imageFiles).forEach((imageFile) => {
      formDataNew.append(`imageFiles`, imageFile);
    });

    console.log(formDataNew.get('name'))

    onSave(formDataNew)
    
  })
  
  return (
    <FormProvider {...formMethods}>
      <form className="p-6 mx-64 rounded-lg shadow-2xl bg-gradient-to-b from-slate-900 to-violet-950" onSubmit={onSubmit}>
        <DetailsSection />
        <TypesOfHotelsSection />
        <FacilitiesSection />
        <GuestsSection />
        <ImagesSection />
        <span className="flex justify-end mr-2">
          <button
            disabled={isPending}
            type="submit"
            className="px-6 py-2 font-bold text-white transition-all duration-300 rounded-md bg-violet-800 hover:bg-violet-700 disabled:bg-gray-400"
          >
            {isPending ? "Saving..." : "Confirm"}
          </button>
        </span>
      </form>
    </FormProvider>
  );
};
export default ManageHotelForm;
