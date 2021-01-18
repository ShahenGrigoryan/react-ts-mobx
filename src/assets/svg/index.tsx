import React from "react"
import {ReactComponent as CoursesIcon} from "./courses_icon.svg"
import {ReactComponent as ShoppingListIcon} from "./shopping_list_icon.svg"
import {ReactComponent as CustomerIcon} from "./customer_icon.svg"
import {ReactComponent as PlayIcon} from "./play_icon.svg"

interface IIcons {
    [name:string]:React.SVGProps<SVGSVGElement>
}


const icons:IIcons = {
    courses:<CoursesIcon/>,
    shopping_list:<ShoppingListIcon/>,
    customer:<CustomerIcon/>,
    play:<PlayIcon/>
}

export default icons;