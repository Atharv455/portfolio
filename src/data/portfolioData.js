// Central content file for the portfolio. Edit values here - the components
// just render whatever is in this file.
//
// Fields set to `null` are intentionally left blank because the real
// information wasn't available when this was built. Nothing here is
// fabricated - see the "NEEDS YOUR INPUT" comments for exactly what to fill in.

export const personal = {
  name: "Atharv Kolapkar",
  title: "Computer Science & Engineering Student | Full Stack Developer | Cloud & AI Enthusiast",
  intro:
    "Computer Science and Engineering student focused on building practical web applications, cloud-based solutions, and AI-driven projects.",
  resumePath: "/resume.pdf",
  // Pulled from public/resume.pdf (your actual resume document).
  email: "atharvkolapkar45@gmail.com",
  github: "https://github.com/Atharv455",
  linkedin: "https://linkedin.com/in/atharv-kolapkar-link",
};

export const about = {
  paragraphs: [
    "I'm a B.Tech Computer Science and Engineering student with a practical interest in full-stack development, cloud computing (AWS), AI/ML, and cybersecurity.",
    "I enjoy building real, working software - from end-to-end web applications with authentication and databases, to cloud-deployed projects and data-driven dashboards - rather than just studying theory.",
    "I'm currently looking for software development internships and entry-level full-stack or cloud roles where I can keep building things that work.",
  ],
  interests: [
    "Full-Stack Development",
    "Cloud Computing",
    "AWS",
    "AI / ML",
    "Cybersecurity",
    "Practical Software Development",
  ],
};

export const skillGroups = [
  { category: "Programming", skills: ["Java", "Python", "JavaScript", "SQL", "C++"] },
  { category: "Frontend", skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { category: "Backend", skills: ["Spring Boot", "Node.js", "REST APIs"] },
  { category: "Database", skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase Firestore"] },
  { category: "Cloud & DevOps", skills: ["AWS", "EC2", "S3", "IAM", "Docker", "Git", "GitHub"] },
  { category: "Tools", skills: ["Postman", "Power BI", "Tableau", "MS Excel"] },
  { category: "AI / ML", skills: ["Machine Learning Fundamentals", "Generative AI", "LangChain", "Google Gemini / GenAI"] },
];

export const projects = [
  {
    id: "lumora-jewels",
    name: "Lumora Jewels",
    tagline: "Jewelry E-Commerce Web Application",
    category: "Full Stack",
    featured: true,
    description:
      "Full-stack jewelry e-commerce application built with React.js, JavaScript, Firebase Authentication, and Cloud Firestore.",
    // High-level data flow derived from the tech stack/features already listed
    // below - not new information, just organized as a flow summary.
    architecture: [
      "React (Vite) frontend renders the UI and routes via React Router",
      "Context API manages auth, cart, and wishlist state across the app",
      "Firebase Authentication handles user login/signup",
      "Cloud Firestore stores products, carts, orders, and user roles",
      "Firestore security rules enforce role-based access (admin vs customer)",
    ],
    features: [
      "User registration and login",
      "Firebase Authentication",
      "Product browsing",
      "Product search",
      "Category filtering",
      "Price filtering",
      "Product details",
      "Shopping cart",
      "Wishlist",
      "Checkout",
      "Order history",
      "Order status tracking",
      "Admin dashboard",
      "Product CRUD operations",
      "Role-based access control",
      "Firestore security rules",
      "Responsive UI",
    ],
    techStack: ["React.js", "JavaScript", "Vite", "Firebase Authentication", "Cloud Firestore", "React Router", "Context API"],
    liveDemo: "https://lumora-jewels.vercel.app/",
    github: "https://github.com/Atharv455/lumora-jewels",
  },
  {
    id: "aws-deployment",
    name: "AWS-Based Web Application Deployment",
    tagline: "Cloud Infrastructure Project",
    category: "Cloud",
    description: "Cloud infrastructure project focused on deploying a web application using AWS services.",
    features: [
      "Hosted web applications using Amazon EC2 for compute and Amazon S3 for static content, improving scalability and reducing costs",
      "Secured infrastructure network by configuring Linux environments, IAM user roles, and network security groups",
    ],
    techStack: ["Amazon EC2", "Amazon S3", "IAM", "Linux", "Network Security Configuration"],
    liveDemo: null,
    github: null,
  },
  {
    id: "krishi-suraksha",
    name: "Krishi Suraksha",
    tagline: "CodeVersity National Level Hackathon 2026 - IIT Gandhinagar",
    category: "AI/Hackathon",
    description:
      "Built as part of a national-level hackathon to address counterfeit agricultural products. Team Nexus Army ranked 19th out of 433 teams.",
    features: [],
    techStack: [],
    liveDemo: null,
    github: null,
    event: "CodeVersity National Level Hackathon 2026, IIT Gandhinagar",
    team: "Nexus Army",
    rank: "19th out of 433 teams",
  },
];

export const experience = [
  {
    // Pulled from public/resume.pdf.
    role: "Full Stack Java Intern (Industry Internship Project)",
    company: "HCLTech (Remote)",
    duration: "June 2025 - August 2025",
    responsibilities: [
      "Collaborated within a remote, agile team setup following structured SDLC phases spanning development, testing, and deployment.",
      "Engineered and tested 4-5 core backend application modules using Java and SQL under direct mentor guidance.",
      "Implemented efficient CRUD operations and optimized database queries to support core business workflows.",
      "Participated in code reviews and integration testing to ensure high software reliability and alignment with project requirements.",
    ],
  },
  {
    role: "Full Stack Development Intern",
    company: "S.G. Software Solutions",
    duration: "May 2023 - June 2023",
    // NEEDS YOUR INPUT: this role wasn't on the resume I found, so no
    // responsibilities are listed rather than inventing them. Add real
    // bullet points if you'd like them shown.
    responsibilities: [],
  },
];

// Every entry below is verified directly against the actual PDF now sitting
// in public/certificates/ - titles, issuers, and dates are copied exactly
// from what each certificate says, not from the resume or guesses.
export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02): Cert Prep - 1 Cloud Concepts",
    category: "AWS",
    issuer: "LinkedIn Learning",
    date: "April 2025",
    description:
      "Completed the first module of LinkedIn Learning's AWS Certified Cloud Practitioner (CLF-C02) exam-prep series, covering core cloud concepts. This is course completion, not the official AWS certification exam.",
    file: "aws-clf-c02.pdf",
    available: true,
  },
  {
    title: "Cybersecurity Foundations",
    category: "Cybersecurity",
    issuer: "LinkedIn Learning",
    date: "March 2025",
    description: "Course covering foundational cybersecurity concepts, backed by PMI Registered Education Provider credit hours.",
    file: "cybersecurity-foundations.pdf",
    available: true,
  },
  {
    title: "Java Fundamentals",
    category: "Development",
    issuer: "Oracle Academy",
    date: "November 2024",
    description: "Award of Final Exam Completion for Oracle Academy's Java Fundamentals course.",
    file: "oracle.pdf",
    available: true,
  },
  {
    title: "Industry Internship Project - Full Stack Java (HCLTech)",
    category: "Development",
    issuer: "CareerCraft Academy, in partnership with HCLTech and Sanjivani University",
    date: "September 2025",
    description:
      "Certificate of Achievement for completing the Industry Internship Project in Full Stack Java with HCLTech (June-August 2025) - the completion certificate for the internship listed in the Experience section above.",
    file: "hcl.pdf",
    available: true,
  },
  {
    title: "Learning Full-Stack JavaScript Development: MongoDB, Node, and React",
    category: "Development",
    issuer: "LinkedIn Learning",
    date: "March 2025",
    description: "Course covering full-stack JavaScript development with MongoDB, Node.js, and React.",
    file: "full-stack-development.pdf",
    available: true,
  },
];

export const achievements = [
  {
    title: "Krishi Suraksha",
    event: "CodeVersity National Level Hackathon 2026",
    organizer: "IIT Gandhinagar",
    team: "Nexus Army",
    result: "19th Rank out of 433 Teams",
    description: "Built a solution addressing counterfeit agricultural products.",
  },
];

// Both entries pulled from public/resume.pdf - most recent first.
export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Sanjivani University, School of Engineering and Technology",
    year: "Expected 2027",
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Polytechnic, Beed",
    year: "Completed 2023",
    score: "78.80%",
  },
];
