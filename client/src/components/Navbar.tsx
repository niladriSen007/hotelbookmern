import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TbCategoryPlus } from "react-icons/tb";
import { BiSolidBellRing } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { Button } from "./ui/button";

const Navbar = () => {
  const currentUser = true;

  return (
    <nav className="bg-slate-900 w-screen h-16 flex items-center justify-between px-12">
      <div className="flex items-center gap-12 text-white ">
        <span className="border-r-2 border-gray-700 pr-12 font-bold text-lg">
          Homify
        </span>
        <div className="flex items-center gap-10 text-sm">
          <span className="cursor-pointer hover:font-bold">Categories</span>
          <span className="cursor-pointer hover:font-bold">Become a host</span>
          <span className="cursor-pointer hover:font-bold">Terms</span>
          <span className="cursor-pointer hover:font-bold">FAQs</span>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="text-white">
          <TbCategoryPlus size={22} />
        </div>
        <div className="text-white">
          <BiSolidBellRing size={22} />
        </div>
        {currentUser ? (
          <>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="text-white">
              <FiLogOut size={22} />
            </div>
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
