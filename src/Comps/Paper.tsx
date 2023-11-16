import React from "react"

interface iPaper extends React.HTMLAttributes<HTMLDivElement> {
    classnames?: string,
    children: React.ReactNode,
    bgcolor?: string,
}

const Paper: React.FC<iPaper> = ({classnames = "", children, bgcolor = "bg-base-300", ...rest}) => {
    const finalClassnames = "rounded-2xl shadow-2xl " + bgcolor + " " +classnames;
    return (
    <div className={finalClassnames} {...rest}>
        {children}
      </div>
    )
};


export default Paper;