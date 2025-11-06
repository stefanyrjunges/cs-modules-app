import networkImg from "./assets/images/networking.png";
import aiImg from "./assets/images/artificial-intelligence.png";
import securityImg from "./assets/images/cyber-security.png";
import programmingImg from "./assets/images/web-programming.png";

export const CS_MODULES = [ 
    {
        id: 1000,
        image: networkImg,
        title: "Advanced Computer Networks",
        description: "An in-depth study of modern networking technologies and protocols."
    },
    {
        id: 2000,
        image: aiImg,
        title: "Artificial Intelligence",
        description: "Exploration of AI concepts, algorithms, and applications."
    },
    {
        id: 3000,
        image: securityImg,
        title: "Security Fundamentals",
        description: "Understanding the principles and practices of computer security."
    },
    {
        id: 4000,
        image: programmingImg,
        title: "Advanced Programming",
        description: "Advanced techniques and paradigms in software development."
    },
];

export const READ_MORE_MODULES = {
    1000: {
        title: "Advanced Computer Networks",
        details: "This module covers advanced topics in computer networking including network architecture, protocols, and security. Students will learn about the design and implementation of modern networks, as well as troubleshooting and performance optimization techniques."
    },
    2000: {
        title: "Artificial Intelligence",
        details: "This module introduces students to the fundamental concepts of artificial intelligence, including machine learning, neural networks, and natural language processing. Students will explore various AI algorithms and their applications in real-world scenarios."
    },
    3000: {
        title: "Security Fundamentals",
        details: "This module provides a comprehensive overview of computer security principles and practices. Topics include cryptography, network security, threat analysis, and risk management. Students will learn how to protect information systems from various types of cyber threats."
    },
    4000: {
        title: "Advanced Programming",
        details: "This module focuses on advanced programming concepts and techniques. Students will explore topics such as data structures, algorithms, design patterns, and software architecture. The module emphasizes practical application through coding projects and collaborative development."
    }
};