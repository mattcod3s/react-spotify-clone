import React from 'react';

function SidebarOption({ title, Icon }) {
    return(
        <div className="sidebar-option">
            {Icon && <Icon className="sidebarOption-icon"/>}
            {Icon ? <h4>{title}</h4> : <h4>{title}</h4>}
        </div>
    )
}

export default SidebarOption;