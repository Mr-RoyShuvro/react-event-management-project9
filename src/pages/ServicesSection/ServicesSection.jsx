import Services from "../Home/Services";
import Navbar from "../Shared/Navbar";

const ServicesSection = () => {
    return (
        <div>
            <div className="bg-slate-500">
                <Navbar></Navbar>
            </div>
            <Services></Services>
        </div>
    );
};

export default ServicesSection;