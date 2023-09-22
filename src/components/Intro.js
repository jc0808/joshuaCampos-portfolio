import "./Intro.css";
import myPicture from "../myPicture.png";
import { Link } from "react-scroll";
import hireMe from "../assets/hireme.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Joshua</span>
                    <br />
                    Full Stack Software Engineer
                </span>

                <p className="introP">
                    I'm a skill software engineer who likes to create valuable software.
                </p>

                <Link><button className="button"> <img className="button-image" src={hireMe} alt="hire me" />Hire me</button></Link>

            </div>

            <img className="myPicture" src={myPicture} alt="myPicture" />
        </section>
    )
};


export default Intro;