// src/data/projects.js
import masakkaliCover from "../assets/Projects/project1.png";
import cafeAzizCover from "../assets/Projects/project2Cafe.jpg";
import happinessHillCover from '../assets/Projects/project3Happiness.png'
export const PROJECTS_DATA = [
  {
    id: "masakkali-courier",
    title: "Masakkali Courier",
    tagline: "End-to-end parcel delivery & logistics platform",
    shortDescription:
      "Full-stack courier management system with role-based dashboards, real-time tracking, and secure payment integration.",
    fullDescription:
      "A comprehensive MERN stack parcel delivery platform featuring three role-based dashboards (User, Admin, Rider). The system manages the complete parcel lifecycle from booking to delivery with real-time tracking, dynamic pricing, secure payment processing via Stripe, and digital proof of delivery. Includes advanced features like service center assignment, rider earning system, and detailed analytics.",

    // Visual Assets
    cover: masakkaliCover,
    gallery: [
      masakkaliCover,
    ],

    // Tech Stack
    stack: {
      frontend: ["React", "Tailwind CSS", "Framer Motion", "React Hook Form"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["JWT", "Firebase Auth"],
      payment: ["Stripe"],
      other: ["Axios", "React Query", "React Toastify"],
    },

    // Key Features (for highlights)
    features: [
      {
        title: "Role-Based Dashboards",
        description:
          "Separate interfaces for Users, Admins, and Riders with tailored functionality",
      },
      {
        title: "6-Digit Tracking System",
        description: "Unique tracking numbers for real-time parcel monitoring",
      },
      {
        title: "Dynamic Pricing Engine",
        description:
          "Automated cost calculation based on type, weight, and service center",
      },
      {
        title: "Rider Earning System",
        description: "Automated earnings tracking with ৳20 per pickup/delivery",
      },
      {
        title: "8-Stage Parcel Lifecycle",
        description:
          "Complete workflow from unpaid to delivered with timeline tracking",
      },
      {
        title: "Stripe Payment Integration",
        description:
          "Secure card-based payment processing with transaction history",
      },
    ],

    // Technical Highlights (for technical details)
    technicalHighlights: [
      "JWT-based authentication with role-based access control",
      "RESTful API architecture with Express.js",
      "MongoDB aggregation pipelines for analytics",
      "Real-time status updates across dashboards",
      "Responsive design with Tailwind CSS",
      "Form validation with React Hook Form",
    ],

    // Links
    links: {
      live: "https://masakkali-courier.web.app",
      github: {
        client: "https://github.com/Hridoykhan4/Masakkali_Courier_Client",
        server: "https://github.com/Hridoykhan4/Masakkali_Courier_Server",
      },
    },

    // Stats
    stats: {
      roles: 3,
      parcelStates: 8,
      dashboards: 3,
      users: "Multi-tenant",
    },

    // SEO & Metadata
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe", "JWT"],
    category: "Full Stack",
    featured: true,
    completionDate: "2024-12",
    duration: "1 months",

    // Display Priority
    order: 1,
  },

  {
    id: "cafe-aziz-hotel",
    title: "Cafe Aziz Hotel Kaptai",
    tagline: "Modern restaurant management system",
    shortDescription:
      "Full-featured restaurant platform with online ordering, menu management, and table booking.",
    fullDescription:
      "A comprehensive restaurant management system built with MERN stack featuring online food ordering, dynamic menu management, table reservation system, and order tracking. Includes Firebase authentication, responsive design, and real-time updates for seamless dining experience.",

    cover: cafeAzizCover, 
    gallery: [cafeAzizCover],

    stack: {
      frontend: ["React", "Tailwind CSS", "DaisyUI"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["Firebase Auth"],
      other: ["Axios", "React Router"],
    },

    features: [
      {
        title: "Dynamic Menu Management",
        description:
          "Admin can add, update, and remove menu items with pricing",
      },
      {
        title: "Online Ordering System",
        description: "Customers can browse menu and place orders online",
      },
      {
        title: "Table Booking",
        description: "Reservation system with availability checking",
      },
      {
        title: "Order Tracking",
        description: "Real-time status updates from preparation to delivery",
      },
    ],

    technicalHighlights: [
      "Firebase authentication for secure access",
      "MongoDB for menu and order management",
      "Responsive design for mobile ordering",
      "RESTful API for all operations",
    ],

    links: {
      live: "https://cafe-aziz.web.app",
      github: {
        client: "https://github.com/Hridoykhan4/Cafe_Aziz_Hotel_Kaptai_Client",
        server: "https://github.com/Hridoykhan4/Cafe_Aziz_Hotel_Kaptai_Server",
      },
    },

    stats: {
      menuItems: "50+",
      categories: "Multiple",
    },

    tags: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind"],
    category: "Full Stack",
    featured: true,
    completionDate: "2024-10",
    order: 2,
  },

  {
    id: "happiness-hill",
    title: "Happiness Hill Resort",
    tagline: "Hotel booking & management platform",
    shortDescription:
      "Elegant hotel booking system with secure authentication and reservation management.",
    fullDescription:
      "A sophisticated hotel booking platform featuring JWT-based authentication, room browsing, booking system with date selection, and user dashboard for managing reservations. Built with MERN stack for robust performance and security.",

    cover: happinessHillCover, 
    gallery: [happinessHillCover],

    stack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["JWT"],
      other: ["Axios", "React Router"],
    },

    features: [
      {
        title: "JWT Security",
        description: "Secure token-based authentication system",
      },
      {
        title: "Room Booking",
        description: "Browse rooms and make reservations with date selection",
      },
      {
        title: "User Dashboard",
        description: "Manage bookings and view reservation history",
      },
      {
        title: "Availability Checker",
        description: "Real-time room availability status",
      },
    ],

    technicalHighlights: [
      "JWT token management with refresh tokens",
      "Axios interceptors for auth handling",
      "MongoDB date-based queries for availability",
      "Protected routes with authentication middleware",
    ],

    links: {
      github:
        "https://github.com/Hridoykhan4/Backend_JWT_Axios_5_Happiness_Hill",
      live: "https://happiness-hill.web.app",
      case_study: null,
    },

    tags: ["React", "Node.js", "JWT", "MongoDB", "Express"],
    category: "Full Stack",
    featured: true,
    completionDate: "2024-09",
    order: 3,
    gridSpan: "lg:col-span-1 lg:row-span-1",
  },

  {
    id: "volora-platform",
    title: "Volora Platform",
    tagline: "Modern web application with secure backend",
    shortDescription:
      "Responsive web application featuring secure authentication and modern UI design.",
    fullDescription:
      "A modern web platform built with MERN stack featuring secure backend architecture, RESTful API design, and responsive frontend. Implements best practices for authentication, data validation, and user experience.",

    cover: "/projects/volora.jpg", // Add your image
    gallery: [],

    stack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["JWT"],
      other: ["Axios"],
    },

    features: [
      {
        title: "RESTful API",
        description: "Well-structured API endpoints following REST principles",
      },
      {
        title: "Responsive UI",
        description: "Mobile-first design with Tailwind CSS",
      },
      {
        title: "Secure Backend",
        description: "JWT authentication and data validation",
      },
    ],

    technicalHighlights: [
      "Express.js middleware architecture",
      "MongoDB schema design and validation",
      "Axios HTTP client with error handling",
      "Tailwind utility-first CSS approach",
    ],

    links: {
      github: "https://github.com/Hridoykhan4/Backend_JWT_Axios_4_Volora",
      live: "https://volora.web.app",
      case_study: null,
    },

    tags: ["React", "Node.js", "MongoDB", "JWT", "Tailwind"],
    category: "Front End",
    featured: false,
    completionDate: "2024-08",
    order: 4,
    gridSpan: "lg:col-span-1 lg:row-span-1",
  },

  // Placeholder for Medical Camp (you'll add this later)
  {
    id: "medcamp-management",
    title: "MedCamp Management",
    tagline: "Medical camp organization platform",
    shortDescription:
      "Comprehensive platform for managing medical camps with participant registration.",
    fullDescription:
      "A full-stack medical camp management system featuring participant registration, payment integration, and dynamic dashboards for organizers and participants. Built with MERN stack and Firebase for real-time updates.",

    cover: "/projects/medical.jpg", // Add your image
    gallery: [],

    stack: {
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["Firebase Auth", "JWT"],
      other: ["React Query"],
    },

    features: [
      {
        title: "Registration System",
        description: "Participant registration with medical information",
      },
      {
        title: "Dynamic Dashboards",
        description: "Separate interfaces for organizers and participants",
      },
      {
        title: "Payment Integration",
        description: "Secure payment processing for camp fees",
      },
    ],

    technicalHighlights: [
      "Firebase real-time database integration",
      "JWT and Firebase dual authentication",
      "React Query for server state management",
      "Responsive dashboard design",
    ],

    links: {
      github: "https://github.com/Hridoykhan4/...", // Update when available
      live: "https://...", // Update when deployed
      case_study: null,
    },

    tags: ["React", "Node.js", "MongoDB", "Firebase", "JWT"],
    category: "Full Stack",
    featured: false,
    completionDate: "2024-07",
    order: 5,
    gridSpan: "lg:col-span-1 lg:row-span-1",
  },
];

// Helper functions for filtering
export const getFeaturedProjects = () => {
  return PROJECTS_DATA.filter((project) => project.featured).sort(
    (a, b) => a.order - b.order,
  );
};

export const getAllProjects = () => {
  return PROJECTS_DATA.sort((a, b) => a.order - b.order);
};

export const getProjectById = (id) => {
  return PROJECTS_DATA.find((project) => project.id === id);
};

export const getProjectsByCategory = (category) => {
  return PROJECTS_DATA.filter((project) => project.category === category);
};
