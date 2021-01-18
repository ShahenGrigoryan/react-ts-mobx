import React from "react";
import MenuLink from "../MenuLink";

interface ITopBarProps {
    filterButtons:IFilterButton[]
    changeFilter:(accessor:string) => void
    activeFilter:IFilterButton
}
const TopBar:React.FC<ITopBarProps> = ({filterButtons,changeFilter,activeFilter}) => {
    return(
        <div className="top_bar">
            <div className="page_title">
                Courses
            </div>
            <div>
                <div className="menu">
                    {filterButtons.map(item => (
                        <MenuLink
                            onClick={()=>changeFilter(item.accessor)}
                            data={item} key={item.id}
                            active={activeFilter.id === item.id}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopBar