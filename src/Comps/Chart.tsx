import { ReactNode } from "react";
import Paper from "./Paper";
declare module "react" {
    // augment CSSProperties here
    interface CSSProperties {
      "--value"?: string | number;
      "--size"?: string | number;
      "--thickness"?: string | number;
    }
  }

type tColor = "success" | "warning" | "error";

interface iChart {
    title: string,
    description?: string,
    redThres?: number,
    yellowThres?: number,
    trueCount: number,
    falseCount: number,
}

const Chart: React.FC<iChart> = ({title, description, redThres = 40, yellowThres = 80, trueCount, falseCount}) => {
    const value = Math.round(trueCount / (falseCount + trueCount) * 100);
    const color: tColor = value > yellowThres ? "success" : value > redThres ? "warning" : "error";
    
    interface OnTopProps {
        children: [ReactNode, ReactNode];
      }
      
      const OnTop: React.FC<OnTopProps> = ({ children}) => (
          <div className="relative">
            {children[0]}
            <div className="absolute inset-0">
              {children[1]}
            </div>
          </div>
      );

      const LineProgress = ({value, color} : {value : number, color: tColor}) => (
        <div className="w-full bg-gray-200 rounded-full bg-gray-700 relative" style={{height: "1rem"}}>
            <div className={`rounded-full ${color === "success" ? "bg-success" : color === "warning" ? "bg-warning" : "bg-error"}`} style={{width: `${value}%`, height: "1rem"}}>
              <p className={"absolute inset-0 font-semibold text-white text-center leading-4"} style={{top: "1px"}} >{value}%</p>
            </div>
        </div>
      );

      const CircularProgress = ({value, color} : {value : number, color: tColor}) => (
        <OnTop>
        <div className="radial-progress text-gray-700" style={{"--value": 100, "--thickness": "0.5rem", "--size": "8rem",}} role="progressbar" />
            <div className={`radial-progress ${color === "success" ? "text-success" : color === "warning" ? "text-warning" : "text-error"}`} style={{"--value": value, "--thickness": "0.5rem", "--size": "8rem",}} role="progressbar">
                <p className="text-white text-2xl">{value}%</p>
            </div>
        </OnTop>
      );
    
    // smarter will be to use two vertricl flexes
    const sidePrecentages = (
      <div className="join h-full join-vertical m-auto mr-4">
        <div className="flex">
          <div className="join-item w-3 h-10 bg-success"/>
          <div className="pr-1.5 text-xs h-10 flex flex-col p-0 m-0 leading-none justify-between">
            <p>100%</p>
            <p className="translate-y-1/2">{yellowThres}%</p>
          </div>
        </div>
        <div className="join-item w-3 h-10 bg-warning" />
        <div className="flex h-10">
          <div className="join-item w-3 h-full bg-error"/>
          <div className="pr-1.5 text-xs h-full flex flex-col p-0 m-0 leading-none justify-between">
            <p className="-translate-y-1/2">{redThres}%</p>
            <p>0%</p>
          </div>
        </div>
      </div>
    );
    
    return (
        <Paper bgcolor="bg-base-200" classnames="w-64 flex flex-col justify-center items-center gap-1 py-3">
            <p className="text-center text-white text-xl font-bold">{title}</p>
            <p className="">{description ? description : "מקט: 48930"}</p>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title">
                  <div className="flex">
                  <CircularProgress value={value} color={color} />
                  {sidePrecentages}
                  </div>
                </div>
                <div className="collapse-content flex flex-col mt-2 gap-2">
                  <div className="text-center p-0 m-0 font-bold leading-none text-sm">
                    נגמש בטיפול: 300
                    <span className="text-info mr-2">(חלפים: 390)</span>
                  </div>

                  <LineProgress value={value} color={color}/>
                  <div className="text-center p-0 m-0 font-bold leading-none text-sm">
                    נגמש בטיפול: 300
                    <span className="text-info mr-2">(חלפים: 390)</span>
                  </div>
                  <LineProgress value={value} color={color}/>
                  <div className="text-center p-0 m-0 font-bold leading-none text-sm">
                    נגמש בטיפול: 300
                    <span className="text-info mr-2">(חלפים: 390)</span>
                  </div>
                  <LineProgress value={value} color={color}/>
                </div>
            </div>
        </Paper>
    );

};

export default Chart;