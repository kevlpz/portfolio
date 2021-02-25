import { IoLogoOctocat, IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact me</h3>
            <span>kevin_lopez@live.com</span>
            <div className="social-media">
            <a href="https://github.com/kevlpz" target="_blank">
                <div className="social-media-icon-container">
                    <span><IoLogoOctocat /></span>
                </div>
            </a>
                <a href="https://www.linkedin.com/in/kevin-lopez-03a074a9/" target="_blank">
                    <div className="social-media-icon-container">
                        <span><IoLogoLinkedin /></span>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Contact