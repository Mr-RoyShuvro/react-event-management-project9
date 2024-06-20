import PropTypes from 'prop-types';
import { BsCameraReels } from 'react-icons/bs';
import { GiTrumpet } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { LiaPlaceOfWorshipSolid } from 'react-icons/lia';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Card = ({ bgColor, IconComponent, title, description }) => {
    return (
        <div className={`card ${bgColor} shadow-2xl group relative overflow-hidden transition-all duration-300 h-80`}>
            {/* Default */}
            <div className="flex flex-col items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
                <figure className="mb-4">
                    <IconComponent className="w-16 h-16 text-white" />
                </figure>
                <h2 className="text-white text-xl font-bold">{title}</h2>
            </div>
            {/* Hover */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 text-center">
                <h2 className="text-gray-800 text-xl font-bold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

const Offerings = () => {
    const cards = [
        {
            bgColor: 'bg-yellow-500',
            IconComponent: LiaPlaceOfWorshipSolid,
            title: 'Venue Selection',
            description: 'Finding the perfect venue for your event is our specialty. We ensure your event’s success with an ideal location.'
        },
        {
            bgColor: 'bg-cyan-500',
            IconComponent: BsCameraReels,
            title: 'Documentation',
            description: 'We handle all paperwork and legalities including permits, contracts, and insurance for a worry-free event.'
        },
        {
            bgColor: 'bg-rose-500',
            IconComponent: GiTrumpet,
            title: 'Entertainment',
            description: 'We provide top-notch entertainment options to captivate your guests and create unforgettable experiences.'
        },
        {
            bgColor: 'bg-gray-600',
            IconComponent: HiOutlineLightBulb,
            title: 'Decoration',
            description: 'Our creative team transforms your vision with stunning decorations, making your event truly memorable.'
        }
    ];

    return (
        <div data-aos="fade-left">
            <div className="max-w-6xl mx-auto mt-20 mb-36">
                <h2 className="text-center text-3xl font-extrabold text-rose-500 pb-3">It’s simple. You have an event to plan and
                    <br /> we have the solutions</h2>
                <h3 className="text-center text-lg font-medium pb-10">Here is how we can help you</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {cards.map((card, index) => (
                        <Card
                            key={index}
                            bgColor={card.bgColor}
                            IconComponent={card.IconComponent}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offerings;


Offerings.propTypes = {
    bgColor: PropTypes.string,
    IconComponent: PropTypes.func,
    title: PropTypes.string,
    description: PropTypes.string
}