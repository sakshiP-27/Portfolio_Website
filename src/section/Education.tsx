import { Timeline } from "@/components/ui/timeline";

export function Education() {
    const data = [
        {
            title: "2022 - 2025",
            content: (
                <div className="flex flex-col gap-1.5">
                    <p className="bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent text-3xl font-bold">
                        B.Sc in Data Science & Neuroscience
                    </p>
                    <p className="text-lg font-semibold italic text-neutral-600 dark:text-neutral-300">
                        Keele University, Keele, England, UK🇬🇧
                    </p>
                    <div className="flex flex-row gap-3 items-center">
                        <img src="https://drive.google.com/file/d/1sf3_G1q7DcMqvR84LuGoX2HtX2IVnwDE/view?usp=drive_link" alt="Keele University" className="w-64 h-40 rounded-lg shadow-xl" />
                        <img src="https://drive.google.com/file/d/1isyksOwjOH9EAVDlS4uIDXUwj3nc1XYw/view?usp=drive_link" alt="University" className="w-64 h-40 rounded-lg shadow-xl" />
                    </div>
                    <p className="text-2xl font-semibold text-neutral-500 dark:text-neutral-200 mt-2">
                        Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex gap-2 items-center">
                            <span className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-black rounded-lg border-2 border-gray-700">
                                Data Science
                            </span>
                            <span className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-black rounded-lg border-2 border-gray-700">
                                Machine Learning
                            </span>
                            <span className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-black rounded-lg border-2 border-gray-700">
                                Advanced Databases
                            </span>
                        </div>
                        <div className="flex gap-2 items-center w-full">
                            <span className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-black rounded-lg border-2 border-gray-700">
                                Statistical Analysis
                            </span>
                            <span className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-black rounded-lg border-2 border-gray-700">
                                Neural Networks
                            </span>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "2020 - 2022",
            content: (
                <div className="flex flex-col gap-1.5">
                    <p className="bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent text-3xl font-bold">
                        High School (ISC) in Science
                    </p>
                    <p className="text-lg font-semibold italic text-neutral-600 dark:text-neutral-300">
                        The Bishop's School, Pune, Maharashtra, India🇮🇳
                    </p>
                    <div className="flex flex-row gap-3 items-center">
                        <img src="https://drive.google.com/file/d/1cO0cTxxbuctjOJXqy832_X2x8CLlTNvR/view?usp=drive_link" alt="Bishop's School" className="w-72 h-40 rounded-lg shadow-xl" />
                    </div>
                    <p className="text-2xl font-semibold text-neutral-500 dark:text-neutral-200 mt-2">
                        Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <div className="flex gap-2 items-center">
                            <span className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-black rounded-lg border-2 border-gray-700">
                                Physics
                            </span>
                            <span className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-black rounded-lg border-2 border-gray-700">
                                Chemistry
                            </span>
                            <span className="px-3 py-1.5 text-sm font-medium bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-black rounded-lg border-2 border-gray-700">
                                Mathematics
                            </span>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <div id="education" className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}