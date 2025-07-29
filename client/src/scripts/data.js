// src/data/projectData.js

export const projectData = [
    {
        id: "1",
        title: "Portfolio Website",
        assignment: "Build a personal portfolio site",
        yourRole: "UX/UI Designer & Frontend Developer",
        subject: "Interactive Design",
        category: "Portfolio",
        toolsMethods: ["Figma", "HTML", "CSS", "Astro"],
        processSteps: [
            "/images/wireframe1.jpg",
            "/images/mockup1.jpg",
            "/images/final1.jpg"
        ],
        liveLinks: [
            { type: "Live", url: "https://example.com" },
            { type: "GitHub", url: "https://github.com/username/project1" }
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        reflection: "Navigation worked well, but the mobile layout could be improved."
    },
    {
        id: "2",
        title: "App Redesign",
        assignment: "Redesign an existing app",
        yourRole: "Product Designer",
        subject: "Mobile UX",
        category: "Redesign",
        toolsMethods: ["Sketch", "Prototyping", "Motion Design"],
        processSteps: [
            "/images/sketch.jpg",
            "/images/prototype.jpg",
            "/images/final-app.jpg"
        ],
        liveLinks: [
            { type: "Demo", url: "https://figma.com/proto/demo" }
        ],
        videoUrl: "",
        reflection: "Nice transitions, but the onboarding was unclear for users."
    },
    // Add more projects as needed...
];
  