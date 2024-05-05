import React, { useState } from 'react';
import '../css/code.css';

export default function Code({ cssStyle, cssRules, onClose, popupRef }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(cssRules)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch((error) => {
                console.error('Failed to copy text: ', error);
            });
    };

    return (
        <div className="cover" ref={popupRef}>
            <span className="close" onClick={onClose}>×</span>
            <div>
                <h3 className={"title"}>CSS Rules for <br/>{cssStyle}</h3>
                <div className="cssRules">
                    {cssRules}
                </div>
            </div>
            <div className={"buttons"}>
                <button onClick={copyToClipboard}>
                    {copied ? 'Copied!' : 'Copy to Clipboard'}
                </button>
            </div>
        </div>
    );
}