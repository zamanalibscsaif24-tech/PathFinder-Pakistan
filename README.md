# 🎓 PathFinder Pakistan

A web-based career guidance platform designed for **Intermediate students in Pakistan (11th–12th grade)** to help them make informed decisions about their future academic and professional paths.

---

## 🌍 Project Overview

In Pakistan, most students select their careers after Intermediate based on limited guidance, social pressure, or incomplete information.

**PathFinder Pakistan** solves this problem by providing structured, simple, and accessible career guidance.

It helps students:
- Explore career options
- Understand required education paths
- Take a career interest quiz
- Read real student experiences

---

## 🎯 Target Audience

- FSc Pre-Medical students
- FSc Pre-Engineering students
- ICS students
- I.Com students
- FA students

Focus: **Students after Intermediate (11th–12th grade)**

---

## 🚀 Features (Version 1)

### 🧭 Career Explorer
A structured listing of career paths with detailed information:
- Career overview
- Required education after Intermediate
- Skills required
- Career roadmap
- Job opportunities in Pakistan
- Salary insights (approximate)

---

### 📄 Career Detail Pages
Each career has a dedicated page (`career.html`) showing:
- Full description
- Step-by-step roadmap
- Skills breakdown
- Career opportunities
- Guidance for students

---

### 🧠 Career Quiz (Rule-Based System)
A logic-based quiz system that:
- Uses predefined scoring (no AI)
- Matches student interests with careers
- Provides top recommended careers with percentages

Example result:
- Software Engineer (85%)
- Data Scientist (70%)
- Digital Marketer (55%)

---

### 🗣️ Student Stories
A section where students share:
- Their academic journey
- Career decisions
- Mistakes and lessons
- Advice for future students

---

## 🛠️ Tech Stack

### Frontend:
- HTML5
- CSS3
- JavaScript (Vanilla JS)

### Logic:
- Rule-based quiz scoring system

### Data Handling:
- Static JS file (`careers-data.js`) for career information

---

## 🧩 Project Structure
pathfinder-pakistan/
│
├── index.html # Homepage
├── careers.html # Career listing page
├── career.html # Single career detail page
├── quiz.html # Career quiz page
├── stories.html # Student stories page
│
├── css/
│ └── style.css # Global styles
│
└── js/
├── careers-data.js # Career database (static JS)
└── quiz.js # Quiz logic (scoring system)


---

## 🧭 Website Flow


Home Page
↓
Explore Careers
↓
Career Detail Pages
↓
Take Career Quiz
↓
View Recommended Careers
↓
Read Student Stories


---

## 🎨 UI/UX Design Principles

- Formal and professional design
- Inspired by educational institutions and official portals
- Clean and minimal layout
- Easy readability for students
- No unnecessary animations or distractions

### Color Scheme:
- Navy Blue (Primary)
- White (Background)
- Light Grey (Sections)

---

## 🧠 Career Quiz Logic

The quiz uses a **rule-based scoring system**:

- Each answer increases scores for specific careers
- Final scores are calculated for all careers
- Top 3 careers are shown with match percentage

No AI or backend is used in Version 1.

---

## 💡 Future Improvements

- Backend integration (Flask / Node.js)
- User authentication system
- Save quiz results
- AI-based career recommendations
- Scholarship section (future expansion)
- Admin dashboard for content management
- Mobile app version

---

## 🎯 Project Goal

To build a **national-level career guidance platform** that helps Pakistani students make informed decisions after Intermediate based on structured and reliable information.

---

## 👨‍💻 Developer Note

This project is built as a **portfolio + real-world impact project**, focusing on solving a real educational problem faced by students in Pakistan.

---

## 📜 License

This project is intended for educational and portfolio use.

---

## ⭐ Support

If you find this project useful or impactful:
- ⭐ Star the repository
- 💡 Suggest improvements
- 🤝 Contribute ideas for better career guidance
