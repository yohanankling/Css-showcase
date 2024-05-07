import React, { useRef, useState, useEffect } from 'react';
import '../css/stylingDiv.css';
import '../css/TextEffect.css';
import '../css/HoverEffect.css';
import '../css/GrowEffect.css';
import Code from "./code";

function StylingDiv({ title, object, cssStyle, category }) {
    const objectRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
    const [cssRules, setCssRules] = useState('');
    const popupRef = useRef(null);

    const getComputedStyles = () => {
        const appliedClass = objectRef.current.classList[0];

        const rules = Array.from(document.styleSheets)
            .flatMap(sheet => Array.from(sheet.cssRules))
            .filter(rule => rule instanceof CSSStyleRule && rule.selectorText === `.${appliedClass}`)
            .map(rule => rule.cssText)
            .join('\n');

        if (rules) {
            setCssRules(rules);
            setShowPopup(true);
        } else {
            alert(`No CSS rules found for .${appliedClass}`);
        }
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowPopup(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="stylingDiv">
            <h2>{title}</h2>
            <p ref={objectRef} className={cssStyle}>{object}</p>
            <button className="styled-button" onClick={getComputedStyles}>
                Get CSS code
            </button>
            {showPopup && <Code cssStyle={cssStyle} cssRules={cssRules} onClose={() => setShowPopup(false)} popupRef={popupRef} />}
        </div>
    );
}

export default StylingDiv;