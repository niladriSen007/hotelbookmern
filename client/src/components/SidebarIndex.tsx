import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import Sidebar from "./Sidebar";
const SidebarIndex = () => {
  const [extendSidebar, setExtendSidebar] = useState(true);

  return (
    <section>
      {extendSidebar ? (
        <SidebarMenu {...{ extendSidebar, setExtendSidebar }} />
      ) : (
        <Sidebar {...{ extendSidebar, setExtendSidebar }} />
      )}
    </section>
  );
};
export default SidebarIndex;
