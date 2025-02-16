// // @flow strict
// import Link from "next/link";


// function Navbar() {
//   return (
//     <nav className="bg-transparent">
//       <div className="flex items-center justify-between py-5">
//         <div className="flex flex-shrink-0 items-center">
//           <Link
//             href="/"
//             className=" text-[#16f2b3] text-3xl font-bold">
//             Kishan Kumawat
//           </Link>
//         </div>

//         <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
//               <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
//             </Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EXPERIENCE</div></Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div></Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div></Link>
//           </li>
         
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div></Link>
//           </li>
//           <li>
//             <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact"><div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACTS</div></Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
// "use client"; 
// import { useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-transparent px-4">
//       <div className="flex items-center justify-between py-5">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
//             Kishan Kumawat
//           </Link>
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white text-3xl"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Navigation Links */}
//         <ul
//           className={`absolute left-0 top-16 w-full flex-col items-center bg-black transition-transform duration-300 md:static md:flex md:w-auto md:flex-row md:space-x-4 ${
//             isOpen ? "flex" : "hidden"
//           }`}
//         >
//           {[
//             { name: "ABOUT", href: "/#about" },
//             { name: "EXPERIENCE", href: "/#experience" },
//             { name: "SKILLS", href: "/#skills" },
//             { name: "EDUCATION", href: "/#education" },
//             { name: "PROJECTS", href: "/#projects" },
//             { name: "CONTACT", href: "/#contact" },
//           ].map((link) => (
//             <li key={link.name}>
//               <Link
//                 className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
//                 href={link.href}
//                 onClick={() => setIsOpen(false)} // Close menu when clicked
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-transparent px-4">
//       <div className="flex items-center justify-between py-5">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
//             Kishan Kumawat
//           </Link>
//         </div>

//         {/* Hamburger Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white text-3xl"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Sidebar Menu for Mobile */}
//         <div
//           className={`fixed top-0 right-0 h-full w-2/3 bg-black shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 right-4 text-white text-3xl"
//           >
//             <FiX />
//           </button>

//           {/* Navigation Links */}
//           <ul className="flex flex-col items-center mt-16 space-y-6">
//             {[
//               { name: "ABOUT", href: "/#about" },
//               { name: "EXPERIENCE", href: "/#experience" },
//               { name: "SKILLS", href: "/#skills" },
//               { name: "EDUCATION", href: "/#education" },
//               { name: "PROJECTS", href: "/#projects" },
//               { name: "CONTACT", href: "/#contact" },
//             ].map((link) => (
//               <li key={link.name}>
//                 <Link
//                   className="block px-4 py-2 text-lg text-white transition-colors duration-300 hover:text-pink-600"
//                   href={link.href}
//                   onClick={() => setIsOpen(false)} // Close menu on click
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex md:space-x-4">
//           {[
//             { name: "ABOUT", href: "/#about" },
//             { name: "EXPERIENCE", href: "/#experience" },
//             { name: "SKILLS", href: "/#skills" },
//             { name: "EDUCATION", href: "/#education" },
//             { name: "PROJECTS", href: "/#projects" },
//             { name: "CONTACT", href: "/#contact" },
//           ].map((link) => (
//             <li key={link.name}>
//               <Link
//                 className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
//                 href={link.href}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-transparent px-4">
//       <div className="flex items-center justify-between py-5">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
//             Kishan Kumawat
//           </Link>
//         </div>

//         {/* Hamburger Menu Button (Mobile) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white text-3xl"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Sidebar Menu (Smaller Size) */}
//         <div
//           className={`fixed top-0 right-0 h-full w-48 bg-black shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 right-4 text-white text-2xl"
//           >
//             <FiX />
//           </button>

//           {/* Navigation Links */}
//           <ul className="flex flex-col mt-16 space-y-4 p-4">
//             {[
//               { name: "ABOUT", href: "/#about" },
//               { name: "EXPERIENCE", href: "/#experience" },
//               { name: "SKILLS", href: "/#skills" },
//               { name: "EDUCATION", href: "/#education" },
//               { name: "PROJECTS", href: "/#projects" },
//               { name: "CONTACT", href: "/#contact" },
//             ].map((link) => (
//               <li key={link.name}>
//                 <Link
//                   className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
//                   href={link.href}
//                   onClick={() => setIsOpen(false)} // Close menu when clicked
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex md:space-x-4">
//           {[
//             { name: "ABOUT", href: "/#about" },
//             { name: "EXPERIENCE", href: "/#experience" },
//             { name: "SKILLS", href: "/#skills" },
//             { name: "EDUCATION", href: "/#education" },
//             { name: "PROJECTS", href: "/#projects" },
//             { name: "CONTACT", href: "/#contact" },
//           ].map((link) => (
//             <li key={link.name}>
//               <Link
//                 className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
//                 href={link.href}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Menu icons

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent px-4 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-5">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
            Kishan Kumawat
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Sidebar Menu (Fixed & Smaller) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-[100] transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            <FiX />
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col mt-16 space-y-4 p-4">
            {[
              { name: "ABOUT", href: "/#about" },
              { name: "EXPERIENCE", href: "/#experience" },
              { name: "SKILLS", href: "/#skills" },
              { name: "EDUCATION", href: "/#education" },
              { name: "PROJECTS", href: "/#projects" },
              { name: "CONTACT", href: "/#contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
                  href={link.href}
                  onClick={() => setIsOpen(false)} // Close menu when clicked
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex md:space-x-4">
          {[
            { name: "ABOUT", href: "/#about" },
            { name: "EXPERIENCE", href: "/#experience" },
            { name: "SKILLS", href: "/#skills" },
            { name: "EDUCATION", href: "/#education" },
            { name: "PROJECTS", href: "/#projects" },
            { name: "CONTACT", href: "/#contact" },
          ].map((link) => (
            <li key={link.name}>
              <Link
                className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
// true i requerieed

export default Navbar;



// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [showNavbar, setShowNavbar] = useState(true);
//   let lastScrollY = 0;

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > lastScrollY) {
//         setShowNavbar(false); // Hide navbar on scroll down
//       } else {
//         setShowNavbar(true); // Show navbar on scroll up
//       }
//       lastScrollY = window.scrollY;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
//         showNavbar ? "translate-y-0" : "-translate-y-full"
//       } bg-transparent px-4`}
//     >
//       <div className="flex items-center justify-between py-5">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="text-[#16f2b3] text-3xl font-bold">
//             Kishan Kumawat
//           </Link>
//         </div>

//         {/* Hamburger Menu Button (Mobile) */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-white text-3xl"
//         >
//           {isOpen ? <FiX /> : <FiMenu />}
//         </button>

//         {/* Sidebar Menu */}
//         <div
//           className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg z-[100] transition-transform duration-300 ease-in-out md:hidden ${
//             isOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           {/* Close Button */}
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-4 right-4 text-white text-2xl"
//           >
//             <FiX />
//           </button>

//           {/* Navigation Links */}
//           <ul className="flex flex-col mt-16 space-y-4 p-4">
//             {[
//               { name: "ABOUT", href: "/#about" },
//               { name: "EXPERIENCE", href: "/#experience" },
//               { name: "SKILLS", href: "/#skills" },
//               { name: "EDUCATION", href: "/#education" },
//               { name: "PROJECTS", href: "/#projects" },
//               { name: "CONTACT", href: "/#contact" },
//             ].map((link) => (
//               <li key={link.name}>
//                 <Link
//                   className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
//                   href={link.href}
//                   onClick={() => setIsOpen(false)} // Close menu when clicked
//                 >
//                   {link.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex md:space-x-4">
//           {[
//             { name: "ABOUT", href: "/#about" },
//             { name: "EXPERIENCE", href: "/#experience" },
//             { name: "SKILLS", href: "/#skills" },
//             { name: "EDUCATION", href: "/#education" },
//             { name: "PROJECTS", href: "/#projects" },
//             { name: "CONTACT", href: "/#contact" },
//           ].map((link) => (
//             <li key={link.name}>
//               <Link
//                 className="block px-4 py-2 text-sm text-white transition-colors duration-300 hover:text-pink-600"
//                 href={link.href}
//               >
//                 {link.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

