
import { Button } from "@/components/ui/button";
import { Contact } from "lucide-react";

const Index = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:jesse.nosferatue@gmail.com";
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#171c2b] overflow-x-hidden">
      {/* Centered Content */}
      <div className="flex flex-1 flex-col items-center justify-center">
        {/* Logo & Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 mt-16 text-white select-none leading-tight font-orbitron">
          <span className="font-bold text-[#ff6737]">fire</span>
          <span className="font-bold text-[#6dd4ff] ml-0.5">Water</span>
          <span className="font-normal text-white ml-3">games studio</span>
        </h1>
        <div className="my-12 relative flex items-center justify-center">
          <div className="logo-glow-container w-[200px] h-[200px] md:w-[280px] md:h-[280px]">
            <img
              src="/lovable-uploads/42621c03-1f32-4567-a024-ac089c67e648.png"
              alt="fireWater games studio logo"
              className="relative w-full h-full object-contain z-10 select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
      {/* Contact Button at bottom */}
      <footer className="w-full pb-12 flex justify-center">
        <Button 
          size="lg"
          onClick={handleContactClick}
          className="rounded-full px-8 py-4 text-lg font-semibold bg-[#262e44] text-white hover:bg-[#2e3857] shadow-lg transition-all flex gap-2 items-center"
        >
          <Contact className="w-5 h-5 mr-2" />
          Contact Us
        </Button>
      </footer>
    </div>
  );
};

export default Index;
