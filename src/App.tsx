import {iMenuTreeItem, iNavItem, iNavSection} from "../interfaces";
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
import Paper from "./Comps/Paper";
import MenuTree from "./Comps/MenuTree";
import DataGrid from "./Comps/DataGrid";
import PrecentageTable from "./Comps/PrecentageTable";
import DatePicker from "./Comps/DatePicker";


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

  const cards = (
    <div className="flex items-start gap-6 flex-grow">
      <Chart title='כשירות מרכבה 4' trueCount={2} falseCount={23} />
      <Chart title="רנדומלי" trueCount={30} falseCount={49} redThres={20} yellowThres={60} description="תיאור לשעון מודולרי"/>
  </div>
  );

  const data : iMenuTreeItem = {
    text: "כל המאגדים",
    items: [
        {
            text: "טכנולוגיות",
            items: []
        },
        {
            text: "נגמשים",
            items: [
                {
                    text: "איתן",
                    items: [
                        {
                            text: "מקט 313"
                        }
                    ]
                },
                {
                    text: "נמר",
                    items: [
                        {
                            text: "מקט 212"
                        },
                        {
                            text: "מקט 3301"
                        },
                        {
                            text: "מקט נמר עג זיו"
                        }
                    ]
                }
            ]
        }
    ]
}


  const footer = (
    <Paper bgcolor="bg-base-200" classnames="h-16 flex items-center p-2">
      <p className="text-white text-xl mr-12">תאריך עדכון אחרון: 13.11.23</p>
      <div className="mr-auto flex gap-4">
        <button className="btn btn-primary">תצוגת טבלה</button>
        <button className="btn">מעבר לשעוני יחידות</button>
      </div>
  </Paper>
  );


  const chartsLogic = (
    <div className="h-full flex flex-col">
      {cards}
      {footer}
    </div>
  );

  const menuTreeLogic = (
    <div className="flex-grow">
      <MenuTree menuTree={data}/>
    </div>
    
  );



  const dataGrid = (
    <div className="flex flex-col h-full">
      <DataGrid />
    </div>
  );


  return (
    <Sidebar navSections={navSections}>
      {/* {chartsLogic} */}
      <DatePicker />
    </Sidebar>
  )


}

export default App
