import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TbCategoryPlus } from "react-icons/tb";
import { BiSolidBellRing } from "react-icons/bi";
import { Button } from "./ui/button";
import { useHotelContext } from "@/context/AppContext";
import Logout from "./Logout";

const Navbar = () => {
  
  const { isLoggedIn } = useHotelContext()

  return (
    <nav className="bg-slate-900 w-screen h-16 flex items-center justify-between px-12">
      <div className="flex items-center gap-12 text-white ">
        <span className="border-r-2 border-gray-700 pr-12 font-bold text-lg">
          Homify
        </span>
        <div className="flex items-center gap-10 text-sm">
          <span className="overflow-y-hidden">
            {"Categories".split("").map((c) => (
              <span className="font-thin hover:font-black hover:m-1 cursor-pointer hover:text-4xl hover:font-mono transition-all duration-300 ">
                {c}
              </span>
            ))}
          </span>
          <span className="overflow-y-hidden"> {"Become a host".split("").map((c) => (
              <span className="font-thin hover:font-black cursor-pointer hover:text-3xl hover:font-mono transition-all duration-300 ">
                {c}
              </span>
            ))}</span>
          <span className="overflow-y-hidden"> {"Terms".split("").map((c) => (
              <span className="font-thin hover:font-black cursor-pointer hover:text-3xl hover:font-mono transition-all duration-300 ">
                {c}
              </span>
            ))}</span>
          <span className="overflow-y-hidden"> {"FAQs".split("").map((c) => (
              <span className="font-thin hover:font-black cursor-pointer hover:text-3xl hover:font-mono transition-all duration-300 ">
                {c}
              </span>
            ))}</span>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="text-white">
          <TbCategoryPlus size={22} />
        </div>
        <div className="text-white">
          <BiSolidBellRing size={22} />
        </div>
        {isLoggedIn ? (
          <>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Logout />
          </>
        ) : (
          <>
            <Button className="bg-blue-700 text-white hover:bg-blue-800">
              Login
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
