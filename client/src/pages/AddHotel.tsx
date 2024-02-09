import { addHotel } from "@/api/authApi";
import { useHotelContext } from "@/context/AppContext";
import ManageHotelForm from "@/forms/ManageHotelForm/ManageHotelForm";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const AddHotel = () => {


  const navigateTo = useNavigate();

  const { showToast } = useHotelContext()

  const { mutate,isPending } = useMutation({
    mutationFn: addHotel,
    onError: (error) => {
      showToast({message:error.message, type:"ERROR"})
    },
    onSuccess: () => {
      showToast({message:"Hotel added successfully", type:"SUCCESS"})
      navigateTo("/home")
    }

  });

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData);
  }

  return (
    <div className="py-12 overflow-x-hidden text-white bg-gradient-to-b from-slate-950 to-violet-950">
      <ManageHotelForm onSave={handleSave} isPending={isPending} />
    </div>
  );
};
export default AddHotel;
