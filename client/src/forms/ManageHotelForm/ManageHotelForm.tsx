import { HotelFormData } from "@/types/hotelFormData";
import { useForm, FormProvider } from "react-hook-form";
import DetailsSection from "./subForms/DetailsSection";
import TypesOfHotelsSection from "./subForms/TypesOfHotelsSection";
import FacilitiesSection from "./subForms/FacilitiesSection";
import GuestsSection from "./subForms/GuestsSection";

const ManageHotelForm = () => {
  const formMethods = useForm<HotelFormData>();
  const { handleSubmit, reset } = formMethods;
  return (
    <FormProvider {...formMethods}>
      <form className="bg-gradient-to-b from-slate-900 to-violet-950 p-6 rounded-lg shadow-2xl mx-64">
        <DetailsSection />
        <TypesOfHotelsSection />
        <FacilitiesSection />
        <GuestsSection />
      </form>
    </FormProvider>
  );
};
export default ManageHotelForm;
