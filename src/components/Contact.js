import { IoLogoOctocat, IoLogoLinkedin } from "react-icons/io";

const Contact = () => {
    return (
        <div className="contact">
            <h3>Contact me</h3>
            <span>kevin_lopez@live.com</span>
            <div className="social-media">
                <div className="social-media-icon-container">
                    <span><IoLogoOctocat /></span>
                </div>
                <div className="social-media-icon-container">
                    <span><IoLogoLinkedin /></span>
                </div>
            </div>
        </div>
    )
}

export default Contact