export const bioData = {
    name: "Ooi Hian Gee",
    title: "Scorecard Modeller | Data Scientist | Machine Learning Engineer",
    summary: "Detail-oriented Credit Risk professional with strong foundations in statistics, machine learning and workflow automation. Experienced in developing and validating credit scoring models as well as translating complex data into actionable insights for risk strategy and governance. Proficient in SAS, SQL, Python and R with a proven ability to work across teams and lead data-driven initiatives",
    email: "ooihiangee@gmail.com",
    resume: "assets/VETECE.pdf",
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
        role: "Credit Scoring and Model Governance - Senior Executive",
        company: "Bank Simpanan Nasional (BSN)",
        period: "2024 - Present",
        description: "• Led the end-to-end migration of the Credit Scoring System from on-prem setup to hosted solution and managed the phases from procurement, liaison with vendors and PwC members, SIT, UAT to production deployment.\n• Collaborated with vendor to develop and implement Micro Financing Application and Alternative Scorecards integrating CCRIS, demographic and digital footprint data to expand credit access for thin-file segments.\n• Evaluated model health using indicators such as Gini and PSI, identified performance drift and provided recalibration recommendations to maintain predictive power and portfolio stability.\n• Developed a custom Streamlit parsing engine to process raw XML and JSON data which automated CCRIS, scoring variables and risk grades extraction, eliminated manual verification and reduced lead times.\n• Managed the full lifecycle deployment of A-score models and policy rules for new product launches or marketing campaigns in the Financing Origination System.\n• Created the new SOP document for the Credit Scoring System & Model Governance.\n• Dealt with working-level, middle management and top management for credit scoring and system matters.",
    },
    {
        role: "AML/CFT Compliance FIU - Senior Executive",
        company: "Public Bank Berhad",
        period: "2023 - 2024",
        description: "• Collaborated with the vendor to develop machine learning model that complements traditional rule-based logic to uncover complex suspicious transaction patterns and hidden financial network which aims to improve the detection accuracy while significantly reducing false positives.\n• Developed a suite of efficient SAS Macro libraries that optimised the monthly data extraction pipelines and significantly reduced the turnaround time by 50% for increased productivity.\n• Identified and mitigated critical data gaps such as missing occupation info and duplicated ID by liaising across the business units to enhance the system logic and improve the reliability of the bankʼs core AML datasets.\n• Performed in-depth transaction and customer profile analysis to identify emerging red flags related to money laundering, terrorism financing and proliferation financing as part of due diligence effort.\n• Fulfilled customer demographic risk exposure surveys and prepared regulatory reporting figures for BNM.",
    },
    {
        role: "Operational Risk - Intern",
        company: "Malaysian Industrial Development Finance Berhad",
        period: "2023 - 2024",
        description: "• Developed an end-to-end MFRS9 PD modelling pipeline in R to automate macroeconomic variable selection, multi-scenario forecasting and forward-looking (PIT) calibration via non-linear scaling.\n•Automated the daily email reporting process using VBA to consolidate data from multiple sources into executive summaries which significantly reduced the manual workload and ensured timely delivery to senior management\n.•Reviewed and documented Key Risk Indicators of every department on a monthly basis.
    }
];

export const projects = [
    {
        title: "Real-time Sentiment Analysis",
        category: "NLP",
        description: "A streaming dashboard that analyzes sentiment of live Twitter feeds using BERT models and Kafka.",
        thumbnail: "images/sports.png",
        tags: ["Python", "PyTorch", "Kafka"],
        github: "#",
        demo: "#"
    },
    {
        title: "Customer LTV Predictor",
        category: "Machine Learning",
        description: "Predictive model to estimate Life Time Value of customers using Gradient Boosting Regressors.",
        thumbnail: "images/skateboard.png",
        tags: ["Scikit-Learn", "Pandas", "Flask"],
        github: "#",
        demo: "#"
    },
    {
        title: "Supply Chain Optimizer",
        category: "Optimization",
        description: "Operations research project to minimize logistics costs using Linear Programming.",
        thumbnail: "images/excel.png",
        tags: ["PuLP", "NetworkX", "Matplotlib"],
        github: "#",
        demo: "#"
    }
];

export const education = [
    { degree: "M.S. in Data Science", school: "University of Malaya", year: "2024 - 2025"},
    { degree: "B.S. in Applied Mathemematics", school: "University of Malaya", year: "2019 - 2023" }
];

export const certifications = [
    "Certificate in Financial Services (CFS)",
    "Google Data Analytics Professional Certificate",
    "Excel Skills for Business Specialization",
    "Python for Everybody Specialization",
    "MIDF Award for Mathematics Excellence"
];

export const contactConfig = {
    formspreeUrl: "https://formspree.io/f/mvgqbeeq"
};