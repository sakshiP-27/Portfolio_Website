import { CardSpotlight } from "@/components/ui/card-spotlight";

export function About() {
   return (
    <div className="flex flex-col items-center justify-center">
        <p className="text-6xl font-extrabold bg-gradient-to-r from-amber-500 to-amber-900 bg-clip-text text-transparent">
            About Me
        </p>
        <div className="w-[40rem] h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-yellow-400 to-transparent h-px w-1/4" />
        </div>
        <p className="text-amber-800 dark:text-neutral-300 text-lg font-extrabold md:text-base max-w-4xl text-center">
            I am a passionate data scientist with a keen interest in data analysis and machine learning algorithms.
            Over the course of my academic journey, I have developed a strong foundation in Python, SQL and various data visualization and analysis tools.
        </p>
        <p className="text-amber-500 text-2xl underline text-center font-extrabold mt-7">
            Achievements & Responsibilities
        </p>
        <div className="flex flex-row gap-5">
            <CardSpotlight className="h-96 w-80 bg-amber-950 mt-4 shadow-xl" radius={350} color="#facc15">
                <p className="text-2xl font-bold relative z-20 mt-2 text-white flex flex-row gap-1">
                    <svg width="21px" height="21px" viewBox="0 0 24 24" stroke-width="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" className="mt-1.5"><path d="M8 12H17M8 12L6 10H2L4 12L2 14H6L8 12ZM17 12L15 10M17 12L15 14" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 22.5C18.7614 22.5 21 17.799 21 12C21 6.20101 18.7614 1.5 16 1.5C13.2386 1.5 11 6.20101 11 12C11 17.799 13.2386 22.5 16 22.5Z" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     Achievement
                </p>
                <p className="text-lg text-white mt-3 font-semibold">
                    First Place Holder
                </p>
                <span className="text-sm text-white italic mt-0.5"> BCS Lovelace Colloquium</span>
                <p className="mt-2.5 text-sm text-white">
                    <ul>
                        <li>
                            * Won the 18th BCSWomen Lovelace Colloquium, April 2025 poster competition in the Final Year Category held at the University of Glasgow.
                        </li>
                        <li className="mt-1">
                            * The poster was based on the research / projects students have implemented in their respective year of study.
                        </li>
                    </ul>
                </p>
            </CardSpotlight>
            <CardSpotlight className="h-96 w-80 bg-amber-950 mt-4 shadow-xl" radius={350} color="#facc15">
                <p className="text-2xl font-bold relative z-20 mt-2 text-white flex flex-row gap-1">
                    <svg width="21px" height="21px" viewBox="0 0 24 24" stroke-width="1.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" className="mt-1.5"><path d="M8 12H17M8 12L6 10H2L4 12L2 14H6L8 12ZM17 12L15 10M17 12L15 14" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16 22.5C18.7614 22.5 21 17.799 21 12C21 6.20101 18.7614 1.5 16 1.5C13.2386 1.5 11 6.20101 11 12C11 17.799 13.2386 22.5 16 22.5Z" stroke="#ffffff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                     Responsibility
                </p>
                <p className="text-lg text-white mt-3 font-semibold">
                    Lead Student Voice Rep
                </p>
                <span className="text-sm text-white italic mt-0.5"> Keele University</span>
                <p className="mt-2.5 text-sm text-white">
                    <ul>
                        <li>
                            * As the Lead Student Voice Representative at Keele University, I work to ensure students' feedback is heard and valued.
                        </li>
                        <li className="mt-1">
                            * My goal is to create a positive impact on campus by collaborating with students and staff to improve the Keele experience for everyone.
                        </li>
                    </ul>
                </p>
            </CardSpotlight>
        </div>
    </div>
   );
}