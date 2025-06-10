import React from "react";
import LoadingButton1 from "@/components/LoadingButton1";
import LoadingButton2 from "@/components/LoadingButton2";
import CircularLoader from "@/components/CircularLoader";
import LoadingDots1 from "@/components/LoadingDots1";
import LoadingDots2 from "@/components/LoadingDots2";
import Skeleton2 from "@/components/Skeleton2";
import Skeleton1 from "@/components/Skeleton1";
import Navbar from "@/components/MenuBar";

const LoadingAnimation = () => {
  return (
    <div className="min-h-screen w-screen">
      <Navbar navBg="bg-white" textColor="text-black" />
      <div className=" p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">


        {/* Loading button1 */}
        <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold font-sour">Loading button</h2>
          <p className="text-sm text-center px-2 text-gray-400 font-sour mb-4">
            This component takes className props and accept any Tailwind
            classess. It also accepts children
          </p>
          <LoadingButton1 className="font-sour">Loading...</LoadingButton1>
        </div>


        {/* Loading button2 */}

        <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold font-sour">Loading button</h2>
          <p className="text-sm text-center px-2 text-gray-400 font-sour mb-4">
            This component takes className props and accept any Tailwind
            classess. It also accepts children
          </p>
          <LoadingButton2 className="font-sour">Loading...</LoadingButton2>
        </div>

        {/* Loading circle with pure css */}
        <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold mb-4 font-sour">
            Circular loader
          </h2>
          <CircularLoader />
          <p className="text-gray-500 text-sm">Fetching Data...</p>
        </div>


        {/* Loading Dots1 */}

        <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold font-sour">Loading dots</h2>
          <p className="text-sm text-center px-2 text-gray-400 font-sour mb-4">
            This component takes className props and accept any Tailwind
            classess
          </p>
          <LoadingDots1 />
        </div>


        {/* Loading Dots2 */}

        <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold font-sour">Loading dots</h2>
          <p className="text-sm text-center px-2 text-gray-400 font-sour mb-4">
            This component takes className props and accept any Tailwind
            classess
          </p>
          <LoadingDots2 />
        </div>


        {/* Skeleton1 */}

        <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold  font-sour px-3 text-center">
            Skeleton Loading with Tailwind <br />{" "}
          </h2>
          <p className="text-sm text-center px-2 text-gray-400 font-sour mb-4">
            it takes className props and accept any Tailwind classess
          </p>

          <div className="flex flex-col w-full">
            <Skeleton1 className="bg-black/15 h-12 w-12 rounded-full self-center" />
            <Skeleton1 className="bg-black/15 " />
            <Skeleton1 className="bg-black/15 w-[75%]" />
          </div>
        </div>


        {/* Skeleton2 */}

        <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
          <h2 className="text-lg font-semibold  font-sour px-3 text-center">
            Skeleton Loading with Tailwind + Raw CSS <br />{" "}
          </h2>
          <p className="text-sm text-center px-2 text-gray-400 font-sour mb-4">
            it takes className props and accept most of the Tailwind classess
          </p>

          <div className="flex flex-col w-full">
            <Skeleton2 className="bg-black/15 h-12 w-12 rounded-full self-center" />
            <Skeleton2 className="bg-black/15 " />
            <Skeleton2 className="bg-black/15 w-[75%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
