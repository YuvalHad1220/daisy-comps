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

const Chart = () => {
    
    const redThres = 20;
    const yellowThres = 60;

    const trueCount = 900;
    const falseCount = 90;

    const value = Math.round(trueCount / (falseCount + trueCount) * 100);

    const color = value > yellowThres ? "text-success" : value > redThres ? "text-warning" : "text-error";


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

      const LineProgress = ({value, color} : {value : number, color: string}) => (
        <div className="w-full bg-gray-200 rounded-full bg-gray-700 relative" style={{height: "1rem"}}>
            <div className={"rounded-full " + color.replace("text", "bg")} style={{width: `${value}%`, height: "1rem"}} />
            <p className={"absolute inset-0 font-semibold text-center leading-4"}  style={{top: "1px"}} >{value}%</p>
        </div>
      );

      const CircularProgress = ({value, color} : {value : number, color: string}) => (
        <OnTop>
        <div className="radial-progress text-gray-700" style={{"--value": 100, "--thickness": "1rem", "--size": "180px",}} role="progressbar" />
            <div className={"radial-progress z-10 " + color} style={{"--value": value, "--thickness": "1rem", "--size": "180px",}} role="progressbar">
                <p className="text-white text-3xl">{value}%</p>
            </div>
        </OnTop>
      );
      
    return (
        <Paper bgcolor="bg-base-200" classnames="w-80 flex flex-col justify-center items-center gap-3 p-3">
            <p className="text-center text-white text-2xl font-bold">כשירות נגמ"שים</p>

            <CircularProgress value={value} color={color} />
            <LineProgress value={value} color={color}/>
            <LineProgress value={value} color={color}/>
            <LineProgress value={value} color={color}/>


 
        </Paper>
    );

};

export default Chart;