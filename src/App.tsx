import {iMenuTreeItem, iNavItem, iNavSection, iMagadData} from "../interfaces";
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
  
  const magadData: iMagadData = {
    tanks: {
      "gdod 4": { trueCount: 4, falseCount: 20 },
      "gdod 3": { trueCount: 200, falseCount: 12 },
      "gdod 20": { trueCount: 100, falseCount: 0 },
      "gdod 10": { trueCount: 15, falseCount: 30 },
      "gdod 15": { trueCount: 50, falseCount: 10 },
      "gdod 8": { trueCount: 8, falseCount: 25 },
      "gdod 12": { trueCount: 10, falseCount: 18 },
      "gdod 25": { trueCount: 30, falseCount: 5 },
      "gdod 30": { trueCount: 12, falseCount: 10 },
      "gdod 35": { trueCount: 7, falseCount: 15 },
      "gdod 22": { trueCount: 5, falseCount: 25 },
      "gdod 28": { trueCount: 18, falseCount: 8 },
      "gdod 18": { trueCount: 15, falseCount: 20 },
      "gdod 45": { trueCount: 20, falseCount: 15 },
      "gdod 50": { trueCount: 12, falseCount: 22 },
    },
    nagmashim: {
      "gdod 5": { trueCount: 4, falseCount: 100 },
      "gdod 20": { trueCount: 1, falseCount: 1 },
      "gdod 12": { trueCount: 8, falseCount: 22 },
      "gdod 18": { trueCount: 25, falseCount: 5 },
      "gdod 25": { trueCount: 60, falseCount: 20 },
      "gdod 15": { trueCount: 5, falseCount: 15 },
      "gdod 28": { trueCount: 10, falseCount: 30 },
      "gdod 32": { trueCount: 18, falseCount: 8 },
      "gdod 40": { trueCount: 12, falseCount: 2 },
      "gdod 45": { trueCount: 20, falseCount: 15 },
      "gdod 22": { trueCount: 15, falseCount: 18 },
      "gdod 48": { trueCount: 12, falseCount: 25 },
      "gdod 33": { trueCount: 5, falseCount: 10 },
      "gdod 55": { trueCount: 20, falseCount: 30 },
    },
    artillery: {
      "gdod 8": { trueCount: 10, falseCount: 15 },
      "gdod 14": { trueCount: 30, falseCount: 5 },
      "gdod 22": { trueCount: 12, falseCount: 8 },
      "gdod 30": { trueCount: 18, falseCount: 2 },
      "gdod 35": { trueCount: 5, falseCount: 1 },
      "gdod 18": { trueCount: 22, falseCount: 12 },
      "gdod 26": { trueCount: 15, falseCount: 18 },
      "gdod 38": { trueCount: 8, falseCount: 25 },
      "gdod 42": { trueCount: 35, falseCount: 10 },
      "gdod 50": { trueCount: 20, falseCount: 5 },
      "gdod 44": { trueCount: 12, falseCount: 15 },
      "gdod 52": { trueCount: 28, falseCount: 22 },
      "gdod 60": { trueCount: 10, falseCount: 5 },
      "gdod 46": { trueCount: 18, falseCount: 10 },
      "gdod 58": { trueCount: 25, falseCount: 30 },
    },
    guns: {
      "gdod 2": { trueCount: 3, falseCount: 7 },
      "gdod 7": { trueCount: 10, falseCount: 5 },
      "gdod 14": { trueCount: 5, falseCount: 2 },
      "gdod 21": { trueCount: 8, falseCount: 15 },
      "gdod 28": { trueCount: 15, falseCount: 10 },
      "gdod 35": { trueCount: 20, falseCount: 5 },
    },
    bombs: {
      "gdod 3": { trueCount: 2, falseCount: 8 },
      "gdod 9": { trueCount: 15, falseCount: 5 },
      "gdod 16": { trueCount: 8, falseCount: 12 },
      "gdod 23": { trueCount: 25, falseCount: 30 },
      "gdod 30": { trueCount: 10, falseCount: 5 },
      "gdod 37": { trueCount: 18, falseCount: 22 },
    },
    missiles: {
      "gdod 5": { trueCount: 5, falseCount: 15 },
      "gdod 12": { trueCount: 20, falseCount: 10 },
      "gdod 19": { trueCount: 12, falseCount: 8 },
      "gdod 26": { trueCount: 8, falseCount: 5 },
      "gdod 33": { trueCount: 15, falseCount: 20 },
      "gdod 40": { trueCount: 30, falseCount: 5 },
    },
  };
  

  return (
    <Sidebar navSections={navSections}>
      {/* {chartsLogic} */}
      {/* <DatePicker /> */}
      <PrecentageTable magadData={magadData} />
    </Sidebar>
  )


}

export default App
