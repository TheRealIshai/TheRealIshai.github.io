
import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#171c2b] overflow-x-hidden">
      {/* Centered Content */}
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Logo & Heading */}
        <h1 className="text-5xl md:text-7xl font-semibold mb-8 mt-16 text-white select-none leading-tight">
          <span className="font-semibold text-[#ff6737] animate-[fade-in_1s_ease-out]">fire</span>
          <span className="font-semibold text-[#6dd4ff] ml-0.5 animate-[fade-in_1s_100ms_ease-out]">Water</span>
          <span className="font-light text-white ml-3 animate-[fade-in_1s_200ms_ease-out]">games studio</span>
        </h1>
        <div className="my-12 relative flex items-center justify-center">
          {/* Animated Blue Flames Overlay */}
          <div className="blue-flames" aria-hidden>
            {/* SVG flame tongues layered - all these render as blue "flames" rising upward */}
            <svg className="blue-flame f1" viewBox="0 0 38 110" fill="none"><path d="M18.6,110 C5,76 8,46 19,30 C24,23 21,11 15,4 Q25,12 29,28 q5,17 -4,37 q19,10 9,45 z" fill="#53cffd" fillOpacity="0.54" /></svg>
            <svg className="blue-flame f2" viewBox="0 0 50 110" fill="none"><path d="M27,108 Q11,69 22,42 Q23,24 35,10 T40,24 Q43,31 37,45 Q53,60 32,100 z" fill="#9aeaff" fillOpacity="0.34" /></svg>
            <svg className="blue-flame f3" viewBox="0 0 44 110" fill="none"><path d="M28,108 Q14,61 25,39 Q34,24 26,10 T38,25 Q45,35 36,57 Q53,75 30,110 z" fill="#d0f3fe" fillOpacity="0.21" /></svg>
            <svg className="blue-flame f4" viewBox="0 0 34 110" fill="none"><path d="M12,109 Q8,74 18,56 Q18,35 28,16 T24,34 Q31,43 20,66 Q34,86 14,110 z" fill="#8addfc" fillOpacity="0.27" /></svg>
            <svg className="blue-flame f5" viewBox="0 0 28 110" fill="none"><path d="M18,111 Q16,85 23,67 Q23,54 27,41 T19,43 Q26,55 17,72 Q28,92 18,112 z" fill="#5ad1fa" fillOpacity="0.18" /></svg>
          </div>
          {/* Center Logo */}
          <img
            src="/lovable-uploads/42621c03-1f32-4567-a024-ac089c67e648.png"
            alt="fireWater games studio logo"
            className="w-[200px] md:w-[280px] h-auto drop-shadow-2xl z-20"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
      </div>
      {/* Contact Button at bottom */}
      <footer className="w-full pb-12 flex justify-center">
        <Button 
          size="lg"
          className="rounded-full px-8 py-4 text-lg font-semibold bg-[#262e44] text-white hover:bg-[#2e3857] shadow-lg transition-all flex gap-2 items-center animate-[fade-in_1s_200ms_ease-out]"
        >
          <Contact className="w-5 h-5 mr-2" />
          Contact Us
        </Button>
      </footer>
    </div>
  );
};

export default Index;

