import React from 'react';
import StylingDiv from "./showcaseDiv";
import '../css/content.css'

function Content({ selectedCategories }) {
    return (
        <div>
            <div className="styling-div-container">
                {selectedCategories.includes('text') && (
                    <StylingDiv
                        title={"text"}
                        object={"This is a styled text"}
                        cssStyle={"styled-text2"}
                        category={"text"}
                    />
                )}

                {selectedCategories.includes('hover') && (
                    <StylingDiv
                        title={"hover"}
                        object={"This is a hover text"}
                        cssStyle={"hover-text"}
                        category={"hover"}
                    />
                )}

                {selectedCategories.includes('button') && (
                    <>
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={"button"}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={"button"}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={"button"}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={"button"}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={"button"}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Content;