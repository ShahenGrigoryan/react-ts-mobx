import React from "react"
import SidebarMenuLink from "../SidebarMenuLink";



const MainWrapper:React.FC = ({children}) => {
    return(
        <div className="main">
            <div>
                <div className="sidebar">
                    <SidebarMenuLink active icon={"courses"}/>
                    <SidebarMenuLink icon={"shopping_list"}/>
                    <SidebarMenuLink icon={"customer"}/>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    )
}

export default MainWrapper