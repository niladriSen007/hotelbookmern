import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r from-slate-950 to-purple-950 flex items-center justify-center ">
     
      <form className="flex flex-col gap-2 text-white bg-slate-800 p-6 w-96 rounded-lg shadow-lg">
      <span className="text-center text-3xl py-4 font-black">Login here</span>

        <label htmlFor="email" className="font-semibold " >Email</label>
        <input className="p-2 rounded-xl bg-slate-700" type="email" name="" id="" />
        <label htmlFor="password" className="font-semibold " >Password</label>
        <input className="p-2 rounded-xl bg-slate-700 focus:bg-slate-700" type="password" name="" id="" />
        
        <Button className="bg-secondaryBtn text-white font-black rounded-xl mt-6 hover:bg-purple-700 transition-all duration-300 shadow-lg">Login</Button>
        <span className="overflow-y-hidden text-center">Didn't have an account ? <Link to={"/register"} className="underline hover:text-purple-400 transition-all duration-300 py-3">Signup here</Link></span>
      </form>
    </div>
  )
}
export default Login