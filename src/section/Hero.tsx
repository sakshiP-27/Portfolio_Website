import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Hero() {
  const words = [
    {
      text: "Sakshi",
    },
    {
      text: "Paygude",
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-amber-950 font-bold dark:text-neutral-200 text-xl mb-3">
        Hello There, I am
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col items-center mt-3 text-xl text-amber-950">
        <div className="flex flex-row items-center space-x-1 mb-8">
            <svg width="27px" height="27px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000" strokeWidth="1.9"><path fillRule="evenodd" clipRule="evenodd" d="M20.75 16.7143C20.75 16.7631 20.7453 16.8109 20.7364 16.8571C20.7453 16.9034 20.75 16.9511 20.75 17C20.75 17.4142 20.4142 17.75 20 17.75H6C5.30964 17.75 4.75 18.3096 4.75 19C4.75 19.6904 5.30964 20.25 6 20.25H20C20.4142 20.25 20.75 20.5858 20.75 21C20.75 21.4142 20.4142 21.75 20 21.75H6C4.48122 21.75 3.25 20.5188 3.25 19V5C3.25 3.48122 4.48122 2.25 6 2.25H19.4C20.1456 2.25 20.75 2.85442 20.75 3.6V16.7143ZM9 6.25C8.58579 6.25 8.25 6.58579 8.25 7C8.25 7.41421 8.58579 7.75 9 7.75H15C15.4142 7.75 15.75 7.41421 15.75 7C15.75 6.58579 15.4142 6.25 15 6.25H9Z" fill="#78350f"></path></svg>
            <span>Data Science Undergrad @  
                <a href="https://www.keele.ac.uk/" className="font-extrabold">Keele University</a>
            , UK</span>
        </div>
        <div className="flex flex-row space-x-4 items-center justify-center mb-6">
            <button className="flex items-center justify-center gap-2 w-40 h-12 rounded-xl bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-amber-800 hover:text-amber-900 border-2 border-amber-800 hover:border-amber-900 text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl" onClick={() => window.open("https://drive.google.com/file/d/1RvgXDPd123RFmgSwbjZcVFFg2bVpVNp8/view?usp=drive_link", "_blank")}>
                My Resume
                <svg width="18px" height="18px" viewBox="0 0 24 24" strokeWidth="1.9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 21.4V2.6C4 2.26863 4.26863 2 4.6 2H16.2515C16.4106 2 16.5632 2.06321 16.6757 2.17574L19.8243 5.32426C19.9368 5.43679 20 5.5894 20 5.74853V21.4C20 21.7314 19.7314 22 19.4 22H4.6C4.26863 22 4 21.7314 4 21.4Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 10L16 10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 18L16 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8 14L12 14" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M16 2V5.4C16 5.73137 16.2686 6 16.6 6H20" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
            <button className="flex items-center justify-center gap-2 w-40 h-12 rounded-xl bg-white hover:bg-gradient-to-br from-[#fdf6f0] via-[#f7e4e1] to-[#edd7f3] text-amber-800 hover:text-amber-900 border-2 border-amber-800 hover:border-amber-900 text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl" onClick={() => window.open("https://www.linkedin.com/in/sakshi-paygude/", "_blank")}>
                Let's Connect
                <svg width="18px" height="18px" strokeWidth="1.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 17V13.5V10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path><path d="M7 7.01L7.01 6.99889" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </button>
        </div>
        <div className="max-w-2xl text-center">
          <p className="text-amber-900 text-base leading-relaxed">
            Passionate about Data Analysis, Machine Learning and Artificial Intelligence in general. Open to exciting opportunities in data based roles.
          </p>
        </div>
      </div>
    </div>
  );
}