// PathFinder Pakistan — Career Data
// To add a new career: add a new object to this array with the same shape.
const CAREERS = [
  {
    id: "software-engineer",
    name: "Software Engineer",
    category: "Technology",
    streams: ["ICS", "Pre-Engineering"],
    summary: "Designs, builds and maintains software applications, websites and systems used by businesses and people every day.",
    whatTheyDo: "Software Engineers write, test and maintain code that powers apps, websites, and systems. They work in teams to break down problems, design solutions, and ship working products — anything from a banking app to a video game.",
    education: [
      "BS Computer Science / Software Engineering (4 years)",
      "BS Artificial Intelligence / Data Science (emerging alternative)",
      "Entry test required: NU NTS, FAST NU Test, GIKI Test, or university-specific test"
    ],
    universities: [
      "FAST National University (NUCES)",
      "NUST (SEECS)",
      "GIKI",
      "LUMS (SBASSE)",
      "Sukkur IBA University",
      "COMSATS University"
    ],
    skills: ["Programming (Python, Java, C++)", "Problem solving & logic", "Data structures & algorithms", "Teamwork & communication", "Continuous learning"],
    roadmap: [
      "Choose ICS or Pre-Engineering in Intermediate",
      "Prepare for university entry tests (NU, FAST, GIKI, NTS)",
      "Get admission in a BS Computer Science / Software Engineering program",
      "Learn programming fundamentals in 1st year (Python/C++)",
      "Build small projects and join a society/club",
      "Do internships in 3rd/4th year",
      "Specialize (Web, AI, Mobile, Backend) and build a portfolio",
      "Apply for jobs or freelance while finishing final semester"
    ],
    opportunities: ["Software Houses", "Freelancing (Upwork, Fiverr)", "Remote jobs for foreign companies", "Startups", "Government digital projects"],
    salaryRange: "PKR 60,000 – 250,000+ per month (entry to senior level, varies by city and remote work)",
    advice: "Don't just rely on your degree — build real projects early. Companies in Pakistan increasingly hire based on GitHub portfolios and practical skill, not just grades."
  },
  {
    id: "doctor",
    name: "Doctor (MBBS)",
    category: "Medical",
    streams: ["Pre-Medical"],
    summary: "Diagnoses and treats illness, provides medical care, and works to improve patient health and wellbeing.",
    whatTheyDo: "Doctors examine patients, diagnose conditions, prescribe treatment, and often specialize in a particular field (cardiology, surgery, pediatrics, etc.) after years of training and practice.",
    education: [
      "MBBS (5 years) + 1 year House Job",
      "MDCAT entry test required",
      "FCPS / specialization after MBBS (optional, 4-6 more years)"
    ],
    universities: [
      "King Edward Medical University, Lahore",
      "Dow University of Health Sciences, Karachi",
      "Aga Khan University, Karachi",
      "Allama Iqbal Medical College, Lahore",
      "Liaquat University of Medical Sciences, Jamshoro"
    ],
    skills: ["Strong biology & chemistry foundation", "Patience & empathy", "Decision-making under pressure", "Attention to detail", "Long-term commitment"],
    roadmap: [
      "Complete FSc Pre-Medical with strong grades",
      "Prepare for MDCAT (1-year focused prep is common)",
      "Apply through PMC's centralized merit system",
      "Complete 5-year MBBS",
      "Complete 1-year mandatory House Job",
      "Choose: General Practice, FCPS specialization, or further studies abroad"
    ],
    opportunities: ["Government & private hospitals", "Own clinic/practice", "Specialization & consultancy", "Research & academia", "Opportunities abroad (after licensing exams)"],
    salaryRange: "PKR 40,000 – 150,000+ per month at entry/house job level; significantly higher after specialization or private practice",
    advice: "MBBS is a long road — make sure it's something you genuinely want, not just family pressure. Strong MDCAT prep matters more than people realize; start early."
  },
  {
    id: "chartered-accountant",
    name: "Chartered Accountant (CA)",
    category: "Business & Finance",
    streams: ["I.Com", "FA", "ICS"],
    summary: "Manages financial records, audits, taxation and strategic financial decisions for companies and individuals.",
    whatTheyDo: "Chartered Accountants handle auditing, taxation, financial reporting, and advise businesses on financial strategy and compliance with regulations.",
    education: [
      "CA via ICAP (Institute of Chartered Accountants of Pakistan)",
      "Can start directly after Intermediate (CA Foundation/CAF route)",
      "Typically takes 4-5 years including articleship"
    ],
    universities: [
      "ICAP-affiliated institutes (nationwide)",
      "PIPFA (alternate accounting path)",
      "Many pair CA with BS Accounting & Finance from IBA, LUMS, etc."
    ],
    skills: ["Numerical & analytical ability", "Attention to detail", "Ethics & integrity", "Time management", "Communication for client/stakeholder dealing"],
    roadmap: [
      "Complete Intermediate (I.Com/FA/ICS, any stream with decent marks)",
      "Register with ICAP and start CAF (Certificate in Accounting and Finance)",
      "Pass CAF papers in stages",
      "Begin articleship (paid training) with an audit firm",
      "Complete CFAP and Multi-Subject Assessment (MSA) levels",
      "Qualify as a Chartered Accountant"
    ],
    opportunities: ["Big 4 firms (A.F. Ferguson, EY Ford Rhodes, KPMG, Deloitte Yousuf Adil)", "Corporate finance departments", "Banking sector", "Own consultancy/practice", "CFO roles long-term"],
    salaryRange: "PKR 40,000 – 100,000 during articleship; PKR 150,000 – 400,000+ post-qualification",
    advice: "CA is demanding but doesn't require an engineering/medical background — it's one of the strongest career paths directly after Intermediate for commerce students."
  },
  {
    id: "civil-engineer",
    name: "Civil Engineer",
    category: "Engineering",
    streams: ["Pre-Engineering"],
    summary: "Designs, builds and maintains infrastructure like roads, buildings, bridges and water systems.",
    whatTheyDo: "Civil Engineers plan and oversee construction projects — from residential buildings to highways and dams — ensuring structures are safe, efficient and built to standard.",
    education: [
      "BS Civil Engineering (4 years)",
      "ECAT or university-specific engineering entry test required",
      "PEC registration required to practice professionally"
    ],
    universities: [
      "NUST",
      "UET Lahore",
      "NED University, Karachi",
      "Mehran UET, Jamshoro",
      "GIKI"
    ],
    skills: ["Strong physics & math", "Spatial/structural reasoning", "Project management", "CAD software (AutoCAD, Revit)", "Site supervision ability"],
    roadmap: [
      "Complete FSc Pre-Engineering with strong Math & Physics",
      "Prepare for ECAT/entry tests",
      "Get admission in BS Civil Engineering",
      "Learn design software (AutoCAD, STAAD Pro) during degree",
      "Complete an internship on an active construction site",
      "Register with PEC after graduation",
      "Gain field experience before pursuing specialization (structural, geotechnical, etc.)"
    ],
    opportunities: ["Construction companies", "Government infrastructure projects (NHA, WAPDA)", "Real estate development", "Consultancy firms", "Opportunities in Gulf countries"],
    salaryRange: "PKR 50,000 – 180,000+ per month depending on experience and sector",
    advice: "Site experience matters as much as classroom knowledge. Try to get on-site exposure during summer breaks, even unpaid, to understand real construction work."
  },
  {
    id: "css-officer",
    name: "CSS Officer",
    category: "Civil Service",
    streams: ["FA", "I.Com", "ICS", "Pre-Engineering", "Pre-Medical"],
    summary: "Serves in Pakistan's top civil service, holding administrative and policy-making roles across government departments.",
    whatTheyDo: "CSS Officers are placed in groups like Administration, Police, Foreign Service, or Customs after qualifying a national-level competitive exam, taking on leadership roles in governance.",
    education: [
      "Any Bachelor's degree (minimum 2nd division) makes you eligible",
      "CSS exam conducted by FPSC, open after graduation",
      "No specific Intermediate stream required — open to all"
    ],
    universities: [
      "Any recognized university for your Bachelor's degree",
      "Specialized CSS coaching academies for exam prep (not degree-granting)"
    ],
    skills: ["Strong general knowledge & current affairs", "Essay writing & English proficiency", "Analytical thinking", "Discipline & consistency", "Public speaking (for interview stage)"],
    roadmap: [
      "Complete Intermediate (any stream)",
      "Complete a Bachelor's degree (any field, 2nd division or above)",
      "Begin CSS exam preparation 1-2 years in advance",
      "Choose 6 optional subjects + compulsory papers",
      "Clear written exam, then psychological assessment & interview",
      "Get allocated to a service group and undergo training"
    ],
    opportunities: ["District administration", "Foreign Service of Pakistan", "Police Service", "Customs & Income Tax groups", "Policy-making roles in federal/provincial government"],
    salaryRange: "PKR 80,000 – 200,000+ per month (with grade-based government perks and allowances)",
    advice: "Start reading newspapers and building general knowledge from Intermediate itself — CSS rewards consistent long-term habits, not last-minute cramming."
  },
  {
    id: "data-scientist",
    name: "Data Scientist",
    category: "Technology",
    streams: ["ICS", "Pre-Engineering"],
    summary: "Analyzes large datasets to find patterns and insights that help organizations make better decisions.",
    whatTheyDo: "Data Scientists collect, clean and analyze data, build statistical and machine learning models, and present insights that guide business or research decisions.",
    education: [
      "BS Data Science / Computer Science / Statistics (4 years)",
      "Strong foundation in Math & Statistics needed",
      "Entry test: NU NTS, FAST NU Test, or university-specific"
    ],
    universities: [
      "FAST National University (NUCES)",
      "NUST",
      "LUMS",
      "Sukkur IBA University",
      "ITU Lahore"
    ],
    skills: ["Statistics & probability", "Python/R programming", "Machine learning basics", "Data visualization", "Critical thinking"],
    roadmap: [
      "Choose ICS or Pre-Engineering with strong Math",
      "Get admission in BS Data Science/CS/Statistics",
      "Learn Python, SQL and statistics fundamentals early",
      "Work on real datasets (Kaggle competitions, university projects)",
      "Learn ML frameworks (scikit-learn, TensorFlow)",
      "Do an internship in analytics/AI",
      "Build a portfolio of data projects"
    ],
    opportunities: ["Tech companies & startups", "Banking & fintech analytics", "E-commerce companies", "Research labs", "Remote/freelance data work"],
    salaryRange: "PKR 70,000 – 250,000+ per month depending on experience and specialization",
    advice: "Math and statistics matter more than people expect — don't skip the fundamentals just to jump into trendy tools."
  },
  {
    id: "teacher",
    name: "Teacher / Educator",
    category: "Education",
    streams: ["FA", "I.Com", "ICS", "Pre-Engineering", "Pre-Medical"],
    summary: "Educates and mentors students, shaping the next generation across schools, colleges and universities.",
    whatTheyDo: "Teachers design lessons, deliver instruction, assess student progress, and mentor students academically and personally, at school, college or university level.",
    education: [
      "B.Ed (Bachelor of Education) for school-level teaching",
      "Bachelor's + Master's in subject specialization for college/university teaching",
      "Any Intermediate stream is acceptable"
    ],
    universities: [
      "Allama Iqbal Open University",
      "University of Education, Lahore",
      "Institute of Business Management (IoBM)",
      "Any general university offering B.Ed/M.Ed"
    ],
    skills: ["Subject mastery", "Communication & patience", "Classroom management", "Adaptability", "Mentorship mindset"],
    roadmap: [
      "Complete Intermediate (any stream)",
      "Pursue Bachelor's in your subject of interest",
      "Complete B.Ed or equivalent teaching qualification",
      "Gain classroom experience through internships/tutoring",
      "Apply to schools/colleges or pursue Master's for higher-level teaching"
    ],
    opportunities: ["Private & public schools", "Colleges & universities (with higher qualification)", "Online tutoring platforms", "Curriculum development", "Educational content creation"],
    salaryRange: "PKR 30,000 – 100,000+ per month depending on institution type and qualification",
    advice: "Teaching is undervalued financially in Pakistan but offers huge long-term respect and flexibility. Combine it with tutoring or content creation to boost income."
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    category: "Creative",
    streams: ["FA", "ICS", "I.Com"],
    summary: "Creates visual content — branding, layouts, illustrations and digital graphics for businesses and media.",
    whatTheyDo: "Graphic Designers create visual content for branding, advertising, social media, and print, using tools like Photoshop, Illustrator and Figma to communicate ideas visually.",
    education: [
      "BS/BFA in Visual Arts, Graphic Design or Communication Design (4 years)",
      "Strong portfolio matters more than degree in this field",
      "Self-taught + certification routes are common and accepted"
    ],
    universities: [
      "National College of Arts (NCA), Lahore",
      "Indus Valley School of Art & Architecture",
      "Beaconhouse National University (BNU)",
      "Online: Coursera/Figma certifications as supplements"
    ],
    skills: ["Design software (Photoshop, Illustrator, Figma)", "Typography & color theory", "Creativity & visual storytelling", "Client communication", "Trend awareness"],
    roadmap: [
      "Complete Intermediate (any stream)",
      "Learn design fundamentals & tools (self-study or formal degree)",
      "Build a personal portfolio (Behance/Instagram)",
      "Take freelance projects to gain real client experience",
      "Specialize (branding, UI/UX, motion graphics)",
      "Either freelance full-time or join an agency/in-house team"
    ],
    opportunities: ["Freelancing (Fiverr, Upwork)", "Advertising & branding agencies", "In-house design roles at companies", "Social media content studios", "UI/UX design (with further learning)"],
    salaryRange: "PKR 30,000 – 150,000+ per month; freelancers often earn more with international clients",
    advice: "A strong portfolio beats a degree in this field. Start posting your work publicly early, even if it feels amateur — growth happens in public."
  },
  {
    id: "digital-marketer",
    name: "Digital Marketer",
    category: "Business & Marketing",
    streams: ["I.Com", "FA", "ICS"],
    summary: "Plans and runs online marketing campaigns to grow brands through social media, ads, and content.",
    whatTheyDo: "Digital Marketers manage social media, run paid ad campaigns, create content strategy, and analyze performance metrics to grow a brand's online presence and sales.",
    education: [
      "BBA / BS Marketing (4 years) — helpful but not mandatory",
      "Google Ads, Meta Blueprint, and HubSpot certifications widely respected",
      "Practical campaign experience often valued over formal degree"
    ],
    universities: [
      "IBA Karachi",
      "LUMS (Suleman Dawood School of Business)",
      "Sukkur IBA University",
      "Online certification platforms (Google, Meta, HubSpot)"
    ],
    skills: ["Content strategy & copywriting", "Social media & ad platforms", "Analytics (Google Analytics)", "SEO basics", "Creativity & trend awareness"],
    roadmap: [
      "Complete Intermediate (any stream)",
      "Pursue BBA/Marketing or start self-learning via certifications",
      "Run a personal or volunteer social media page to practice",
      "Get certified in Google Ads / Meta Ads",
      "Intern at a marketing agency or startup",
      "Specialize (SEO, paid ads, content, influencer marketing)"
    ],
    opportunities: ["Marketing agencies", "In-house brand teams", "E-commerce companies", "Freelance/consulting", "Personal brand/influencer route"],
    salaryRange: "PKR 35,000 – 150,000+ per month depending on skill and client base",
    advice: "Results speak louder than certificates here — run a real campaign (even for a small local business) to prove your skill before applying for jobs."
  },
  {
    id: "computer-scientist",
    name: "Computer Scientist / IT Professional",
    category: "Technology",
    streams: ["ICS", "Pre-Engineering"],
    summary: "Works across the broader computing field — systems, networks, databases, and IT infrastructure that keep organizations running.",
    whatTheyDo: "Computer Scientists and IT professionals design computer systems, manage networks and databases, ensure cybersecurity, and solve technical problems for organizations across every industry.",
    education: [
      "BS Computer Science (4 years)",
      "BS Information Technology (4 years, more applied/IT-infrastructure focused)",
      "Entry test: NU NTS, FAST NU Test, GIKI Test, or university-specific test"
    ],
    universities: [
      "NUST (School of Electrical Engineering & Computer Science)",
      "FAST National University (NUCES)",
      "LUMS",
      "Punjab University College of Information Technology (PUCIT)",
      "Institute of Business Administration (IBA), Karachi",
      "COMSATS University Islamabad"
    ],
    skills: ["Programming fundamentals", "Computer networks & systems", "Database management", "Cybersecurity basics", "Analytical problem solving"],
    roadmap: [
      "Choose ICS or Pre-Engineering in Intermediate",
      "Prepare for university entry tests",
      "Get admission in BS Computer Science / IT",
      "Build foundations in programming, networks and databases",
      "Choose a specialization (Cybersecurity, Systems, Cloud, AI) in later semesters",
      "Complete internships at IT departments or tech companies",
      "Earn relevant certifications (AWS, CompTIA, Cisco) to stand out",
      "Enter the workforce or pursue a Master's for specialization"
    ],
    opportunities: ["IT departments of banks/telecoms/corporates", "Software houses", "Cybersecurity firms", "Cloud & systems administration roles", "Government IT/e-governance projects"],
    salaryRange: "PKR 55,000 – 220,000+ per month depending on specialization and experience",
    advice: "Computer Science is broader than just coding — networks, databases and security are huge, stable career tracks that get less attention than software development but are equally in demand."
  },
  {
    id: "ai-engineer",
    name: "Artificial Intelligence Engineer",
    category: "Technology",
    streams: ["ICS", "Pre-Engineering"],
    summary: "Builds intelligent systems and machine learning models that allow software to learn from data and make predictions or decisions.",
    whatTheyDo: "AI Engineers design, train and deploy machine learning and deep learning models — used in everything from recommendation systems to computer vision and natural language processing tools.",
    education: [
      "BS Artificial Intelligence (4 years) — newer, increasingly offered degree",
      "BS Computer Science / Data Science with an AI specialization",
      "Strong Math (Calculus, Linear Algebra, Statistics) foundation essential"
    ],
    universities: [
      "NUST (School of Electrical Engineering & Computer Science)",
      "FAST National University (NUCES)",
      "Information Technology University (ITU), Lahore",
      "Sukkur IBA University",
      "GIKI",
      "Air University, Islamabad"
    ],
    skills: ["Python & ML frameworks (TensorFlow, PyTorch)", "Linear algebra & statistics", "Data preprocessing", "Model evaluation & deployment", "Research mindset"],
    roadmap: [
      "Choose ICS or Pre-Engineering with strong Math",
      "Get admission in BS Artificial Intelligence / Computer Science",
      "Build a strong foundation in math, statistics and programming first",
      "Learn ML/DL frameworks through guided courses and projects",
      "Participate in AI competitions (Kaggle) and open-source projects",
      "Do an internship or research assistantship in AI/ML",
      "Specialize (Computer Vision, NLP, Robotics) and build a portfolio"
    ],
    opportunities: ["AI/ML teams at tech companies", "Research labs & academia", "Startups building AI products", "Freelance AI/ML consulting", "Remote roles with international companies"],
    salaryRange: "PKR 80,000 – 280,000+ per month for skilled AI/ML engineers, often higher with strong portfolios",
    advice: "AI is exciting but math-heavy — don't skip statistics and linear algebra to rush into trendy tools. Genuine understanding beats copy-pasted model code."
  },
  {
    id: "bba-business-management",
    name: "BBA / Business Management",
    category: "Business & Finance",
    streams: ["I.Com", "FA", "ICS"],
    summary: "Prepares students for management, operations, marketing, HR and leadership roles across virtually any industry.",
    whatTheyDo: "BBA graduates work in business operations, management, marketing, human resources, or finance roles, eventually moving toward leadership and strategic decision-making positions.",
    education: [
      "BBA — Bachelor of Business Administration (4 years)",
      "Can be followed by an MBA for senior management roles",
      "Open to any Intermediate stream"
    ],
    universities: [
      "Institute of Business Administration (IBA), Karachi",
      "Lahore University of Management Sciences (LUMS)",
      "Sukkur IBA University",
      "National University of Sciences & Technology (NUST Business School)",
      "Institute of Business Management (IoBM), Karachi"
    ],
    skills: ["Business communication", "Leadership & teamwork", "Basic finance & marketing knowledge", "Analytical decision-making", "Adaptability across departments"],
    roadmap: [
      "Complete Intermediate (any stream, I.Com/FA are common choices)",
      "Apply to BBA programs (most require an admission test/interview)",
      "Explore different business functions (marketing, finance, HR, operations) in early semesters",
      "Choose a specialization/major in later years",
      "Do internships across at least 2 different functions to find your fit",
      "Consider an MBA later for leadership-track roles"
    ],
    opportunities: ["Corporate management trainee programs", "Marketing & sales roles", "HR departments", "Banking & finance", "Operations & supply chain roles"],
    salaryRange: "PKR 50,000 – 180,000+ per month, with strong growth potential through promotions and MBA",
    advice: "BBA is broad by design — use internships strategically to discover which business function actually excites you instead of picking one too early."
  },
  {
    id: "mechanical-engineer",
    name: "Mechanical Engineer",
    category: "Engineering",
    streams: ["Pre-Engineering"],
    summary: "Designs, analyzes and maintains mechanical systems — engines, machines, HVAC systems, and manufacturing equipment.",
    whatTheyDo: "Mechanical Engineers design and improve machines, engines, manufacturing systems and mechanical equipment, working across industries like automotive, energy, and manufacturing.",
    education: [
      "BS Mechanical Engineering (4 years)",
      "ECAT or university-specific engineering entry test required",
      "PEC registration required to practice professionally"
    ],
    universities: [
      "GIKI",
      "NUST (School of Mechanical & Manufacturing Engineering)",
      "UET Lahore",
      "NED University, Karachi",
      "Mehran UET, Jamshoro"
    ],
    skills: ["Strong physics & math", "CAD/CAM software (SolidWorks, AutoCAD)", "Thermodynamics & fluid mechanics", "Manufacturing process knowledge", "Problem-solving under constraints"],
    roadmap: [
      "Complete FSc Pre-Engineering with strong Math & Physics",
      "Prepare for ECAT/entry tests",
      "Get admission in BS Mechanical Engineering",
      "Learn CAD software and core mechanical subjects",
      "Complete internships in manufacturing, automotive, or energy sectors",
      "Register with PEC after graduation",
      "Specialize (HVAC, automotive, energy, manufacturing) based on interest"
    ],
    opportunities: ["Manufacturing & automotive companies", "Energy sector (oil, gas, power plants)", "Government engineering departments", "Consultancy firms", "Opportunities in Gulf countries"],
    salaryRange: "PKR 50,000 – 180,000+ per month depending on sector and experience",
    advice: "Mechanical Engineering opens doors across very different industries — energy, automotive, manufacturing — so use internships to figure out which sector actually suits you."
  },
  {
    id: "electrical-engineer",
    name: "Electrical Engineer",
    category: "Engineering",
    streams: ["Pre-Engineering"],
    summary: "Designs and maintains electrical systems, power networks, and electronic devices used across industries.",
    whatTheyDo: "Electrical Engineers work on power generation and distribution, electronics design, control systems, and increasingly on renewable energy and automation projects.",
    education: [
      "BS Electrical Engineering (4 years)",
      "ECAT or university-specific engineering entry test required",
      "PEC registration required to practice professionally"
    ],
    universities: [
      "NUST (School of Electrical Engineering & Computer Science)",
      "UET Lahore",
      "GIKI",
      "NED University, Karachi",
      "Mehran UET, Jamshoro"
    ],
    skills: ["Strong physics & math", "Circuit design & analysis", "Power systems knowledge", "Programming for embedded systems", "Problem-solving"],
    roadmap: [
      "Complete FSc Pre-Engineering with strong Math & Physics",
      "Prepare for ECAT/entry tests",
      "Get admission in BS Electrical Engineering",
      "Build foundations in circuits, power systems and electronics",
      "Complete internships in power, telecom, or automation companies",
      "Register with PEC after graduation",
      "Specialize (Power, Electronics, Telecom, Renewable Energy)"
    ],
    opportunities: ["Power & energy companies (WAPDA, K-Electric, IPPs)", "Telecom companies", "Automation & robotics firms", "Government infrastructure projects", "Opportunities in Gulf countries"],
    salaryRange: "PKR 50,000 – 190,000+ per month depending on sector and experience",
    advice: "Renewable energy and automation are growing fast in Pakistan — keep an eye on these specializations alongside the traditional power-sector path."
  },
  {
    id: "entrepreneur",
    name: "Entrepreneur",
    category: "Business",
    streams: ["I.Com", "FA", "ICS", "Pre-Engineering"],
    summary: "Builds and runs a business from the ground up, taking on risk to create products, services or solutions.",
    whatTheyDo: "Entrepreneurs identify problems, build solutions (products/services/businesses), and manage operations, finance, marketing and growth — often starting small and scaling over time.",
    education: [
      "No fixed path — BBA, Engineering, or even direct experience all work",
      "Business/Entrepreneurship degrees can help but aren't required",
      "Most learning happens by doing"
    ],
    universities: [
      "IBA Karachi (Entrepreneurship programs)",
      "LUMS (Centre for Entrepreneurship)",
      "NIC Pakistan (National Incubation Center) — not a university but key resource",
      "Sukkur IBA University"
    ],
    skills: ["Risk tolerance & resilience", "Basic finance & operations", "Sales & negotiation", "Adaptability", "Networking"],
    roadmap: [
      "Complete Intermediate (any stream)",
      "Optionally pursue a business-related degree for structure & network",
      "Start small — a side hustle or micro-business while studying",
      "Learn from failures and iterate on the idea",
      "Seek mentorship or apply to incubators (NIC, Plan9)",
      "Scale the business or pivot based on market feedback"
    ],
    opportunities: ["Own startup/business", "E-commerce ventures", "Tech startups", "Local service businesses", "Franchise models"],
    salaryRange: "Highly variable — ranges from losses in early stages to unlimited upside with a successful venture",
    advice: "Start small while still a student — a small side business teaches more than any course. Don't wait for the 'perfect' big idea to begin."
  }
];
