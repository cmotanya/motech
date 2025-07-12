export const navigationItems = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about-us" },
  {
    title: "Services",
    path: "/services",
    children: [
      { title: "CCTV Installation", path: "/services/cctv-installation" },
      {
        title: "Biometric and Access Control",
        path: "/services/biometric-access-control",
      },
      { title: "Network Solutions", path: "/services/network-solutions" },
      { title: "Web Development", path: "/services/web-development" },
    ],
  },
  { title: "Solutions", path: "/solutions" },
  { title: "Support", path: "/support" },
  { title: "Contact Us", path: "/contact-us" },
];



