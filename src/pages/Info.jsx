import React from 'react';
import linkedin from '../assets/linkedin.png'
import mail from '../assets/mail.png'
import github from '../assets/github.png'
import '../components/css/Info.css'
function Info() {
    return (
        <div>
            <h1>About the Website</h1>
            <p>
                This website demonstrates different CSS styling techniques, such as text effects, hover effects, and growing elements.
                You can select the categories you want to see in the sidebar and copy your style!
            </p>
            <br/>
            <h2>About Me</h2>
            <p>
                Full-stack developer proficient in Java, Python, Javascript, React, C, and C++.
                Experienced in building interactive web applications and implementing machine learning algorithms.
                Passionate about creating impactful software solutions through clean code and user-centered design.
            </p>
            <br/>
            <div>
            <h2>You can contact me through the following channels:</h2>
            <p className={"contact"}>
                <a href="https://www.linkedin.com/in/yohanan-kling/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="https://github.com/yohanankling" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="Github" style={{ width: '30px', height: '30px' }} />
                </a>
                <a href="mailto:yohanankli@gmail.com">
                    <img src={mail} alt="Email" style={{ width: '30px', height: '30px' }} />
                </a>
            </p>
            </div>
        </div>
    );
}

export default Info;