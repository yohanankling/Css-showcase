import React from 'react';
import StylingDiv from "./showcaseDiv";
import '../css/content.css'

function Content({ selectedCategories }) {
    const showAll = selectedCategories.length === 0;

    return (
        <div>
            <div className="styling-div-container">
                {showAll || (selectedCategories.includes('text') || selectedCategories.includes('hover')) && (
                    <StylingDiv
                        title={"text and hover"}
                        object={"This is a styled and hover text"}
                        cssStyle={"styled-text2 hover-text"}
                        category={['text', 'hover']}
                    />
                )}

                {showAll || selectedCategories.includes('text') && (
                    <StylingDiv
                        title={"text"}
                        object={"This is a styled text"}
                        cssStyle={"styled-text2"}
                        category={['text']}
                    />
                )}

                {showAll || selectedCategories.includes('hover') && (
                    <StylingDiv
                        title={"hover"}
                        object={"This is a hover text"}
                        cssStyle={"hover-text"}
                        category={['hover']}
                    />
                )}

                {showAll || selectedCategories.includes('button') && (
                    <>
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={['button']}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={['button']}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={['button']}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={['button']}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                            category={['button']}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Content;