import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FormData } from "@/types/formData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { regitser } from "@/api/authApi";
import { useHotelContext } from "@/context/AppContext";

const Register = () => {
  const { showToast } = useHotelContext();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const navigateTo = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: regitser,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [""] });
      showToast({ message: "Registration successful", type: "SUCCESS" });
      navigateTo("/");
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
        <span className="text-center text-3xl py-4 font-black">
          Register here
        </span>
        <label htmlFor="name" className="font-semibold">
          Name
        </label>
        <input
          className="p-2 rounded-xl bg-slate-700"
          {...register("name", { required: "* Required" })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}
        <label htmlFor="username" className="font-semibold ">
          User Name
        </label>
        <input
          className="p-2 rounded-xl bg-slate-700"
          {...register("username", { required: "* Required" })}
        />
        {errors.username && (
          <span className="text-red-500">{errors.username.message}</span>
        )}
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
        <label htmlFor="confirmpassword" className="font-semibold ">
          Confirm Password
        </label>
        <input
          className="p-2 rounded-xl bg-slate-700"
          {...register("confirmpassword", {
            validate: (val) => {
              if (!val) {
                return "*Required";
              } else if (watch("password") !== val) {
                return "Your password doesn't match";
              }
            },
          })}
        />
        {errors.confirmpassword && (
          <span className="text-red-500">{errors.confirmpassword.message}</span>
        )}
        <Button
          type="submit"
          className="bg-secondaryBtn text-white font-black rounded-xl mt-6 hover:bg-purple-700 transition-all duration-300 shadow-lg"
        >
          Register
        </Button>
        <span className="overflow-y-hidden text-center">
          Already have an account ?{" "}
          <Link
            to={"/login"}
            className="underline hover:text-purple-400 transition-all duration-300 py-3"
          >
            Signin here
          </Link>
        </span>
      </form>
    </div>
  );
};
export default Register;
