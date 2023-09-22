import "./Projects.css";

import portfolio1 from "../assets/portfolio-1.png";
import portfolio2 from "../assets/portfolio-2.png";
import portfolio3 from "../assets/portfolio-3.png";
import portfolio4 from "../assets/portfolio-4.png";
import portfolio5 from "../assets/portfolio-5.png";
import portfolio6 from "../assets/portfolio-6.png";


const Projects = () => {
    return (
        <section id="projects">
            <h2 className="projectsTitle">My Projects</h2>

            <span className="projectsDescription">
                jbfhjfjhvhsygvdsfhgiudfgiusdvbsdfkjf
            </span>

            <div className="projectsImgs">
                <img src={portfolio1} alt="" className="projectsImg" />

                <img src={portfolio2} alt="" className="projectsImg" />

                <img src={portfolio3} alt="" className="projectsImg" />

                <img src={portfolio4} alt="" className="projectsImg" />

                <img src={portfolio5} alt="" className="projectsImg" />

                <img src={portfolio6} alt="" className="projectsImg" />
            </div>

            <button className="projectButton">See More</button>
        </section>
    )
};

export default Projects;