import { useEffect, useState } from "react";

const Review = () => {
    const array = [{ name: 'Tanvir Haque', designation: 'SQA TESTER', testimonialDescription:'Sundarbans Mangrove Forest: A mesmerizing experience exploring the Sundarbans, the largest mangrove forest in the world. The wildlife sightings, especially the Royal Bengal Tigers, were truly unforgettable Coxs Bazar Relaxing on the pristine beaches of Coxs Bazar was a highlight of my trip to Bangladesh.',keyWord: 'Child'}, { name: 'Khan Murtuja Fuad', designation: 'Project Manager', testimonialDescription: 'Bangkok: The vibrant street life, bustling markets, and magnificent temples of Bangkok offer an unforgettable cultural experiencePhuket: Phukets stunning beaches and vibrant nightlife make it a must-visit destination in Thailand.', keyWord: 'Gentlewoman'},{ name: 'Israt  Jerin Tonni', designation: 'Doctor', testimonialDescription: 'Bali: Balis lush rice terraces, ancient temples, and vibrant culture make it a paradise for travelers. Ubuds artistic charm and the stunning beaches of Uluwatu are not to be missed.', keyWord: 'Child'},{ name: 'Nusrat Jerin Tushi', designation: 'EEE Engineer', testimonialDescription: "Kuala Lumpur: The iconic Petronas Twin Towers and bustling street food scene in Kuala Lumpur are a testament to Malaysias vibrant culture and modernity.", keyWord: 'Individual'},{ name: 'Mamdud Sawad', designation: 'Banker', testimonialDescription: 'Hanoi: Hanois charming Old Quarter, vibrant markets, and delicious street food made it a highlight of my trip to Vietnam. Dont miss the serene beauty of Hoan Kiem Lake.', keyWord: 'Boy'},  

    { name: 'Mehedi Khan', designation: 'Digital Maketing Manager', testimonialDescription: 'Sri Lanka:Sigiriya: An ancient rock fortress and UNESCO World Heritage Site, featuring stunning frescoes, landscaped gardens, and panoramic views.', keyWord: 'Boy'},
    { name: 'Anik Haque', designation: 'Banker', testimonialDescription: 'Maldives: Male: The capital city and main gateway to the Maldives, offering cultural attractions, vibrant markets, and beautiful mosques. Baa Atoll: A UNESCO Biosphere Reserve known for its pristine beaches, crystal-clear waters, and diverse marine life, perfect for snorkeling and diving. ', keyWord: 'Boy'},
];

    const [currentSlider, setCurrentSlider] = useState(0);
    // The slider images array
    const prevSlider = () => setCurrentSlider((currentSlider) => (currentSlider === 0 ? array.length - 2 : currentSlider - 1));
    const nextSlider = () => setCurrentSlider((currentSlider) => (currentSlider === array.length - 2 ? 0 : currentSlider + 1));
    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlider();
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    }, [currentSlider]);

    const isSmallScreen = window.innerWidth <= 768;
    return (
        <div className="max-w-full min-w-[350px]  mx-auto h-[400px] flex flex-row items-center overflow-hidden gap-5  lg:gap-10 px-8 md:px-16 lg:px-24">
            <div className="relative overflow-hidden">
                <div className="absolute w-full h-full flex items-center justify-between z-50 px-5">
                    {/* arrow left */}
        <button onClick={prevSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"></path></g>
                        </svg>
                    </button>
                    {/* arrow right */}
                    <button onClick={nextSlider} className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8">
                        <svg viewBox="0 0 1024 1024" className="w-4 h-4 md:w-6 md:h-6 icon" xmlns="http://www.w3.org/2000/svg" fill="black" transform="rotate(180)"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fill="black" d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z" ></path></g>
                        </svg>
                    </button>
                </div>
                {/* slider container */}
                <div
                    className="ease-linear duration-300 flex"
                    style={{transform: `translateX(-${currentSlider * (isSmallScreen ? 100 : 50)}%)`}}>
                    {/* sliders */}
                    {array.map((each, idx) => (
                        <div key={idx} className="p-4   min-w-full md:min-w-[50%] ">
                            <div className="h-full p-8 rounded shadow-[0px_4px_12px_rgba(0,0,0,0.1)]  bg-red-50">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-slate-800 mb-4 " viewBox="0 0 975.036 975.036">
                                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                                </svg>
                                <p className="leading-relaxed mb-6 font-semibold text-gray-900 ">{each?.testimonialDescription}</p>
                                <a className="inline-flex items-center">
                                    <img className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" src={`https://source.unsplash.com/200x200/?${each.keyWord}`} alt="carousel navigate ui"  />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-bold text-gray-900">{each.name}</span>
                                        <span className="text-gray-500 text-sm font-bold">{each?.designation}</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Review;


        





