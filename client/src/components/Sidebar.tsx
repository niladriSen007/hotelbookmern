import { sidebarMenuData } from "@/utils/sidebarMenuData";
import {  FaCircleChevronRight } from "react-icons/fa6";

const Sidebar = ({setExtendSidebar}) => {
  return (
    <section className="p-4 mx-2 pt-12  rounded-xl w-20 bg-slate-900 backdrop-blur-lg text-white  relative">
      <div className="absolute left-8 top-4 z-50 cursor-pointer">
        <FaCircleChevronRight
          size={22}
          onClick={() => setExtendSidebar(true)}
        />
      </div>
      {sidebarMenuData.map((item, index) => {
        return (
          <div
            key={index}
            className="p-4 rounded-lg hover:bg-gray-800 cursor-pointer"
          >
            
              <div className="text-lg">{<item.icon />}</div>
          
          </div>
        );
      })}
    </section>
  )
}
export default Sidebar