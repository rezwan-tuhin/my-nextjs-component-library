import React from "react";
import VideoBackground from "@/components/VideoBg";
import Navbar from "@/components/MenuBar";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      <VideoBackground>
        <section className="flex flex-col h-screen">
          <Navbar />
          <div className="flex justify-center items-center flex-1">
            <div className="flex flex-col items-center">
              <h2 className="font-sour text-center text-shadow-xs text-shadow-amber-300 text-white text-[clamp(16px,_7vw,_96px)]">
                Continue your Journey!
              </h2>
              <p className="font-sour text-center text-white text-[clamp(11px,_2vw,_32px)] px-4 md:px-0">
                This is my practice book of Nextjs components. You can also
                explore with me
              </p>
              <Link
                href="https://github.com/rezwan-tuhin/my-nextjs-component-library" target="_blank"
                className="mt-4 text-[clamp(16px,_2vw,_24px)] border-2 border-white transition-all duration-600 text-white bg-black px-6 py-1 rounded-full animate-bounce-slow hover:animate-none "
              >
                GitHub
              </Link>
            </div>
          </div>
        </section>
      </VideoBackground>
    </div>
  );
};

export default Home;
