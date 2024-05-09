import React from 'react';
import StylingDiv from "./StylingDiv";
import '../css/content.css'
import Rayman from  '../../assets/rayman.jpeg'

function Content({ selectedCategories }) {
    const showAll = selectedCategories.length === 0;

    return (
        <div>
            <div className="styling-div-container">
                {showAll || (selectedCategories.includes('text') || selectedCategories.includes('hover')) && (
                    <StylingDiv
                        title={"text and hover"}
                        object={"This is a styled and hover text"}
                        cssStyle={"bubble-text"}
                    />
                )}

                {showAll || selectedCategories.includes('text') && (
                    <StylingDiv
                        title={"text"}
                        object={"This is a styled text"}
                        cssStyle={"styled-text3"}
                    />
                )}

                {showAll || selectedCategories.includes('image') && (
                    <StylingDiv
                        title={"text"}
                        object={<img src={Rayman} alt={'Rayman'}/>}
                        cssStyle={"image-3d"}
                    />
                )}

                {showAll || selectedCategories.includes('hover') && (
                    <StylingDiv
                        title={"hover"}
                        object={"This is a hover text"}
                        cssStyle={"hover-text"}
                    />
                )}

                {showAll || selectedCategories.includes('button') && (
                    <>
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                        />
                        <StylingDiv
                            title={"grow"}
                            object={"This is a growing text"}
                            cssStyle={"grow-box"}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default Content;