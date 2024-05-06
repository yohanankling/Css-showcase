import React from 'react';
import StylingDiv from "./showcaseDiv";
import '../css/content.css'

function Content() {
    return (<div>
        <div className="styling-div-container">
            <StylingDiv title={"text"} object={"This is a styled text"} cssStyle={"styled-text2"}/>
            <StylingDiv title={"hover"} object={"This is a hover text"} cssStyle={"hover-text"}/>
            <StylingDiv title={"grow"} object={"This is a growing text"} cssStyle={"grow-box"}/>
            <StylingDiv title={"grow"} object={"This is a growing text"} cssStyle={"grow-box"}/>
            <StylingDiv title={"grow"} object={"This is a growing text"} cssStyle={"grow-box"}/>
            <StylingDiv title={"grow"} object={"This is a growing text"} cssStyle={"grow-box"}/>
            <StylingDiv title={"grow"} object={"This is a growing text"} cssStyle={"grow-box"}/>
        </div>
    </div>);
}

export default Content;
