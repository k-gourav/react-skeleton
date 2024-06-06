import React from "react";

const LeftAsideContent = ({asideText}) => {
    return (
        <div className="left-aside-content">
            <p className="left-aside-text">{asideText ? asideText : "aside"}</p>
        </div>

        
    )
}
export default LeftAsideContent;