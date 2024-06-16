import Contact from "../Contact/Contact";
import Navbar from "../Shared/Navbar";


const ContactSection = () => {
    return (
        <div>
            <div className="bg-slate-500">
                <Navbar></Navbar>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default ContactSection;