
import { BsCameraReels } from 'react-icons/bs';
import { GiTrumpet } from 'react-icons/gi';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { LiaPlaceOfWorshipSolid } from 'react-icons/lia';

const Card = ({ bgColor, IconComponent, title, description }) => {
    return (
        <div className={`card ${bgColor} shadow-2xl group relative overflow-hidden transition-all duration-300 h-80`}>
            {/* Default content (Icon and Title) */}
            <div className="flex flex-col items-center justify-center h-full transition-opacity duration-300 group-hover:opacity-0">
                <figure className="mb-4">
                    <IconComponent className="w-16 h-16 text-white" />
                </figure>
                <h2 className="text-white text-xl font-bold">{title}</h2>
            </div>
            {/* Hover content (Title and Description) */}
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
        <div className="max-w-6xl mx-auto mt-40 mb-20">
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
    );
};

export default Offerings;
