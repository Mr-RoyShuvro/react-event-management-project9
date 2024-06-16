import Carousels from "./Carousels";
import Offerings from "./Offerings";
import Services from "./Services";
import About from "../About/About"
import Contact from "../Contact/Contact";


const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <Offerings></Offerings>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;