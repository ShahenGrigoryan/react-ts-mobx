import React from "react";
import icons from "../../assets/svg";
interface ISidebarMenuLinkProps {
    icon:string
    active?:boolean
}

const SidebarMenuLink:React.FC<ISidebarMenuLinkProps> = ({icon,active}) => {
    const activeClassName = active ? "active" : "";
    return(
        <div className={`sidebar_menu_link ${activeClassName}`}>
            {icons[icon]}
        </div>
    )
}

export default SidebarMenuLink