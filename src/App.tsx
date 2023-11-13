import {iNavItem, iNavSection} from "../interfaces";
import HomepageIcon from "./assets/homepage.svg?react";
import ZminotTatYehidotIcon from "./assets/zminot_tat_yehidot.svg?react";
import ScreensIcon from "./assets/screens.svg?react";
import UnitTreeIcon from "./assets/unit_tree.svg?react";
import SlidesCenterIcon from "./assets/slides_center.svg?react";
import DivoahZminotIcon from "./assets/divoah_zminot.svg?react";
import PermissionIcon from "./assets/permission_validation.svg?react";
import SettingsIcon from "./assets/settings.svg?react";
import AboutIcon from "./assets/about.svg?react";
import BazakIcon from "./assets/bazak_logo.svg?react";
import AddUserIcon from "./assets/add_user.svg?react";
import ToTeneTableIcon from "./assets/to_tene_table.svg?react";

function App() {
  const generalNavItems: iNavItem[] = [
    {
      text: "מסך בית",
      to: "",
      Icon: HomepageIcon
    },
    {
      text: "המסכים שלי",
      to: "",
      Icon: ScreensIcon
    },
    {
      text: "זמינות תת יחידות",
      to: "",
      Icon: ZminotTatYehidotIcon
    }
  ];

  const tableNavItems: iNavItem[] = [
    {
      text: "דיווח זמינות",
      to: "",
      Icon: DivoahZminotIcon
    },
    {
      text: "עץ יחידות",
      to: "",
      Icon: UnitTreeIcon
    },
    {
      text: "מרכז המצגות",
      to: "",
      Icon: SlidesCenterIcon
    }
  ];

  const adminNavItems: iNavItem[] = [
    {
      text: "תקינות הזנות",
      to: "",
      Icon: PermissionIcon
    },
    {
      text: "ניהול מערכת",
      to: "",
      Icon: SettingsIcon
    },
    {
      text: "אודות המערכת",
      to: "",
      Icon: AboutIcon
    }
  ];

  const generalNavSection: iNavSection = {
    text: "כללי",
    items: generalNavItems
  };

  const tableNavSection: iNavSection = {
    text: "טבלאות",
    items: tableNavItems
  };

  const adminNavSection: iNavSection = {
    text: "ניהול",
    items: adminNavItems
  };


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

  const MainNavSection = () => (
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

  const navSections = [generalNavSection, tableNavSection, adminNavSection];
  return (
    <div className="grid sm:grid-cols-12 xl:grid-cols-10 h-screen gap-3 p-3">
      <div className="col-span-1 rounded-2xl shadow-2xl bg-base-300 flex flex-col">
        <BazakHeader />
        <MainNavSection />
        <PressedButtonExample />
        <SidebarFooter />
      </div>
      <div className="col-span-11 xl:col-span-9 flex flex-col gap-3 h-full ">
      <div className="rounded-2xl shadow-2xl bg-base-300 h-20">
        navbar
      </div>
      <div className="rounded-2xl shadow-2xl bg-base-300 h-full">
        content
      </div>
      </div>
    </div>
  )
}

export default App
