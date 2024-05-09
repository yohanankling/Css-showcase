import React from 'react';
import StylingDiv from "./StylingDiv";
import '../css/content.css'
import Rayman from  '../../assets/rayman.jpeg'

function Content({ selectedCategories }) {
    const showAll = selectedCategories.length === 0;

    return (
        <div>
            <div className="styling-div-container">

                {showAll || selectedCategories.includes('text') && (
                    <>
                    <StylingDiv
                        title={"Text & Shadow"}
                        object={"SHADOWING TEXT"}
                        cssStyle={"text_shadow"}
                    />
                        <StylingDiv
                            title={"A COLORFUL TEXT"}
                            object={"COLORFUL TEXT"}
                            cssStyle={"colorful_text"}
                        />
                        <StylingDiv
                            title={"THE WIGGLE TEXT"}
                            object={"HYPERACTIVE"}
                            cssStyle={"wiggle_text"}
                        />

                        <StylingDiv
                            title={"THE FLOATING TEXT"}
                            object={"I'M AN ELEVATOR"}
                            cssStyle={"floating_text"}
                        />
                    </>
                )}

                {showAll || (selectedCategories.includes('image') || selectedCategories.includes('hover')) && (
                    <StylingDiv
                        title={"COVER HOVER"}
                        object={
                            <div>
                                <img src={Rayman} alt={'Rayman'}/>
                                <img src={Rayman} alt={'Rayman'}/>
                            </div>
                        }
                        cssStyle={"cover-hover"}
                    />
                )}

                {showAll || selectedCategories.includes('image') && (
                    <>

                    <StylingDiv
                        title={"Hover The 3D"}
                        object={<img src={Rayman} alt={'Rayman'}/>}
                        cssStyle={"image-3d"}
                    />

                    </>
                )}

                {showAll || selectedCategories.includes('loading') && (
                    <>
                        <StylingDiv
                            title={"LOADING..."}
                            object={
                                <main className="container">
                                    <div className="item">
                                        <i className="loader --2"></i>
                                    </div>
                                    <div className="item">
                                        <i className="loader --9"></i>
                                    </div>
                                    <div className="item">
                                        <i className="loader --3"></i>
                                    </div>

                                    <div className="item">
                                        <i class="loader --4"></i>
                                    </div>
                                    <div class="item">
                                        <i class="loader --1"></i>
                                    </div>
                                    <div class="item">
                                        <i class="loader --5"></i>
                                    </div>

                                    <div class="item">
                                        <i class="loader --6"></i>
                                    </div>
                                    <div class="item">
                                        <i class="loader --8"></i>
                                    </div>
                                    <div class="item">
                                        <i class="loader --7"></i>
                                    </div>
                                </main>
                            }
                            cssStyle={"cover-hover"}
                        />
                    </>
                )}

                {showAll || selectedCategories.includes('hover') && (
                    <StylingDiv
                        title={"hover"}
                        object={"This is a hover text"}
                        cssStyle={"hover-text"}
                    />
                )}
            </div>
        </div>
    );
}

export default Content;