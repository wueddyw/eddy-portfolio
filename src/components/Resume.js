import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styling/Resume.css';

const ResumeSection = () => {
    return (
        <div id="resume" className="section resume-section">
            <h3>Resume</h3>
            <Button 
                variant="primary" 
                href="https://drive.google.com/file/d/1yjhF2yf9BfqdhMqiaFJKTh1U2pDpfN1-/view?usp=sharing" 
                target="_blank"
                className="download-button"
            >
                <i className="fa fa-download" /> Download Resume
            </Button>
        </div>
    );
}

export default ResumeSection;
