// 'use client'
// import { ChevronDown, ChevronUp } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-transparent sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-center h-16 items-center">
         
//           {/* Desktop menu */}
//           <div className="hidden md:flex space-x-8 items-center">
//             <Link
//               href="/"
//               className="text-white bg-transparent rounded-md hover:bg-gray-200/25 transition-all px-4 py-1.5 duration-300"
//             >
//               Home
//             </Link>
//             <Link
//               href="#"
//               className="text-white bg-transparent rounded-md hover:bg-gray-200/25 transition-all px-4 py-1.5 duration-300"
//             >
//               About Me
//             </Link>

//             {/* Dropdown */}
//             <div className="relative">
//               <button
//                 onMouseOver={() => setDropdownOpen(!dropdownOpen)}
//                 className="flex items-center text-white bg-transparent rounded-md hover:bg-gray-200/25 transition-all px-4 py-1.5 duration-300 cursor-pointer"
//               >
//                 <span className="">Components</span>
//                 <span>{dropdownOpen? <ChevronUp size={16} /> : <ChevronDown size={16} />}</span>
//               </button>

//               {/* Dropdown menu */}
//               {dropdownOpen && (
//                 <div
//                   onMouseLeave={() => setDropdownOpen(false)}
//                   className="absolute mt-2 py-4 w-full md:w-[600px] grid grid-cols-1 md:grid-cols-2 bg-white rounded-md shadow-lg "
//                 >
//                   <Link
//                     href="/bg-video"
//                     className="block px-4 py-2"
//                   >
//                     <div className="p-2 rounded-md  hover:bg-indigo-100 transition-all duration-300">
//                     <h2 className="text-md  text-black mb-2">Video Background</h2>
//                     <p className="text-[11px] text-gray-500">In this component, you can explore how a video background can be implemented using video tag</p>
//                     </div>
//                   </Link>
//                   <Link
//                     href="/loading-animation"
//                     className="block px-4 py-2"
//                   >
//                     <div className="p-2 rounded-md  hover:bg-indigo-100 transition-all duration-300">
//                     <h2 className="text-md  text-black mb-2">Loading Animation</h2>
//                     <p className="text-[11px] text-gray-500">In this component, you can explore different types of loading animations.</p>
//                     </div>
//                   </Link>
                
                  
//                 </div>
//               )}
//             </div>

//             <Link
//               href="/contact"
//               className="text-white bg-transparent rounded-md hover:bg-gray-200/25 transition-all px-4 py-1.5 duration-300"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="text-gray-700 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
//               aria-label="Toggle menu"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 {mobileMenuOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slide-down">
//           <a
//             href="#"
//             className="block px-4 py-3 text-gray-700 hover:bg-indigo-100 transition"
//           >
//             Home
//           </a>
//           <a
//             href="#"
//             className="block px-4 py-3 text-gray-700 hover:bg-indigo-100 transition"
//           >
//             About
//           </a>

//           {/* Mobile dropdown */}
//           <div className="border-t border-gray-200">
//             <button
//               onClick={() => setDropdownOpen(!dropdownOpen)}
//               className="w-full text-left px-4 py-3 flex justify-between items-center text-gray-700 hover:bg-indigo-100 transition focus:outline-none"
//             >
//               <span>Services</span>
//               <svg
//                 className={`w-4 h-4 transform transition-transform ${
//                   dropdownOpen ? "rotate-180" : "rotate-0"
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 aria-hidden="true"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
//               </svg>
//             </button>

//             {dropdownOpen && (
//               <div className="pl-8 bg-gray-50">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:bg-indigo-200 transition"
//                 >
//                   Web Development
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:bg-indigo-200 transition"
//                 >
//                   Mobile Apps
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-700 hover:bg-indigo-200 transition"
//                 >
//                   Consulting
//                 </a>
//               </div>
//             )}
//           </div>

//           <a
//             href="#"
//             className="block px-4 py-3 text-gray-700 hover:bg-indigo-100 transition border-t border-gray-200"
//           >
//             Contact
//           </a>

//           <a
//             href="#"
//             className="block mx-4 my-3 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-md shadow-md text-center hover:from-indigo-600 hover:to-purple-700 transition"
//           >
//             Get Started
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }

'use client'
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar({navBg = 'bg-transparent', textColor = 'text-white'}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const mobileDropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Smooth dropdown transitions
  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!dropdownRef.current?.matches(":hover")) {
        setDropdownOpen(false);
      }
    }, 30);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const navItems = [
    { title: "Home", href: "/", mobileOnly: false },
    { title: "About Me", href: "#", mobileOnly: false },
    { title: "Contact", href: "/contact", mobileOnly: false },
  ];

  const dropdownItems = [
    {
      title: "Video Background",
      href: "/bg-video",
      description: "In this component, you can explore how a video background can be implemented using video tag"
    },
    {
      title: "Loading Animation",
      href: "/loading-animation",
      description: "In this component, you can explore different types of loading animations."
    },
  ];

  return (
    <nav className={`${navBg} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={` ${textColor} ${navBg} rounded-md hover:bg-gray-200/25 transition-all px-4 py-1.5 duration-300`}
              >
                {item.title}
              </Link>
            ))}

            {/* Dropdown */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center ${textColor} ${navBg} rounded-md hover:bg-gray-200/25 transition-all px-4 py-1.5 duration-300 cursor-pointer`}
                onClick={toggleDropdown}
              >
                <span>Components</span>
                <span className="ml-1">
                  {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </span>
              </button>

              {/* Dropdown menu with smooth transitions */}
              <div
                className={`absolute mt-2 py-4 w-full md:w-[480px] grid grid-cols-1 md:grid-cols-2 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-300 ${
                  dropdownOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2 pointer-events-none"
                }`}
              >
                {dropdownItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="block px-4 py-2"
                  >
                    <div className="p-2 rounded-md hover:bg-indigo-100 transition-all duration-300">
                      <h2 className="text-md text-black mb-2">{item.title}</h2>
                      <p className="text-[11px] text-gray-500">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2 rounded-md hover:bg-gray-200/25 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with unified structure */}
      {mobileMenuOpen && (
        <div 
          className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slide-down"
          ref={mobileDropdownRef}
        >
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:bg-indigo-100 transition border-t border-gray-200"
            >
              {item.title}
            </Link>
          ))}
          
          <div className="border-t border-gray-200">
            <button
              onClick={toggleDropdown}
              className="w-full text-left px-4 py-3 flex justify-between items-center text-gray-700 hover:bg-indigo-100 transition focus:outline-none"
            >
              <span>Components</span>
              <span>
                {dropdownOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${
              dropdownOpen ? "max-h-96" : "max-h-0"
            }`}>
              <div className="pl-8 bg-gray-50">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setDropdownOpen(false);
                    }}
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-200 transition border-b border-gray-200"
                  >
                    <h2 className="text-md text-black mb-1">{item.title}</h2>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
