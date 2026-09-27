export const PORTFOLIO_DATA = {
  identity: {
    name: "Shaik Irfan Hussain",
    shortName: "IRFAN",
    title: "Software Developer | AI & ML Enthusiast",
    location: "Hyderabad, Telangana, India",
    phone: "+91 7396480852",
    email: "shaikirfan2732007@gmail.com",
    linkedin: "https://linkedin.com/in/shaik-irfan-0a5b0b326",
    github: "https://github.com/247r1a05c2-b",
    githubUsername: "247r1a05c2-b",
    leetcodeUsername: "HUSSAIN_SHAIKIRFAN15",
    cgpa: "8.45/10",
    college: "CMR Technical Campus, Hyderabad",
    degree: "B.Tech CSE",
    duration: "2024–2028",
    availableForInternship: true,
  },

  summary:
    "Computer Science Engineering undergraduate (CGPA 8.45/10) with a strong foundation in Java, Python, Data Structures & Algorithms, Object-Oriented Programming, DBMS, and SQL, combined with hands-on experience building and deploying Machine Learning, NLP, and Computer Vision applications. Proven track record of delivering end-to-end AI/ML projects from data preprocessing through live production deployment on Streamlit, with real GitHub repositories and live demo links. Seeking a Software Engineering, Java Development, AI/ML, or Data Analyst internship to apply strong problem-solving, full-stack development, and data-driven decision-making skills in a fast-paced engineering environment.",

  skills: [
    {
      category: "Languages",
      items: [
        { name: "Java",       proficiency: 80 },
        { name: "Python",     proficiency: 75 },
        { name: "C",          proficiency: 65 },
        { name: "JavaScript", proficiency: 60 },
        { name: "SQL",        proficiency: 70 },
        { name: "PHP",        proficiency: 50 },
      ],
    },
    {
      category: "Web",
      items: [
        { name: "HTML",          proficiency: 80 },
        { name: "CSS",           proficiency: 80 },
        { name: "React",         proficiency: 50 },
        { name: "Node.js",       proficiency: 45 },
        { name: "Express.js",    proficiency: 45 },
        { name: "REST APIs",     proficiency: 60 },
        { name: "Tailwind CSS",  proficiency: 55 },
        { name: "Streamlit",     proficiency: 70 },
      ],
    },
    {
      category: "ML / AI",
      items: [
        { name: "Machine Learning",   proficiency: 70 },
        { name: "NLP",               proficiency: 60 },
        { name: "Computer Vision",   proficiency: 65 },
        { name: "Scikit-learn",      proficiency: 65 },
        { name: "Pandas",            proficiency: 70 },
        { name: "NumPy",             proficiency: 68 },
        { name: "OpenCV",            proficiency: 62 },
        { name: "Explainable AI",    proficiency: 58 },
      ],
    },
    {
      category: "Databases & Tools",
      items: [
        { name: "MySQL",           proficiency: 65 },
        { name: "Git",             proficiency: 70 },
        { name: "GitHub",          proficiency: 72 },
        { name: "VS Code",         proficiency: 85 },
        { name: "Jupyter Notebook",proficiency: 68 },
        { name: "Postman",         proficiency: 55 },
      ],
    },
  ],

  majorProjects: [
    {
      id: "nexarag",
      title: "NexaRAG — Adaptive AI Knowledge Assistant",
      description:
        "Hackathon-ready Retrieval-Augmented Generation platform that ingests PDF, scanned PDF, DOCX, PPTX, TXT and images, uses OCR, hybrid retrieval and Gemini to generate grounded answers with source traceability.",
      tech: ["Python", "RAG", "Gemini", "ChromaDB", "Embeddings", "Streamlit", "OCR"],
      category: "GenAI / RAG",
      github: "https://github.com/247r1a05c2-b/NexaRAG",
      demo: "https://nexarag12345678.streamlit.app",
    },

    {
      id: "ai-disease",
      title: "AI Multi-Domain Disease Prediction",
      description:
        "Healthcare platform leveraging multiple ML models to predict several diseases from patient input data, improving early-diagnosis accessibility. Complete ML pipeline from preprocessing to live Streamlit deployment.",
      tech: ["Python", "Machine Learning", "Streamlit", "Scikit-learn", "Random Forest"],
      category: "ML / AI",
      github: "https://github.com/247r1a05c2-b/AI-Multi-Domain-Disease-Prediction",
      demo: "https://ai-multi-domain-disease-1st.streamlit.app",
    },
    {
      id: "resume-screening",
      title: "AI-Powered Resume Screening System",
      description:
        "Automated candidate-ranking platform using NLP (text parsing, keyword matching, similarity scoring) to shortlist resumes against job requirements, deployed as a production Streamlit application.",
      tech: ["Python", "NLP", "Machine Learning", "Streamlit", "Scikit-learn"],
      category: "ML / AI",
      github: "https://github.com/247r1a05c2-b/Resume-Screening-For-Company-s",
      demo: "https://resume-screening-1st.streamlit.app",
    },
    {
      id: "face-attendance",
      title: "Face Recognition Attendance System",
      description:
        "Automated attendance management using real-time Face Recognition and OpenCV, replacing manual roll-call with accurate automated identification and reducing administrative overhead.",
      tech: ["Python", "OpenCV", "Computer Vision", "Face Recognition"],
      category: "Computer Vision",
      github: "https://github.com/247r1a05c2-b/face-recognition-attendance",
      demo: null,
    },
    {
      id: "loan-approval",
      title: "Loan Approval Prediction using XAI",
      description:
        "Loan approval prediction model with Explainable AI (SHAP values) making ML decisions transparent and interpretable for financial decision-making stakeholders.",
      tech: ["Python", "XAI", "SHAP", "Machine Learning", "Scikit-learn"],
      category: "ML / AI",
      github: "https://github.com/247r1a05c2-b",
      demo: null,
    },
  ],

  otherProjects: [],

  internships: [
    {
      id: "csi",
      company: "CSI Hyderabad",
      role: "Virtual Intern",
      domain: "ML & Deep Learning",
      duration: "June – July 2026",
      type: "Virtual",
      description:
        "Worked on machine learning and deep learning projects, gaining hands-on experience with model training, evaluation, and deployment techniques.",
    },
    {
      id: "apexsolutions",
      company: "ApexSolutions",
      role: "Virtual Intern",
      domain: "Web Development",
      duration: "June – July 2026",
      type: "Virtual",
      description:
        "Developed and maintained web application features using modern web technologies, contributing to front-end and back-end components.",
    },
    {
      id: "kodbud",
      company: "KodBud",
      role: "Virtual Intern",
      domain: "Machine Learning",
      duration: "June – July 2026",
      type: "Virtual",
      description:
        "Applied ML techniques to real-world datasets, working on data preprocessing, feature engineering, and predictive modeling tasks.",
    },
  ],

  education: [
    {
      id: "btech",
      degree: "B.Tech — Computer Science Engineering",
      institution: "CMR Technical Campus, Hyderabad",
      duration: "2024 – 2028",
      score: "CGPA: 8.45 / 10",
      description:
        "Specialising in AI/ML, Data Structures & Algorithms, DBMS, and Full-Stack Development. Active in coding clubs and hackathons.",
    },
    {
      id: "intermediate",
      degree: "Intermediate (MPC) — Class XII",
      institution: "Telangana State Board",
      duration: "2022 – 2024",
      score: "92%",
      description:
        "Mathematics, Physics, Chemistry. Strong analytical and problem-solving foundation.",
    },
    {
      id: "tenth",
      degree: "Secondary School — Class X",
      institution: "Telangana State Board",
      duration: "2021 – 2022",
      score: "CGPA: 9.7 / 10",
      description:
        "Consistent academic excellence across all subjects with a focus on Mathematics and Sciences.",
    },
  ],

  certifications: [
    {
      id: "oracle-java",
      name: "Oracle Java Foundations Badge",
      issuer: "Oracle",
      year: "2024",
      category: "Programming",
    },
    {
      id: "hackerrank-java-basic",
      name: "Java (Basic)",
      issuer: "HackerRank",
      year: "2024",
      category: "Programming",
    },
    {
      id: "sololearn-java",
      name: "Java (Basic and Intermediate)",
      issuer: "SoloLearn",
      year: "2024",
      category: "Programming",
    },
    {
      id: "sololearn-python",
      name: "Python for Beginners",
      issuer: "SoloLearn",
      year: "2024",
      category: "Programming",
    },
  ],

  achievements: [
    {
      id: "projects",
      title: "End-to-End AI/ML Projects",
      description:
        "Delivered 4 complete AI/ML projects with live Streamlit deployments, covering healthcare, NLP, Computer Vision, and Explainable AI.",
      icon: "🚀",
    },
    {
      id: "cgpa",
      title: "Academic Excellence — 8.45 CGPA",
      description:
        "Maintaining a strong CGPA of 8.45/10 at CMR Technical Campus while pursuing hands-on development work.",
      icon: "🎓",
    },
    {
      id: "internships",
      title: "3 Virtual Internships",
      description:
        "Completed 3 virtual internships in ML, Deep Learning, and Web Development within a single academic year.",
      icon: "💼",
    },
    {
      id: "leetcode",
      title: "Active Competitive Programmer",
      description:
        "Solving problems across Easy, Medium, and Hard categories on LeetCode, sharpening DSA skills.",
      icon: "🏆",
    },
  ],

  hobbies: ["Competitive Programming", "Open Source Contribution", "Machine Learning Research", "Problem Solving"],
};
