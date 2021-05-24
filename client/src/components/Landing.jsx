import kubko1 from '../images/kubko (1).jpg';
import kubko2 from '../images/kubko (2).jpg';
import kubko3 from '../images/kubko (3).jpg';
import kubko4 from '../images/kubko (4).jpg';
import kubko5 from '../images/kubko (5).jpg';
import kubko6 from '../images/kubko (6).jpg';
import LandingIcon from "./LandingIcon";

export default function Landing() {
    return <div className="landing">
        <div className="icons-left">
            <LandingIcon imgSource={kubko2} imgAlt={"kubko running fast!"} />
            <LandingIcon imgSource={kubko1} imgAlt={"kubko sleeping"} />
            <LandingIcon imgSource={kubko6} imgAlt={"kubko with papa"} />
        </div>
        <h1>What Did Kubko Do Today?</h1>
        <div className="icons-mobile kubko-main-img-outer nonagon">
            <div className="kubko-main-img-inner nonagon"></div>
        </div>
        <div className="icons-right">
            <LandingIcon imgSource={kubko3} imgAlt={"kubko with mama"} />
            <LandingIcon imgSource={kubko4} imgAlt={"kubko on train"} />
            <LandingIcon imgSource={kubko5} imgAlt={"kubko chilling"} />
        </div>
        </div>
}