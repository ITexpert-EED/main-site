// "use client";

// import React from "react";
// import Nav from "./component/Nav";
// import Image from "next/image";
// import Link from "next/link";
// import { socialLinks } from "@/data/socials";
// import { headerLinks } from "@/data/headerLinks";
// import { toggleMobileMenu } from "@/utlis/toggleMobileMenu";
// export default function Header2() {
//   return (
//     <header className="site-header mo-left header ext-header navstyle1">
//       <div className="top-bar">
//         <div className="container">
//           <div className="row d-flex justify-content-between align-items-center">
//             <div className="dlab-topbar-left">
//               <ul>
//                 {headerLinks.map((link, index) => (
//                   <li key={index}>
//                     <Link href={link.href}>{link.label}</Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="dlab-topbar-right">
//               <Link
//                 href={`/contact-1`}
//                 className="site-button radius-no btnhover11"
//               >
//                 GET A QUOTE
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="middle-bar bg-white">
//         <div className="container">
//           {/* website logo  */}
//           <div className="middle-area">
//             <div className="logo-header logo-dark">
//               <Link href={`/`}>
//                 <img alt="" src="/images/logo-2.png" width="258" height="75" />
//               </Link>
//             </div>
//             <div className="service-list">
//               <ul>
//                 <li>
//                   <i className="la la-phone" />
//                   <h4 className="title">
//                     <a href="tel:+4733378901">(+00)888.666.88</a>
//                   </h4>
//                   <span>Free Call</span>
//                 </li>
//                 <li>
//                   <i className="la la-clock-o" />
//                   <h4 className="title">08:00 AM - 06:00 PM</h4>
//                   <span>Monday - Friday</span>
//                 </li>
//                 <li>
//                   <i className="la la-map" />
//                   <h4 className="title">183 Donato Parkways</h4>
//                   <span>CA, United State</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* main header */}
//       <div className="sticky-header main-bar-wraper navbar-expand-lg">
//         <div className="main-bar clearfix">
//           <div className="container clearfix">
//             {/* website logo */}
//             <div className="logo-header mostion logo-dark">
//               <Link href={`/`}>
//                 <img alt="" src="/images/logo(2).png" width="258" height="75" />
//               </Link>
//             </div>
//             {/* nav toggle button */}
//             <button
//               className="navbar-toggler collapsed navicon justify-content-end"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavDropdown"
//               aria-controls="navbarNavDropdown"
//               aria-expanded="false"
//               onClick={toggleMobileMenu}
//               aria-label="Toggle navigation"
//             >
//               <span />
//               <span />
//               <span />
//             </button>
//             {/* extra nav */}
//             <div className="extra-nav">
//               <div className="extra-cell">
//                 <button
//                   id="quik-search-btn"
//                   type="button"
//                   className="site-button-link"
//                 >
//                   <i className="la la-search" />
//                 </button>
//               </div>
//             </div>
//             {/* Quik search */}

//             {/* main nav */}
//             <div
//               className="header-nav navbar-collapse collapse justify-content-start"
//               id="navbarNavDropdown"
//             >
//               <div className="logo-header d-md-block d-lg-none">
//                 <Link href={`/`}>
//                   <img
//                     alt=""
//                     src="/images/logo-2.png"
//                     width="258"
//                     height="75"
//                   />
//                 </Link>
//               </div>
//               <ul className="nav navbar-nav">
//                 <Nav />
//               </ul>
//               <div className="dlab-social-icon">
//                 <ul>
//                   {socialLinks.map((elm, i) => (
//                     <React.Fragment key={i}>
//                       <li>
//                         <a
//                           className={`site-button  sharp-sm outline ${elm.className}`}
//                           href={elm.href}
//                         />
//                       </li>{" "}
//                     </React.Fragment>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* main header END */}
//     </header>
//   );
// }
