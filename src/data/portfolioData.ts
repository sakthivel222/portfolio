export interface Project {
  id: number;
  title: string;
  subtitle: string;
  category: 'Artificial Intelligence' | 'Generative AI' | 'Full Stack' | 'NLP & RAG';
  tags: string[];
  description: string;
  detailedDescription?: string;
  img: string;
  gallery: string[];
  accent: string;
  year: string;
  featured: boolean;
  client: string;
  role: string;
  projectLink?: string;
  githubLink?: string;
  features?: string[];
  techStack?: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  year: string;
  badgeText: string;
  accent: string;
  description: string;
}

export interface Achievement {
  id: number;
  title: string;
  category: string;
  icon: string;
  bullets: string[];
}

export const PERSONAL_INFO = {
  name: "Sakthivel R",
  nickname: "SAKTHIVEL R",
  role: "Artificial Intelligence & Machine Learning",
  subRole: "Full Stack Development • AI/ML Engineering",
  bio: "Motivated and responsible Artificial Intelligence and Machine Learning student with hands-on knowledge of Python, Java, and C++. Proficient in communicating effectively and demonstrating strong leadership skills.",
  extendedBio: "Motivated and responsible Artificial Intelligence and Machine Learning student with hands-on knowledge of Python, Java, and C++. Proficient in communicating effectively and demonstrating strong leadership skills. Eager to apply academic foundations in machine learning to real-world challenges and seeking a first professional work experience to contribute meaningfully to a forward-thinking team.",
  avatar: "/profile-avatar.jpg",
  avatarCutout: "/profile-cutout.png",
  email: "sakthivel.aiml@gmail.com",
  phone: "+91 9342212825",
  github: "https://github.com/sakthivel222",
  linkedin: "https://www.linkedin.com/in/r-sakthivelaiml",
  portfolioUrl: "https://sakthivel-s-ai-portfolio.vercel.app/",
  location: "Chennai, Tamilnadu",
  college: "Rajalakshmi Institute of Technology",
  degree: "B.E – ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
  batch: "2024 – 2028 (Currently Pursuing)",
  cgpa: "CGPA: 8.07",
  status: "Available for Internships",
  resumeUrl: "/resume.pdf",
};

export const STATS = [
  { value: "07+", label: "Real-World Projects" },
  { value: "15+", label: "Technologies Mastered" },
  { value: "03+", label: "Industry Certifications" },
  { value: "100%", label: "Curiosity & Learning Mindset" },
];

export const WORK_CATEGORIES = [
  "All",
  "Artificial Intelligence",
  "Generative AI",
  "Full Stack",
  "NLP & RAG",
] as const;

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "NAYAN-X — Autonomous Navigation",
    subtitle: "Predictive Autonomous Navigation & Collision Avoidance | SIH 2026",
    category: "Artificial Intelligence",
    tags: ["AI/ML", "Autonomous Driving", "Computer Vision", "YOLO", "FAISS", "PyTorch", "FastAPI"],
    description: "AI-powered autonomous navigation system designed to improve road safety on unpredictable and unstructured Indian roads by anticipating hidden hazards and predicting intent.",
    detailedDescription: "NAYAN-X is an AI-powered autonomous navigation system designed to improve road safety on unpredictable and unstructured Indian roads. Unlike traditional navigation systems that primarily react to visible obstacles, NAYAN-X aims to anticipate hidden hazards, predict the movement and intent of pedestrians and vehicles, remember historical road risks, and proactively plan safer driving trajectories under uncertainty. The system integrates computer vision, trajectory prediction, hazard-memory retrieval, dynamic risk assessment, and adaptive path planning to support intelligent, context-aware collision avoidance.\n\nCore Concept: SEE → CONTEXT → PREDICT → REMEMBER → ASSESS → ADAPT → AVOID → LEARN\n\nProject Goal: To move autonomous driving from reactive obstacle avoidance toward predictive, memory-augmented, and uncertainty-aware navigation that can make roads safer in complex real-world traffic environments.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
    ],
    accent: "#adeb33", // Signature Electric Lime
    year: "2026",
    featured: true,
    client: "SIH 2026 Innovation",
    role: "AI & Autonomous Systems Architect",
    projectLink: "https://github.com",
    githubLink: "https://github.com",
    features: [
      "GHOSTPASS — Hidden Hazard Prediction: Anticipates potential hazards obscured by vehicles, buildings, and visual obstacles",
      "ROAD MEMORY — Hazard Intelligence: Stores and retrieves previous road-risk events using FAISS vector search",
      "Intent & Trajectory Prediction: Predicts possible movements of pedestrians, two-wheelers, and surrounding vehicles",
      "Dynamic Risk Assessment: Evaluates collision risk, Time-To-Collision (TTC), and uncertainty in surrounding traffic",
      "Adaptive Path Planning: Selects safer trajectories using lane-based, hybrid, or free-space planning modes according to road conditions",
      "Context-Aware Safety: Incorporates environmental context including school zones and pedestrian-heavy areas into risk assessment"
    ],
    techStack: [
      "Python",
      "FastAPI",
      "PyTorch",
      "OpenCV",
      "YOLO",
      "FAISS Vector Search",
      "React.js",
      "TypeScript",
      "Three.js / Canvas",
      "MATLAB / Simulink / RoadRunner"
    ]
  },
  {
    id: 2,
    title: "VEL Clinic — Physiotherapy Management",
    subtitle: "Physiotherapy Clinic Management System & Electronic Health Records",
    category: "Full Stack",
    tags: ["React.js", "Full Stack", "Healthcare", "Patient Management", "Vercel", "JavaScript"],
    description: "Web-based physiotherapy clinic management application designed to simplify daily clinic operations, track patient treatment sessions, manage rehabilitation exercise plans, and monitor billing.",
    detailedDescription: "VEL Clinic is a web-based physiotherapy clinic management application designed to simplify daily clinic operations and improve patient management. The system helps physiotherapists manage patient records, schedule appointments, track treatment sessions, record exercise plans, and monitor payments through a centralized dashboard. The application aims to reduce manual paperwork, streamline administrative workflows, and provide an organized digital solution for physiotherapy clinics.\n\nProject Objective: To digitize physiotherapy clinic workflows through a user-friendly management system that improves operational efficiency, patient record organization, and appointment coordination.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80"
    ],
    accent: "#38bdf8", // Sky Blue
    year: "2025",
    featured: true,
    client: "VEL Physiotherapy Clinic",
    role: "Full-Stack Web Developer",
    projectLink: "https://vercel.com",
    githubLink: "https://github.com",
    features: [
      "Patient Management: Maintain comprehensive patient details and clinical treatment records",
      "Appointment Scheduling: Organize appointments and manage daily schedules efficiently",
      "Calendar Management: View and coordinate upcoming patient appointments with ease",
      "Treatment Session Tracking: Record physiotherapy sessions and monitor rehabilitation progress",
      "Exercise Management: Maintain patient customized exercise plans and rehabilitation details",
      "Payment Tracking: Record payments, monitor clinic transactions, and track revenue",
      "Centralized Dashboard: Access essential clinic indicators, appointments, and metrics at a glance"
    ],
    techStack: [
      "React.js",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Tailwind CSS",
      "Vercel Deployment",
      "RESTful API"
    ]
  },
  {
    id: 3,
    title: "RAG AI System",
    subtitle: "Enterprise Retrieval-Augmented Generation Platform",
    category: "NLP & RAG",
    tags: ["LangChain", "Vector DB", "LLM", "Python", "ChromaDB", "FastAPI"],
    description: "Intelligent Retrieval-Augmented Generation chatbot utilizing LangChain, Vector Database and LLMs for contextual knowledge retrieval and grounded responses.",
    detailedDescription: "RAG AI connects large language models to custom proprietary documentation and knowledge bases. Built with hybrid chunking, cosine vector embeddings, dynamic semantic search, and streaming token responses to eliminate hallucinations and deliver factually backed answers.",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
    ],
    accent: "#adeb33", // Signature Electric Lime
    year: "2024",
    featured: true,
    client: "AI Research & Open Source",
    role: "Lead AI Engineer & Backend Architect",
    projectLink: "https://github.com",
    githubLink: "https://github.com",
    features: [
      "Vector search engine powered by ChromaDB embeddings",
      "Hybrid dense & sparse query reranking pipeline",
      "Zero-shot and few-shot prompt chaining with LangChain",
      "Real-time streaming responses via FastAPI WebSockets"
    ],
    techStack: ["Python", "LangChain", "OpenAI / HuggingFace", "ChromaDB", "FastAPI", "Docker"]
  },
  {
    id: 4,
    title: "E-Commerce Website",
    subtitle: "Full-Stack Retail Platform with Checkout Flow",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Redux", "Tailwind"],
    description: "Responsive full-stack e-commerce platform with token authentication, dynamic catalog filtering, cart state management and secure checkout.",
    detailedDescription: "A production-grade modern e-commerce web platform engineered with React and Node.js. Includes secure user authentication (JWT), catalog pagination and search, reactive cart state, order management, and responsive dark-mode styling.",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    ],
    accent: "#ff6b00", // Vibrant Orange
    year: "2024",
    featured: false,
    client: "Production Concept",
    role: "Full Stack Developer",
    projectLink: "https://github.com",
    githubLink: "https://github.com",
    features: [
      "Full CRUD product administration and cloud image upload",
      "Persistent stateful shopping cart and wishlist synchronization",
      "JWT-based role authentication (Customer vs Admin)",
      "High performance MongoDB schema design with indexed queries"
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"]
  },
  {
    id: 5,
    title: "AI Resume Analyzer",
    subtitle: "Smart ATS Resume Parser & Keyword Ranker",
    category: "Artificial Intelligence",
    tags: ["NLP", "Machine Learning", "Streamlit", "Python", "PDF Parser"],
    description: "AI-powered ATS Resume Analyzer built using NLP, Machine Learning and Streamlit for smarter hiring decisions and resume match scoring.",
    detailedDescription: "Designed to help job seekers and HR recruiters analyze resumes against specific job descriptions. The system extracts text from PDF/DOCX resumes, executes TF-IDF and transformer semantic comparisons, identifies missing skills, and suggests actionable enhancements.",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
    ],
    accent: "#2563eb", // Royal Electric Blue
    year: "2024",
    featured: false,
    client: "HR Tech Tool",
    role: "AI & ML Developer",
    projectLink: "https://github.com",
    githubLink: "https://github.com",
    features: [
      "Automated PDF resume text extraction and structural entity recognition",
      "Cosine similarity job description keyword match scoring",
      "Skill gap detection algorithm providing targeted learning recommendations",
      "Interactive Streamlit dashboard with radar charts and bullet breakdown"
    ],
    techStack: ["Python", "Streamlit", "spaCy", "Scikit-Learn", "PyPDF2", "NLTK"]
  },
  {
    id: 6,
    title: "CampusOS AI",
    subtitle: "Conversational Campus & University Assistant",
    category: "Generative AI",
    tags: ["React", "FastAPI", "Generative AI", "Campus Assistant", "Python"],
    description: "AI Campus Assistant that answers student queries, guides admissions, and streamlines academic campus operations using Generative AI.",
    detailedDescription: "An end-to-end intelligent assistant built for university campuses. Integrates with college academic calendars, course curricula, syllabus FAQs, and exam notifications, providing instant 24/7 conversational support to thousands of university students.",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
    ],
    accent: "#10b981", // Emerald
    year: "2024",
    featured: false,
    client: "College Campus Initiative",
    role: "Full Stack & AI Engineer",
    projectLink: "https://github.com",
    githubLink: "https://github.com",
    features: [
      "Context-aware student question answering on courses, timetables, and clubs",
      "Multi-modal prompt handling with support for campus syllabus documents",
      "FastAPI asynchronous backend with ultra-low latency response times",
      "Interactive conversational UI with custom message bubble animations"
    ],
    techStack: ["React", "FastAPI", "Python", "Generative AI", "Tailwind CSS"]
  },
  {
    id: 7,
    title: "EchoLife AI",
    subtitle: "Digital Legacy & Voice Memory Vault",
    category: "Generative AI",
    tags: ["Voice AI", "RAG", "Cloud", "LLM", "Audio Processing"],
    description: "Digital legacy platform preserving memories using Voice AI, Retrieval-Augmented Generation, and Cloud storage.",
    detailedDescription: "A platform focused on narrative storytelling and memory preservation. Users archive voice recordings, life notes, and letters. The system processes speech-to-text, summarizes core life milestones, and allows family members to query memories through an intuitive AI interface.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80"
    ],
    accent: "#f59e0b", // Amber
    year: "2024",
    featured: false,
    client: "Healthcare & Legacy Project",
    role: "AI & Cloud Engineer",
    projectLink: "https://github.com",
    githubLink: "https://github.com",
    features: [
      "Audio transcription and emotion sentiment tagging pipeline",
      "Secure cloud encrypted memory storage with role-based family access",
      "Semantic search across audio transcripts and journal logs",
      "Interactive memory timeline with audio playback player"
    ],
    techStack: ["Voice AI", "Python", "Whisper", "RAG", "Cloud Storage", "FastAPI"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code",
    skills: ["Python", "Java", "C++", "DSA (Data Structures & Algorithms)", "MySQL", "MongoDB"]
  },
  {
    title: "AI, RAG & NLP",
    iconName: "Brain",
    skills: ["Retrieval-Augmented Generation (RAG)", "Natural Language Processing (NLP)", "Prompt Engineering", "Machine Learning", "Deep Learning", "Streamlit", "FAISS / ChromaDB", "PyTorch"]
  },
  {
    title: "Full Stack & Web",
    iconName: "Layout",
    skills: ["Fullstack Development", "React.js", "Node.js", "Express.js", "FastAPI", "HTML5", "CSS3", "Tailwind CSS", "RESTful APIs"]
  },
  {
    title: "Soft Skills & Leadership",
    iconName: "Sparkles",
    skills: ["Problem Solving", "Communication", "Analytical Thinking", "Time Management", "Leadership", "Teamwork"]
  },
  {
    title: "Developer Tools",
    iconName: "Wrench",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Vite", "Vercel"]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    title: "Python for Data Science",
    issuer: "IBM",
    year: "2026",
    badgeText: "Verified Professional",
    accent: "#adeb33",
    description: "Comprehensive certification covering data analysis, Pandas, NumPy, scientific computing, and statistical pipelines with Python."
  },
  {
    id: 2,
    title: "MongoDB Associate",
    issuer: "MongoDB",
    year: "2026",
    badgeText: "Verified Credential",
    accent: "#10b981",
    description: "Certified proficiency in document database modeling, aggregation frameworks, indexing, schema design, and high-performance queries."
  },
  {
    id: 3,
    title: "Machine Learning for Data Science Projects",
    issuer: "IBM",
    year: "2026",
    badgeText: "Verified Professional",
    accent: "#38bdf8",
    description: "Rigorous training on supervised/unsupervised machine learning models, regression, classification, cross-validation, and deployment pipelines."
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    title: "Inter-College Hackathons",
    category: "Competition & Teamwork",
    icon: "Trophy",
    bullets: [
      "Collaborated in fast-paced teams to build innovative AI and full-stack software solutions.",
      "Delivered production-ready prototypes under intense 24-48 hour hackathon deadlines.",
      "Demonstrated technical creativity, system resilience, and clear pitch presentation."
    ]
  },
  {
    id: 2,
    title: "Online Hackathons & Sprints",
    category: "Rapid Prototyping",
    icon: "CodeXml",
    bullets: [
      "Built and deployed working AI prototypes tackling real-world domain challenges.",
      "Rapidly assimilated new frameworks, SDKs, and APIs within short timeframes.",
      "Received recognition for functional architecture and clean codebase design."
    ]
  },
  {
    id: 3,
    title: "Debugging & Coding Contests",
    category: "Problem Solving",
    icon: "Bug",
    bullets: [
      "Competed in timed algorithmic challenges, debugging contests, and code optimization.",
      "Enhanced proficiency in data structures, algorithmic time complexity, and clean code.",
      "Strengthened systematic root-cause debugging techniques under pressure."
    ]
  }
];

export const WHY_HIRE_ME = [
  {
    emoji: "🚀",
    title: "Fast Learner",
    description: "Rapidly grasps cutting-edge libraries, tools, and paradigms. Learns by building real software instead of passive theory."
  },
  {
    emoji: "🧩",
    title: "Problem Solver",
    description: "Bridges conceptual AI theory with pragmatic engineering. Strong analytical thinking paired with clean code craftsmanship."
  },
  {
    emoji: "🤝",
    title: "Collaborative Team Player",
    description: "Thrives in cross-functional hackathons and team sprints. Honest communicator who cares about code readability and maintainability."
  },
  {
    emoji: "💡",
    title: "Passionate About AI",
    description: "Genuinely obsessed with Generative AI, RAG systems, LLMs, and building products that generate tangible value."
  }
];

export const SERVICES = [
  {
    id: "gen-ai",
    number: "01",
    title: "Generative AI & RAG",
    tagline: "Intelligent AI systems that read, reason, and respond without hallucinations.",
    accent: "#adeb33",
    description: "Architecting context-aware AI applications using LangChain, vector databases (ChromaDB), and custom prompt workflows. From conversational chatbots to enterprise knowledge retrieval systems.",
    deliverables: [
      "Retrieval-Augmented Generation (RAG) pipelines",
      "Vector database embeddings and semantic search",
      "Autonomous agent workflows & tool calling",
      "Prompt engineering & hallucination guardrails"
    ]
  },
  {
    id: "full-stack",
    number: "02",
    title: "Full Stack Development",
    tagline: "High-performance, scalable web apps built with modern React & Node ecosystems.",
    accent: "#ff6b00",
    description: "Building responsive, modern, end-to-end web applications. Clean architecture from interactive React / Tailwind user interfaces to resilient Node.js / FastAPI backend servers and database schemas.",
    deliverables: [
      "Modern React / Next.js frontends with fluid UI",
      "Secure REST APIs & WebSocket connections",
      "MongoDB & SQL database design & optimization",
      "State management, auth (JWT), and payment integration"
    ]
  },
  {
    id: "ai-ml",
    number: "03",
    title: "Machine Learning & NLP",
    tagline: "Transforming messy real-world datasets into actionable algorithmic intelligence.",
    accent: "#2563eb",
    description: "Designing end-to-end machine learning and NLP pipelines. From data preprocessing and feature extraction to training, evaluation, and deploying interactive demo dashboards with Streamlit.",
    deliverables: [
      "Natural Language Processing (NLP) & text classifiers",
      "Predictive modeling & supervised machine learning",
      "Data preprocessing, EDA & feature engineering",
      "Streamlit & Gradio interactive analytical dashboards"
    ]
  },
  {
    id: "api-backend",
    number: "04",
    title: "Backend & Cloud APIs",
    tagline: "Robust, asynchronous backend architectures engineered for high throughput.",
    accent: "#10b981",
    description: "Crafting lightweight, asynchronous microservices and API gateways using FastAPI and Express. Clean documentation, structured logging, containerized with Docker for seamless deployment.",
    deliverables: [
      "FastAPI asynchronous endpoints with Pydantic validation",
      "Microservice architecture & containerization with Docker",
      "Cloud deployment & serverless functions",
      "API documentation & comprehensive integration testing"
    ]
  }
];
