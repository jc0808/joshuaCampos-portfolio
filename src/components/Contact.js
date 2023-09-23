import "./Contact.css";

// import walmart from "../assets/walmart.png";
// import facebook from "../assets/facebook.png";
// import microsoft from "../assets/microsoft.png";
// import adobe from "../assets/adobe.png";

// import facebookIcon from "../assets/facebook-icon.png";
// import instagramIcon from "../assets/instagram.png";
// import twitterIcon from "../assets/twitter.png";
// import youtubeIcon from "../assets/youtube.png";

import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();



        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                alert("Email sent!")

            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <section id="contactContainer">

            {/* <div className="clients">

                <h1 className="contactTitle">My Clients</h1>

                <p className="clientDesc">
                    I have had the opportunity to work with a diverse group of companies...
                </p>

                <div className="clientImgs">
                    <img className="clientImg" src={walmart} alt="client" />
                    <img className="clientImg" src={facebook} alt="client" />
                    <img className="clientImg" src={adobe} alt="client" />
                    <img className="clientImg" src={microsoft} alt="client" />
                </div>

            </div> */}

            <div id="contactMe">

                <h1 className="contactTitle">Contact Me</h1>

                <span className="contactDescription">Please fill out the form bellow to discuss any work opportunities.</span>

                <form className="contactForm" ref={form} onSubmit={sendEmail}>

                    <input name="to_name" value="Joshua" style={{ display: 'none' }} />
                    <input className="name" type="text" name="from_name" placeholder="Your Name"></input>
                    <input className="email" type="email" name="reply_to" placeholder="Your Email"></input>
                    <textarea className="message" name="message" rows="5" placeholder="Your Message"></textarea>

                    <button className="contactButton" type="submit" value="send">Submit</button>

                    <div className="links">
                        {/* <img className="link" src={facebookIcon} alt="facebook" /> */}
                        {/* <img className="link" src={youtubeIcon} alt="youtube" />
                        <img className="link" src={instagramIcon} alt="instagram" />
                        <img className="link" src={twitterIcon} alt="twitter" /> */}
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Contact;