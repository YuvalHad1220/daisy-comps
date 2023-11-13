
import { iNavItem, iNavSection } from "../../interfaces";
import BazakIcon from "../assets/bazak_logo.svg?react";
import AddUserIcon from "../assets/add_user.svg?react";
import ToTeneTableIcon from "../assets/to_tene_table.svg?react";
import HomepageIcon from "../assets/homepage.svg?react";
import { ReactNode } from "react";
import Paper from "./Paper";

interface iSidebar {
    navSections: iNavSection[],
    children: ReactNode
}


const SidebarFooter = () => (
    <div className="flex flex-col mt-auto mb-3 gap-3 p-2">
      <button className="btn btn-outline w-full">
        <AddUserIcon className="fill-white"/>
        <p className="hidden xl:inline text-center ml-auto mr-6 text-white">רשום משתמש</p>
      </button>

      <button className="btn btn-primary w-full">
        <ToTeneTableIcon />
        <p className="hidden xl:inline text-center ml-auto mr-6">חזרה לשולחן טנא</p>
      </button>
    </div>
  )

const NavItem = ({item} : {item: iNavItem}) => (
    <button className="btn rounded-none">
      <item.Icon />
      <p className="hidden xl:inline text-center ml-auto mr-6">{item.text}</p>
    </button>
  )

  const BazakHeader = () => (
    <div className="flex justify-center items-center p-0 xl:px-4 my-4">
      <h1 className="hidden xl:inline font-bold	text-4xl text-white">מערכת בז"כ</h1>
      <BazakIcon className="xl:h-32 xl:w-32" />
    </div>
  );

  const MainNavSection = ({navSections} : {navSections: iNavSection[]}) => (
    navSections.map(section => (
      <>
        <div className="divider">{section.text}</div>
        {section.items.map(navItem => <NavItem key={navItem.text} item={navItem} />)}
      </>
    ))
  );

  const PressedButtonExample = () => (
  <button className="btn rounded-none text-white bg-base-200 bg-gradient-to-r from-[#ff365e66] via-[#ff474f4d] to-[#ff5a3e4d]">
    <HomepageIcon />
    <p className="hidden xl:inline text-center ml-auto mr-6">כפתור לחוץ</p>
  </button>
  );


const Sidebar: React.FC<iSidebar> = ({navSections, children}) => {
    return (
        <div className="grid sm:grid-cols-12 xl:grid-cols-10 h-screen gap-3 p-3">
          <Paper classnames="col-span-1 flex flex-col">
          <BazakHeader />
            <MainNavSection navSections={navSections} />
            <PressedButtonExample />
            <SidebarFooter />
          </Paper>

          <div className="col-span-11 xl:col-span-9 flex flex-col gap-3 h-full ">
            <Paper classnames="h-20">
              <p className="text-center">סרגל ניווט - יכיל סרגל חיפוש, שם עמוד ומעבר בין זמינות\כשירות</p>
            </Paper>
          <Paper classnames="h-full">
          {children}
          </Paper>
          </div>
        </div>
      )
};

export default Sidebar;