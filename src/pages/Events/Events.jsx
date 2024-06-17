import { BsCake2 } from "react-icons/bs";
import { GiLinkedRings, GiPartyPopper } from "react-icons/gi";

const Events = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto">
            <div className="rounded-lg card-container group mx-auto w-full max-w-sm p-4 bg-white shadow-lg transform transition-transform duration-300 hover:scale-75 hover:bg-gradient-to-r hover:from-red-700 hover:to-yellow-600 -translate-y-20 z-20">
                <GiLinkedRings className="w-20 h-20 text-orange-500 mx-auto transition-colors duration-300 group-hover:text-white" />
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2 text-center text-yellow-400 transition-colors duration-300 group-hover:text-white">
                        Wedding Party
                    </h2>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
                    Create your dream wedding with elegance. Let us handle the details, so you can cherish every moment.
                    </p>
                </div>
            </div>
            <div className="rounded-lg card-container group mx-auto w-full max-w-sm p-4 bg-white shadow-lg transform transition-transform duration-300 hover:scale-75 hover:bg-gradient-to-r hover:from-red-700 hover:to-yellow-600 -translate-y-20 z-20">
                <BsCake2 className="w-20 h-20 text-orange-500 mx-auto transition-colors duration-300 group-hover:text-white" />
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2 text-center text-yellow-400 transition-colors duration-300 group-hover:text-white">
                        Birthday Party
                    </h2>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
                    Celebrate your special day with a personalized party that is fun, memorable, and just for you.
                    </p>
                </div>
            </div>
            <div className="rounded-lg card-container group mx-auto w-full max-w-sm p-4 bg-white shadow-lg transform transition-transform duration-300 hover:scale-75 hover:bg-gradient-to-r hover:from-red-700 hover:to-yellow-600 -translate-y-20 z-20">
                <GiPartyPopper className="w-20 h-20 text-orange-500 mx-auto transition-colors duration-300 group-hover:text-white" />
                <div className="p-4">
                    <h2 className="text-2xl font-bold mb-2 text-center text-yellow-400 transition-colors duration-300 group-hover:text-white">
                        Party & Events
                    </h2>
                    <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">
                    Host a standout event with a seamless blend of creativity and professionalism, tailored to impress.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Events;