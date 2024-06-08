import React from "react";

const LeftAsideContent = ({asideText, asideCenterText }) => {
    return (
        <div className="left-aside-content">
            <p className="left-aside-text">{asideText ? asideText : "ASIDE"}</p>
        </div>
    )
}
export default LeftAsideContent;