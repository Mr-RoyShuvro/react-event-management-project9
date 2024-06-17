import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true, // Show navigation arrows
        responsive: [
            {
                breakpoint: 1024, // Width at which the settings will apply
                settings: {
                    slidesToShow: 2, // Number of slides to show at this breakpoint
                    slidesToScroll: 1, // Number of slides to scroll at this breakpoint
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const slidesData = [
        {
            id: 1,
            name: "John Doe",
            jobTitle: "Event Manager",
            description: "I love creating memorable experiences and ensuring every detail is perfect.",
            image: "https://i.ibb.co/1zKdQm8/Screenshot-1708.png"
        },
        {
            id: 2,
            name: "Jane Smith",
            jobTitle: "Marketing Specialist",
            description: "My passion is to craft engaging campaigns that connect with our audience.",
            image: "https://i.ibb.co/CH4wyqW/Screenshot-1702.png"
        },
        {
            id: 3,
            name: "Alice Johnson",
            jobTitle: "Operations Coordinator",
            description: "I focus on streamlining processes to ensure seamless event execution.",
            image: "https://i.ibb.co/6nyJVj7/Screenshot-1707.png"
        },
        {
            id: 4,
            name: "Bob Brown",
            jobTitle: "Technical Director",
            description: "I enjoy bringing events to life with cutting-edge technology and innovation.",
            image: "https://i.ibb.co/QHncBzD/Screenshot-1703.png"
        },
        {
            id: 5,
            name: "Carol White",
            jobTitle: "Creative Director",
            description: "Designing immersive and captivating event environments is my specialty.",
            image: "https://i.ibb.co/LZcZDkk/Screenshot-1705.png"
        },
        {
            id: 6,
            name: "David Green",
            jobTitle: "Financial Analyst",
            description: "I ensure we stay within budget while delivering top-notch events.",
            image: "https://i.ibb.co/wLJqpRG/Screenshot-1706.png"
        },
        {
            id: 7,
            name: "Emma Black",
            jobTitle: "Client Relations Manager",
            description: "Building strong relationships with our clients and exceeding their expectations.",
            image: "https://i.ibb.co/8KjkkpR/Screenshot-1704.png"
        },
        {
            id: 8,
            name: "Frank Wilson",
            jobTitle: "Logistics Coordinator",
            description: "I take pride in managing logistics to ensure every event runs smoothly.",
            image: "https://i.ibb.co/ZMJT6Fy/Screenshot-1709.png"
        }
    ];

    return (
        <div>
            <div className="min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/M8Q9xMk/Screenshot-1710.png)' }}>
                <div className="hero-overlay bg-opacity-30 min-h-screen pb-28">
                    <h3 className="text-center text-xl font-medium pb-3 text-white pt-20">Our best team</h3>
                    <h3 className="text-center text-3xl font-extrabold text-yellow-300 pb-10">Our Team of Professionals</h3>
                    <div className="about-slider-container">
                        <Slider {...settings}>
                            {slidesData.map((slide) => (
                                <div key={slide.id} className="slide">
                                    <div className="card-about bg-white shadow-md p-4 rounded-none mx-auto">
                                        <img src={slide.image} alt={slide.jobTitle} className="rounded-full w-20 h-24 mx-auto" />
                                        <div className="pt-3">
                                            <h2 className="text-lg font-bold text-black">{slide.name}</h2>
                                            <h3 className="text-sm font-medium text-black">{slide.jobTitle}</h3>
                                            <p className="pt-8 pb-20 px-2 text-sm text-slate-500">{slide.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

// CSS-in-JS for simplicity
const styles = `
  .about-slider-container {
    width: 80%;
    margin: auto;
    padding: 20px;
  }

  .slide {
    position: relative;
    text-align: center;
    background: transparent; /* No background for the slide */
    margin: 0 10px;  /* Adjust margin to create a gap between slides */
    padding: 0; /* Remove padding to avoid extra space */
  }

  .card-about {
    width: calc(100% - 20px); /* Adjust width to account for margin */
    background: #f7f7f7;
    border: none; /* Remove any border */
    box-shadow: none; /* Remove any shadow */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 50px 20px 20px 20px; /* Adjust padding inside the card */
  }
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default AboutSlider;
