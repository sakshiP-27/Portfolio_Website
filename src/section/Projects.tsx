import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

export function Projects() {
    return (
        <div id="projects" className="flex flex-col items-center justify-center mt-28">
            <p className="text-6xl font-extrabold bg-gradient-to-r from-amber-500 to-amber-900 bg-clip-text text-transparent">
                Projects
            </p>
            <div className="w-[40rem] h-10 relative">
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-px w-1/4" />
            </div>
            
            {/* Updated container with reduced gap */}
            <div className="flex flex-col items-center justify-center mt-5 gap-6">
                {/* First row with two cards */}
                <div className="flex flex-row items-center justify-center gap-10">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-900 bg-clip-text text-transparent dark:text-white"
                            >
                                CarbonPulse
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                CarbonPulse is a web application designed to help users track and reduce their carbon footprint. It provides personalized recommendations, predictions for future emissions based on user's activities and a comprehensive dashboard to visualize their carbon impact.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                <span className="font-bold">Tech Stack: </span>
                                React, Node.js, Express, Typescript, Python, Flask, PostgreSQL, Tailwind CSS, PrismaORM, Docker
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://github.com/sakshiP-27/CarbonPulse"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-md font-normal dark:text-white flex flex-row"
                                >
                                    <svg width="21px" height="21px" viewBox="0 0 24 24" stroke-width="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    Link
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-900 bg-clip-text text-transparent dark:text-white"
                            >
                                Inventory Management System
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                Created an Inventory Management System for a furniture company, enabling them to efficiently manage their inventory, track stock levels, manage employee data, organize all the stores and list out all the suppliers. The system provides a user-friendly UI for it.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src="https://images.pexels.com/photos/4483775/pexels-photo-4483775.jpeg"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                <span className="font-bold">Tech Stack: </span>
                                PHP (Server side & Client side), OracleSQL, HTML, CSS
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://github.com/sakshiP-27/Inventory-Management-System"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-md font-normal dark:text-white flex flex-row"
                                >
                                    <svg width="21px" height="21px" viewBox="0 0 24 24" stroke-width="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    Link
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
                
                {/* Second row with single card */}
                <div className="flex flex-row items-center justify-center">
                    <CardContainer className="inter-var">
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold bg-gradient-to-r from-amber-500 to-amber-900 bg-clip-text text-transparent dark:text-white"
                            >
                                Fake Reviews Detection
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                                A Machine Learning model containing two algorithms to classify the user reviews in real or fake. This project is based on Supervised Learning Techniques and Natural Language Processing Techniques used to build model based on a textual dataset.
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src="https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg"
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                                <span className="font-bold">Tech Stack: </span>
                                Python, Jupyter Notebook, Scikit-Learn, Pandas, Numpy, Matplotlib, Seaborn
                            </CardItem>
                            <div className="flex justify-between items-center mt-10">
                                <CardItem
                                    translateZ={20}
                                    as="a"
                                    href="https://github.com/sakshiP-27/Fake-Reviews-Detection"
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-md font-normal dark:text-white flex flex-row"
                                >
                                    <svg width="21px" height="21px" viewBox="0 0 24 24" stroke-width="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.00005 19L19 5.99996M19 5.99996V18.48M19 5.99996H6.52005" stroke="#000000" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    Link
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                </div>
            </div>
        </div>
    )
}