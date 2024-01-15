import { sidebarMenuData } from "../utils/sidebarMenuData";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
const SidebarMenu = ({ setExtendSidebar }) => {
  return (
    <section className="p-4 mx-2 pt-12  rounded-xl w-52 bg-slate-900 backdrop-blur-lg text-white  relative">
      <div className="absolute right-4 top-4 z-50 cursor-pointer">
        <FaCircleChevronLeft
          size={22}
          onClick={() => setExtendSidebar(false)}
        />
      </div>
      {sidebarMenuData.map((item, index) => {
        return (
          <div
            key={index}
            className="py-3 px-2 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            <div className="flex gap-3  items-center justify-start">
              <div className="">{<item.icon />}</div>
              <div className="">{item.title}</div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default SidebarMenu;
