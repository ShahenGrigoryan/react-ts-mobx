import React from "react";


interface IMenuLinkProps {
    data: {
        name: string
        id: number
    }
    active?: boolean
    onClick?: (id: number) => void
}


const MenuLink: React.FC<IMenuLinkProps> = (
    {
        data,
        active = false,
        onClick = () => null,
    }) => {
    const activeClassName = active ? "active" : "";
    return (
        <div className={`menu_link ${activeClassName}`} onClick={() => onClick(data?.id)}>
            <span>
            {data?.name}
            </span>
            <div className="underline_container">
            <hr className={`underline ${activeClassName}`}/>
            </div>
        </div>
    )
}
export default MenuLink;