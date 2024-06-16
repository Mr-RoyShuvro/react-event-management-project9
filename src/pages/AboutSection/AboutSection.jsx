import Navbar from "../Shared/Navbar";
import About from "../About/About"

const AboutSection = () => {
    return (
        <div>
            <div className="bg-slate-500">
                <Navbar></Navbar>
            </div>
            <About></About>
        </div>
    );
};

export default AboutSection;