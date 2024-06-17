import Carousels from "./Carousels";
import Offerings from "./Offerings";
import Services from "./Services";
import About from "../About/About"
import Contact from "../Contact/Contact";
import Events from "../Events/Events";


const Home = () => {
    return (
        <div>
            <Carousels></Carousels>
            <Events></Events>
            <Offerings></Offerings>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;