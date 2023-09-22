import "./Skills.css";

import UIdesign from "../assets/ui-design.png";

import webDesign from "../assets/website-design.png";

import appDesign from "../assets/app-design.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">
                jdnvkudhukejdfijrwoigjweroifhnweoihfduwerhvoigfrwjfioewhoufijr
            </span>

            <div className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" src={UIdesign} alt="skill" />
                    <div className="skillBarText">
                        <h2>Javascript</h2>
                        <p>This is a demo text.</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src={webDesign} alt="skill" />
                    <div className="skillBarText">
                        <h2>HTML</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src={appDesign} alt="skill" />
                    <div className="skillBarText">
                        <h2>REACT</h2>
                        <p>This is a demo text</p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;