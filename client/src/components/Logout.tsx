import { logout } from "@/api/authApi";
import { useHotelContext } from "@/context/AppContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { showToast } = useHotelContext();
  const navigateTo = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: logout,
    onSuccess: async() => {
      // Invalidate and refetch
      await queryClient.invalidateQueries({ queryKey: ["validateToken"] });
      showToast({ message: "Logged out successfully", type: "SUCCESS" });
      navigateTo("/");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const handleClick = () => {
    mutation.mutate();
  };

  return (
    <div className="text-white">
      <FiLogOut onClick={handleClick} size={22} />
    </div>
  );
};
export default Logout;
