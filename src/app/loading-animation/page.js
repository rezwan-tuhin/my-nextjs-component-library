import React from 'react'
import LoadingButton1 from '@/components/LoadingButton1';
import LoadingButton2 from '@/components/LoadingButton2';
import CircularLoader from '@/components/CircularLoader';
import LoadingDots1 from '@/components/LoadingDots1';
import LoadingDots2 from '@/components/LoadingDots2';
import Skeleton2 from '@/components/Skeleton2';
import Skeleton1 from '@/components/Skeleton1';
import Navbar from '@/components/MenuBar';

const LoadingAnimation = () => {
  return (
   <div className='min-h-screen w-screen'>
    <Navbar navBg='bg-white' textColor='text-black' />
     <div className=" p-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      
      <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
        <h2 className='text-lg font-semibold font-sour'>Loading button</h2>
        <p className='text-sm text-center px-2 text-gray-400 font-sour mb-4'>This component takes className props and accept any Tailwind classess. It also accepts children</p>
        <LoadingButton1 className='font-sour'>Loading...</LoadingButton1>
      </div>

      <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
        <h2 className='text-lg font-semibold font-sour'>Loading button</h2>
        <p className='text-sm text-center px-2 text-gray-400 font-sour mb-4'>This component takes className props and accept any Tailwind classess. It also accepts children</p>
        <LoadingButton2 className='font-sour'>Loading...</LoadingButton2>
      </div>

      

      {/* Loading circle with pure css */}
      <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
        <h2 className='text-lg font-semibold mb-4 font-sour'>Circular loader</h2>
        <CircularLoader />
        <p className="text-gray-500 text-sm">Fetching Data...</p>
      </div>


      <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
        <h2 className='text-lg font-semibold font-sour'>Loading dots</h2>
        <p className='text-sm text-center px-2 text-gray-400 font-sour mb-4'>This component takes className props and accept any Tailwind classess</p>
        <LoadingDots1 />
      </div>

      <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
        <h2 className='text-lg font-semibold font-sour'>Loading dots</h2>
        <p className='text-sm text-center px-2 text-gray-400 font-sour mb-4'>This component takes className props and accept any Tailwind classess</p>
        <LoadingDots2 />
      </div>


      <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
        <h2 className='text-lg font-semibold  font-sour px-3 text-center'>Skeleton Loading with Tailwind <br/> </h2>
        <p className='text-sm text-center px-2 text-gray-400 font-sour mb-4'>it takes className props and accept any Tailwind classess</p>

       <div className='flex flex-col w-full'>
       <Skeleton1 className='bg-black/15 h-12 w-12 rounded-full self-center'/>
        <Skeleton1 className='bg-black/15 '/>
        <Skeleton1 className='bg-black/15 w-[75%]' />
       </div>
        
      </div>

      <div className="flex flex-col justify-items-start items-center border py-4 border-gray-200 rounded-md shadow-md hover:scale-105 transition-transform duration-300">
        <h2 className='text-lg font-semibold  font-sour px-3 text-center'>Skeleton Loading with Tailwind + Raw CSS <br/> </h2>
        <p className='text-sm text-center px-2 text-gray-400 font-sour mb-4'>it takes className props and accept most of the Tailwind classess</p>

       <div className='flex flex-col w-full'>
       <Skeleton2 className='bg-black/15 h-12 w-12 rounded-full self-center'/>
        <Skeleton2 className='bg-black/15 '/>
        <Skeleton2 className='bg-black/15 w-[75%]' />
       </div>
        
      </div>
     
    </div>
   </div>
  );
}

export default LoadingAnimation;


// import React from 'react';

// const LoadingAnimation = () => {
//   return (
//     <div className="min-h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
//       <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Loading Animation Demo</h1>
        
//         <div className="mb-10">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Your CSS Spinner</h2>
//           <div className='flex flex-col justify-center items-center'>
//             <div className='loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16 mb-4 animate-spin border-t-blue-500'></div>
//             <p className='text-gray-500 text-sm'>Fetching Data..</p>
//           </div>
//         </div>
        
//         <div className="w-full border-t border-gray-200 mb-8"></div>
        
//         <div className="w-full">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4">Alternative Spinners</h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Spinner 1 */}
//             <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//               <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-3 animate-spin border-t-indigo-600"></div>
//               <p className='text-gray-500 text-xs text-center'>Smaller with Indigo</p>
//             </div>
            
//             {/* Spinner 2 */}
//             <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//               <div className="loader ease-linear rounded-full border-6 border-t-6 border-gray-300 h-14 w-14 mb-3 animate-spin border-t-green-500"></div>
//               <p className='text-gray-500 text-xs text-center'>Green Spinner</p>
//             </div>
            
//             {/* Spinner 3 */}
//             <div className="flex flex-col items-center p-4 bg-gray-50 rounded-lg">
//               <div className="loader ease-linear rounded-full border-10 border-t-10 border-gray-100 h-20 w-20 mb-3 animate-spin border-t-purple-600"></div>
//               <p className='text-gray-500 text-xs text-center'>Large Purple</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="mt-8 text-center text-gray-600 text-sm">
//           <p>All spinners created with pure CSS - no SVG required!</p>
//           <p className="mt-2">Animation powered by Tailwind CSS</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoadingAnimation;