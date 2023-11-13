import { FunctionComponent, SVGProps } from "react"

export interface iNavItem {
    text: string,
    to: string,
    Icon: FunctionComponent<SVGProps<SVGSVGElement>>
  }
  
export interface iNavSection {
    text: string,
    items: iNavItem[]
  }
  