import { ReactNode } from "react";
import Paper from "./Paper";
import FastUpIcon from "../assets/up_fast.svg?react";
import UpIcon from "../assets/up_slow.svg?react";
import FastDownIcon from "../assets/down_fast.svg?react";
import DownIcon from "../assets/down_slow.svg?react";
import SameIcon from "../assets/same.svg?react"
import DiveIcon from "../assets/up_left.svg?react"


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
            <div className={`radial-progress text-center ${color === "success" ? "text-success" : color === "warning" ? "text-warning" : "text-error"}`} style={{"--value": value, "--thickness": "0.5rem", "--size": "8rem",}} role="progressbar">
              <p className="text-white text-3xl">{value}%</p>
              <p className="text-white">{`${trueCount}/${trueCount+falseCount}`}</p>
            </div>
        </OnTop>
      );
    
    // smarter will be to use two vertricl flexes
    const sidePrecentages = (
      <div className="join h-full join-vertical m-auto mr-4">
        <div className="flex" style={{height: `${100 - yellowThres}%`}}>
          <div className="join-item w-3 bg-success"/>
          <div className="pr-1.5 text-xs flex flex-col p-0 m-0 leading-none justify-between">
            <p>100%</p>
            <p className="translate-y-1/2">{yellowThres}%</p>
          </div>
        </div>
        <div className="join-item w-3 bg-warning" style={{height: `${yellowThres - redThres}%`}} />
        <div className="flex" style={{height: `${redThres}%`}}>
          <div className="join-item w-3 h-full bg-error"/>
          <div className="pr-1.5 text-xs h-full flex flex-col p-0 m-0 leading-none justify-between">
            <p className="-translate-y-1/2">{redThres}%</p>
            <p>0%</p>
          </div>
        </div>
      </div>
    );


    const titles = (
      <>
        <div className="flex justify-between text-center">
            <FastUpIcon className="text-success w-5 h-5"/>
          <p className="text-white text-xl font-bold">{title}</p>
          <button className="btn btn-primary">
            <DiveIcon/>
          </button>
        </div>
        <p className="">{description ? description : "מקט: 48930"}</p>
      </>
    );

    const SubDataProgress = ({progress, title, subTitle} : {progress: number, title: string, subTitle: string}) => (
      <>
        <div className="text-center p-0 m-0 font-bold leading-none text-sm">
          {title}
          <span className="text-info mr-2">({subTitle})</span>
        </div>
        <LineProgress value={progress} color={color}/>
      </>
    )
    
    return (
        <Paper bgcolor="bg-base-200" classnames="w-64 flex flex-col justify-center items-center gap-1 py-3">
          {titles}
          <div className="collapse">
            <input type="checkbox" />
            <div className="collapse-title">
              <div className="flex h-32">
              <CircularProgress value={value} color={color} />
              {sidePrecentages}
              </div>
            </div>
            <div className="collapse-content flex flex-col mt-2 gap-2">
              <SubDataProgress progress={30} title="נגמש בטיפול: 399" subTitle="חלקי חילוף: 30"/>
              <SubDataProgress progress={30} title="נגמש בטיפול: 399" subTitle="חלקי חילוף: 30"/>
              <SubDataProgress progress={30} title="נגמש בטיפול: 399" subTitle="חלקי חילוף: 30"/>
            </div>
          </div>
        </Paper>
    );

};

export default Chart;