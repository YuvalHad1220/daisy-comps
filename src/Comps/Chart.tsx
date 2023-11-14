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
    title: string
}

const Chart: React.FC<iChart> = ({title}) => {
    
    const redThres = 20;
    const yellowThres = 60;

    const trueCount = 321;
    const falseCount = 90;

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
    
            <div className={`rounded-full ${color === "success" ? "bg-success" : color === "warning" ? "bg-warning" : "bg-error"}`} style={{width: `${value}%`, height: "1rem"}} />
            <p className={"absolute inset-0 font-semibold text-white text-center leading-4"} style={{top: "1px"}} >{value}%</p>
        </div>
      );

      const CircularProgress = ({value, color} : {value : number, color: tColor}) => (
        <OnTop>
        <div className="radial-progress text-gray-700" style={{"--value": 100, "--thickness": "1rem", "--size": "180px",}} role="progressbar" />
            <div className={`radial-progress ${color === "success" ? "text-success" : color === "warning" ? "text-warning" : "text-error"}`} style={{"--value": value, "--thickness": "1rem", "--size": "180px",}} role="progressbar">
                <p className="text-white text-3xl">{value}%</p>
            </div>
        </OnTop>
      );
      
    return (
        <Paper bgcolor="bg-base-200" classnames="w-64 flex flex-col justify-center items-center gap-2 py-3">
            <p className="text-center text-white text-2xl font-bold">{title}</p>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title">
                    <CircularProgress value={value} color={color} />
                </div>
                <div className="collapse-content flex flex-col gap-2">
                    <LineProgress value={value} color={color}/>
                    <LineProgress value={value} color={color}/>
                    <LineProgress value={value} color={color}/>

                </div>
            </div>


 
        </Paper>
    );

};

export default Chart;