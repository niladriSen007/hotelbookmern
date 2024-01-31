import { useHotelContext } from "@/context/AppContext";
import ManageHotelForm from "@/forms/ManageHotelForm/ManageHotelForm";
import { useMutation } from "@tanstack/react-query";

const AddHotel = () => {

  const { showToast } = useHotelContext()

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error Saving Hotel", type: "ERROR" });
    },
  });

  return (
    <div className="py-12 bg-gradient-to-b text-white from-slate-950 to-violet-950 overflow-x-hidden">
      <ManageHotelForm />
    </div>
  );
};
export default AddHotel;
