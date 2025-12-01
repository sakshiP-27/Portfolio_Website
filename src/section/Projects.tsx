import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function Projects() {
    const projects = [
        {
            title: "CarbonPulse",
            description: "CarbonPulse is a web application designed to help users track and reduce their carbon footprint. It provides personalized recommendations, predictions for future emissions based on user's activities and a comprehensive dashboard to visualize their carbon impact.",
            image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            techStack: "React, Node.js, Express, Typescript, Python, Flask, PostgreSQL, Tailwind CSS, PrismaORM, Docker",
            link: "https://github.com/sakshiP-27/CarbonPulse"
        },
        {
            title: "Inventory Management System",
            description: "Created an Inventory Management System for a furniture company, enabling them to efficiently manage their inventory, track stock levels, manage employee data, organize all the stores and list out all the suppliers. The system provides a user-friendly UI for it.",
            image: "https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg",
            techStack: "PHP (Server side & Client side), OracleSQL, HTML, CSS",
            link: "https://github.com/sakshiP-27/Inventory-Management-System"
        },
        {
            title: "Trailer Virality Predictor",
            description: "A machine learning driven web application that analyzes YouTube trailers and predicts their early-stage virality using real time metadata, view velocity metrics, and a custom virality scoring algorithm. The project takes key statistics from YouTube trailer and generates a virality score.",
            image: "https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg",
            techStack: "Python, Machine Learning, Scikit-Learn, Streamlit, Youtube API v3",
            link: "https://trailerviralitypredictor-sakshiii27.streamlit.app/",
            githubLink: "https://github.com/sakshiP-27/Trailer_Virality_Predictor"
        },
        {
            title: "Fake Reviews Detection",
            description: "A Machine Learning model containing two algorithms to classify the user reviews in real or fake. This project is based on Supervised Learning Techniques and Natural Language Processing Techniques used to build model based on a textual dataset.",
            image: "https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg",
            techStack: "Python, Jupyter Notebook, Scikit-Learn, Pandas, Numpy, Matplotlib, Seaborn",
            link: "https://github.com/sakshiP-27/Fake-Reviews-Detection"
        },
        {
            title: "Credit Card Fraud Detection",
            description: "A Machine Learning model to detect fraudulent transactions in credit card data. The model uses various algorithms which are compared on their performance benchmarks on which model best predicts the fraudulent transactions.",
            image: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg",
            techStack: "Python, Scikit-Learn, Pandas, Matplotlib",
            link: "https://github.com/sakshiP-27/Fake-Reviews-Detection"
        }
    ];

    return (
        <div id="projects" className="flex flex-col items-center justify-center mt-28 overflow-hidden">
            <p className="text-6xl font-extrabold bg-gradient-to-r from-amber-500 to-amber-900 bg-clip-text text-transparent">
                Projects
            </p>
            <div className="w-[40rem] h-10 relative">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-px w-1/4" />
            </div>
            
            {/* Carousel Container */}
            <div className="relative w-full mt-10 overflow-hidden">
                <style>{`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(calc(-100% / 2));
                        }
                    }
                    .animate-scroll {
                        animation: scroll 25s linear infinite;
                        display: flex;
                        width: fit-content;
                    }
                    .animate-scroll:hover {
                        animation-play-state: paused;
                    }
                `}</style>
                
                <div className="flex animate-scroll">
                    {/* First set of cards */}
                    {projects.map((project, index) => (
                        <div key={`first-${index}`} className="flex-shrink-0 mx-5">
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[30rem] h-[600px] rounded-xl p-6 border flex flex-col">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-900 bg-clip-text text-transparent dark:text-white"
                                    >
                                        {project.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        {project.description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <img
                                            src={project.image}
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt={project.title}
                                        />
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                        <span className="font-bold">Tech Stack: </span>
                                        {project.techStack}
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-auto pt-4">
                                        <CardItem
                                            translateZ={20}
                                            as="a"
                                            href={project.link}
                                            target="__blank"
                                            className="px-4 py-2 rounded-xl text-md font-normal dark:text-white flex flex-row items-center gap-1"
                                        >
                                            <svg width="21px" height="21px" viewBox="0 0 24 24" strokeWidth="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                                <path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#000000" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            {project.title === "Trailer Virality Predictor" ? "Live Demo" : "Link"}
                                        </CardItem>
                                        {project.githubLink && (
                                            <CardItem
                                                translateZ={20}
                                                as="a"
                                                href={project.githubLink}
                                                target="__blank"
                                                className="px-4 py-2 rounded-xl text-md font-normal dark:text-white flex flex-row items-center gap-1"
                                            >
                                                <svg width="21px" height="21px" viewBox="0 0 24 24" strokeWidth="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                                    <path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#000000" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                GitHub
                                            </CardItem>
                                        )}
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {projects.map((project, index) => (
                        <div key={`second-${index}`} className="flex-shrink-0 mx-5">
                            <CardContainer className="inter-var">
                                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[30rem] h-[600px] rounded-xl p-6 border flex flex-col">
                                    <CardItem
                                        translateZ="50"
                                        className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-900 bg-clip-text text-transparent dark:text-white"
                                    >
                                        {project.title}
                                    </CardItem>
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                        {project.description}
                                    </CardItem>
                                    <CardItem translateZ="100" className="w-full mt-4">
                                        <img
                                            src={project.image}
                                            height="1000"
                                            width="1000"
                                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                            alt={project.title}
                                        />
                                    </CardItem>
                                    <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 flex-grow">
                                        <span className="font-bold">Tech Stack: </span>
                                        {project.techStack}
                                    </CardItem>
                                    <div className="flex justify-between items-center mt-auto pt-4">
                                        <CardItem
                                            translateZ={20}
                                            as="a"
                                            href={project.link}
                                            target="__blank"
                                            className="px-4 py-2 rounded-xl text-md font-normal dark:text-white flex flex-row items-center gap-1"
                                        >
                                            <svg width="21px" height="21px" viewBox="0 0 24 24" strokeWidth="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                                <path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#000000" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                            {project.title === "Trailer Virality Predictor" ? "Live Demo" : "Link"}
                                        </CardItem>
                                        {project.githubLink && (
                                            <CardItem
                                                translateZ={20}
                                                as="a"
                                                href={project.githubLink}
                                                target="__blank"
                                                className="px-4 py-2 rounded-xl text-md font-normal dark:text-white flex flex-row items-center gap-1"
                                            >
                                                <svg width="21px" height="21px" viewBox="0 0 24 24" strokeWidth="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000">
                                                    <path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#000000" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                GitHub
                                            </CardItem>
                                        )}
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}