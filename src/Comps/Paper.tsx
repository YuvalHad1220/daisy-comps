import React from "react"

interface iPaper {
    classnames?: string,
    children: React.ReactNode
}

const Paper: React.FC<iPaper> = ({classnames = "", children}) => {
    const finalClassnames = "rounded-2xl shadow-2xl bg-base-300 " + classnames;
    return (
    <div className={finalClassnames}>
        {children}
      </div>
    )
};

export default Paper;