import "./Skills.css";



import webDesign from "../assets/website-design.png";
import ReactLogo from "../reactLogo.png"
// import appDesign from "../assets/app-design.png";

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            {/* <span className="skillDescription">
                jdnvkudhukejdfijrwoigjweroifhnweoihfduwerhvoigfrwjfioewhoufijr
            </span> */}

            <div className="skillBars">
                <div className="skillBar">
                    <img className="skillBarImg" src="https://cdn-icons-png.flaticon.com/512/5696/5696423.png" alt="skill" />
                    <div className="skillBarText">
                        <h2>Software Engineering</h2>
                        {/* <p>This is a demo text.</p> */}
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src={webDesign} alt="skill" />
                    <div className="skillBarText">
                        <h2>Software Development</h2>
                        {/* <p>React Js, Node Js, JavaScript, BootStrap</p> */}
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src="https://freepngimg.com/thumb/java/4-2-java-transparent.png" alt="skill" />
                    <div className="skillBarText">
                        <h2>Java</h2>
                        {/* <p>Firebase</p> */}
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src="https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png" alt="skill" />
                    <div className="skillBarText">
                        <h2>JavaScript</h2>
                        {/* <p>Firebase</p> */}
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src={ReactLogo} alt="skill" />
                    <div className="skillBarText">
                        <h2>React Js</h2>
                        {/* <p>Firebase</p> */}
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/2560px-Ruby_On_Rails_Logo.svg.png" alt="skill" />
                    <div className="skillBarText">
                        <h2>Ruby on Rails</h2>
                        {/* <p>Firebase</p> */}
                    </div>
                </div>

                <div className="skillBar">
                    <img className="skillBarImg" src="https://assets.stickpng.com/images/5848309bcef1014c0b5e4a9a.png" alt="skill" />
                    <div className="skillBarText">
                        <h2>Redux</h2>
                        {/* <p>Firebase</p> */}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Skills;