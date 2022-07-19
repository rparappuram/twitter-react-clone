import React from 'react';
import "./SidebarOption.css";

// bc Icon will be a component, we capitalize the first letter
function SidebarOption({ active, text, Icon }) {
    return (
        // green Icon means that it's a component. If you change it to "icon", it's not a component
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`} >
            <Icon />
            <h2>{text}</h2>
        </div >
    );
}

export default SidebarOption