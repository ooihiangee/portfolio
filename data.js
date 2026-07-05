export const bioData = {
    name: "Alex Rivera",
    title: "Senior Data Scientist",
    summary: "Data Scientist with 5+ years of experience in building scalable machine learning pipelines and driving business growth through data-driven insights. Specialized in NLP and Predictive Analytics.",
    email: "alex.rivera@email.com",
    socials: {
        github: "https://github.com/",
        linkedin: "https://linkedin.com/",
    }
};

export const skills = [
    { category: "Programming", items: ["Python", "R", "SQL", "C++"] },
    { category: "Machine Learning", items: ["Scikit-Learn", "PyTorch", "TensorFlow", "XGBoost"] },
    { category: "Data Tools", items: ["Pandas", "NumPy", "Apache Spark", "Tableau"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Git", "MLflow"] }
];

export const experience = [
    {
        role: "Senior Data Scientist",
        company: "TechCorp AI",
        period: "2021 - Present",
        description: "Led a team of 4 to develop a recommendation engine that increased user engagement by 25%. Optimized ETL pipelines reducing processing time by 40% using Apache Spark.",
    },
    {
        role: "Data Analyst",
        company: "DataFin Solutions",
        period: "2018 - 2021",
        description: "Automated weekly financial reporting using Python, saving 20 manual hours per week. Performed churn analysis to improve customer retention by 15%.",
    }
];

export const projects = [
    {
        title: "Real-time Sentiment Analysis",
        category: "NLP",
        description: "A streaming dashboard that analyzes sentiment of live Twitter feeds using BERT models and Kafka.",
        tags: ["Python", "PyTorch", "Kafka"],
        github: "#",
        demo: "#"
    },
    {
        title: "Customer LTV Predictor",
        category: "Machine Learning",
        description: "Predictive model to estimate Life Time Value of customers using Gradient Boosting Regressors.",
        tags: ["Scikit-Learn", "Pandas", "Flask"],
        github: "#",
        demo: "#"
    },
    {
        title: "Supply Chain Optimizer",
        category: "Optimization",
        description: "Operations research project to minimize logistics costs using Linear Programming.",
        tags: ["PuLP", "NetworkX", "Matplotlib"],
        github: "#",
        demo: "#"
    }
];

export const education = [
    { degree: "M.S. in Data Science", school: "Stanford University", year: "2018" },
    { degree: "B.S. in Statistics", school: "University of California, Berkeley", year: "2016" }
];

export const certifications = [
    "AWS Certified Machine Learning – Specialty",
    "Google Professional Data Engineer",
    "DeepLearning.AI TensorFlow Developer"
];

export const contactConfig = {
    formspreeUrl: "https://formspree.io/f/mvgqbeeq" // Replace with your ID
};