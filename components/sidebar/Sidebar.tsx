import type { FC } from "react";
import { useSelect } from "@/store";
import { Fragment } from "react";

export interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  const isOpen = useSelect((state) => state.ui.isSidebarOpen);

  return (
    <Fragment>
      <aside className='hidden fixed top-0 right-0 h-full w-6/12 bg-red-500'></aside>
    </Fragment>
  );
};

export default Sidebar;
