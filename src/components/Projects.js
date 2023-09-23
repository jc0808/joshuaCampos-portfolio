import "./Projects.css";

import portfolio1 from "../websites/fiberTech.png";
import portfolio2 from "../websites/netflixClone.png";
import portfolio3 from "../websites/Adoption.png";
import portfolio4 from "../websites/Ishopping.png";
// import portfolio5 from "../assets/portfolio-5.png";
// import portfolio6 from "../assets/portfolio-6.png";


const Projects = () => {
    return (
        <section id="projects">
            <h2 className="projectsTitle">My Projects</h2>

            {/* <span className="projectsDescription">
                jbfhjfjhvhsygvdsfhgiudfgiusdvbsdfkjf
            </span> */}

            <div className="projectsImgs">

                <div className="card inactive">
                    <img src="https://cdn-icons-png.flaticon.com/256/4771/4771252.png" alt="" className="projectsImg" />

                    <h4>Upcoming</h4>

                    <h3>Ishopping v2</h3>

                    <p>Ruby on Rails, CSS, React Js, Stripe, Redux</p>

                    <div className="card-buttons">
                        <button disabled>View Code</button>
                        <button disabled>View Demo</button>
                    </div>
                </div>

                <div className="card">
                    <img src={portfolio1} alt="" className="projectsImg" />

                    <h4>New</h4>

                    <h3>Fiber Tech</h3>

                    <p>React Js, CSS, Stripe, Firebase, Redux</p>

                    <div className="card-buttons">
                        <button onClick={() => window.open("https://github.com/jc0808/fiber-tech", "_blank")}>View Code</button>
                        <button onClick={() => window.open("https://fibertech-database.web.app", "_blank")}>View Demo</button>
                    </div>
                </div>

                <div className="card">
                    <img src={portfolio2} alt="" className="projectsImg" />
                    <h4>New</h4>

                    <h3>Netflix Clone</h3>

                    <p>React Js, CSS, Redux, Firebase, Stripe</p>

                    <div className="card-buttons">
                        <button onClick={() => window.open("https://github.com/jc0808/netlfix-clone-1", "_blank")}>View Code</button>
                        <button onClick={() => window.open("https://netflix-clone-1-350c9.web.app", "_blank")}>View Demo</button>
                    </div>
                </div>

                <div className="card">
                    <img src={portfolio3} alt="" className="projectsImg" />

                    <h3>Adoption Site</h3>

                    <p>React Js, CSS, Ruby on Rails, SQL Database </p>

                    <div className="card-buttons">
                        <button onClick={() => window.open("https://github.com/jc0808/AdoptPetsApp", "_blank")}>View Code</button>
                        <button onClick={() => window.open("https://adoptpetsapp.onrender.com/adopt", "_blank")}>View Demo</button>
                    </div>
                </div>

                <div className="card">
                    <img src={portfolio4} alt="" className="projectsImg" />

                    <h3>Ishopping Website</h3>

                    <p>React Js, JSON, CSS</p>

                    <div className="card-buttons">
                        <button onClick={() => window.open("https://github.com/jc0808/ishopping-app", "_blank")}>View Code</button>
                        <button onClick={() => window.open("https://ishopping-app.netlify.app/home", "_blank")}>View Demo</button>
                    </div>
                </div>




                {/* <img src={portfolio3} alt="" className="projectsImg" />

                <img src={portfolio4} alt="" className="projectsImg" />

                <img src={portfolio5} alt="" className="projectsImg" />

                <img src={portfolio6} alt="" className="projectsImg" /> */}
            </div>

            {/* <button className="projectButton">See More</button> */}
        </section>
    )
};

export default Projects;