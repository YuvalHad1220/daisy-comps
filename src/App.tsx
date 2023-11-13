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
import Sidebar from "./Comps/Sidebar";
import Chart from "./Comps/Chart";


// https://rgbacolorpicker.com/hex-to-rgba

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
  const navSections = [generalNavSection, tableNavSection, adminNavSection];


  return (
    <Sidebar navSections={navSections}>
      כרטיסים?
      <Chart />
    </Sidebar>
  )


}

export default App
