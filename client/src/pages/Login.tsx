import { login } from "@/api/authApi";
import { Button } from "@/components/ui/button";
import { useHotelContext } from "@/context/AppContext";
import { LoginFormData } from "@/types/loginFormData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { showToast } = useHotelContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const navigateTo = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [""] });
      showToast({ message: "Login successful", type: "SUCCESS" });
      navigateTo("/home");
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => mutation.mutate(data));

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-slate-950 to-purple-950 flex items-center justify-center ">
      <form
        className="flex flex-col gap-2 text-white bg-slate-800 p-6 w-96 rounded-lg shadow-lg"
        onSubmit={onSubmit}
      >
        <span className="text-center text-3xl py-4 font-black">Login here</span>

        <label htmlFor="email" className="font-semibold ">
          Email
        </label>
        <input
          type="email"
          className="p-2 rounded-xl bg-slate-700 focus:bg-slate-700"
          {...register("email", { required: "* Required" })}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <label htmlFor="password" className="font-semibold ">
          Password
        </label>
        <input
          type="password"
          className="p-2 rounded-xl bg-slate-700 focus:bg-slate-700"
          {...register("password", {
            required: "* Required",
            minLength: {
              value: 1,
              message: "Password must be at least 1 characters",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        <Button className="bg-secondaryBtn text-white font-black rounded-xl mt-6 hover:bg-purple-700 transition-all duration-300 shadow-lg">
          Login
        </Button>
        <span className="overflow-y-hidden text-center">
          Didn't have an account ?{" "}
          <Link
            to={"/register"}
            className="underline hover:text-purple-400 transition-all duration-300 py-3"
          >
            Signup here
          </Link>
        </span>
      </form>
    </div>
  );
};
export default Login;
