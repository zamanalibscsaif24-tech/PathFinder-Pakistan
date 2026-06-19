// PathFinder Pakistan — Career Quiz Engine
// Rule-based scoring system (NOT AI). Each option adds points to one or more careers.

const QUIZ_QUESTIONS = [
  {
    q: "Which subject did you enjoy most in Intermediate?",
    options: [
      { text: "Biology", scores: { "Doctor": 3 } },
      { text: "Computer Science / Programming", scores: { "Software Engineer": 3, "Data Scientist": 2, "Computer Scientist / IT Professional": 2, "Artificial Intelligence Engineer": 2 } },
      { text: "Mathematics & Physics", scores: { "Civil Engineer": 3, "Data Scientist": 2, "Mechanical Engineer": 2, "Electrical Engineer": 2 } },
      { text: "Accounting / Economics", scores: { "Chartered Accountant": 3, "Entrepreneur": 1, "BBA / Business Management": 2 } }
    ]
  },
  {
    q: "How do you prefer to solve a problem?",
    options: [
      { text: "Break it into logical steps and code a solution", scores: { "Software Engineer": 3, "Data Scientist": 2, "Computer Scientist / IT Professional": 2, "Artificial Intelligence Engineer": 2 } },
      { text: "Examine symptoms carefully and diagnose the cause", scores: { "Doctor": 3 } },
      { text: "Analyze numbers and find the underlying pattern", scores: { "Data Scientist": 3, "Chartered Accountant": 1, "Artificial Intelligence Engineer": 2 } },
      { text: "Talk to people and gather different viewpoints first", scores: { "Teacher": 2, "CSS Officer": 2, "Digital Marketer": 1 } }
    ]
  },
  {
    q: "Which work environment appeals to you most?",
    options: [
      { text: "Hospital or clinic, helping patients directly", scores: { "Doctor": 3 } },
      { text: "Office/remote, working on a laptop with a team", scores: { "Software Engineer": 2, "Data Scientist": 2, "Digital Marketer": 1, "Computer Scientist / IT Professional": 2, "Artificial Intelligence Engineer": 1 } },
      { text: "Construction site or field-based project work", scores: { "Civil Engineer": 3, "Mechanical Engineer": 2, "Electrical Engineer": 2 } },
      { text: "Government office serving the public", scores: { "CSS Officer": 3 } }
    ]
  },
  {
    q: "How comfortable are you with advanced mathematics?",
    options: [
      { text: "Very comfortable — I enjoy it", scores: { "Civil Engineer": 2, "Data Scientist": 2, "Software Engineer": 1, "Chartered Accountant": 1, "Mechanical Engineer": 2, "Electrical Engineer": 2, "Artificial Intelligence Engineer": 2 } },
      { text: "Comfortable enough, prefer applied use", scores: { "Chartered Accountant": 2, "Civil Engineer": 1 } },
      { text: "Not my strength, prefer biology/people-based work", scores: { "Doctor": 2, "Teacher": 1 } },
      { text: "I prefer creative or communication-based tasks instead", scores: { "Graphic Designer": 2, "Digital Marketer": 2 } }
    ]
  },
  {
    q: "What matters most to you in a future career?",
    options: [
      { text: "Helping people directly improve their health or lives", scores: { "Doctor": 3, "Teacher": 2 } },
      { text: "High income potential and growth", scores: { "Software Engineer": 2, "Chartered Accountant": 2, "Entrepreneur": 2, "Artificial Intelligence Engineer": 2, "BBA / Business Management": 1 } },
      { text: "Respect, authority and serving the country", scores: { "CSS Officer": 3 } },
      { text: "Freedom to create and express ideas", scores: { "Graphic Designer": 3, "Digital Marketer": 1 } }
    ]
  },
  {
    q: "How do you feel about taking financial risks?",
    options: [
      { text: "I enjoy risk if it could lead to bigger rewards", scores: { "Entrepreneur": 3, "Digital Marketer": 1 } },
      { text: "I prefer stability and a steady paycheck", scores: { "Teacher": 2, "CSS Officer": 2, "Doctor": 1 } },
      { text: "I'm fine with moderate risk for long-term growth", scores: { "Software Engineer": 1, "Data Scientist": 1, "Chartered Accountant": 1 } },
      { text: "I prefer calculated, well-planned risks only", scores: { "Civil Engineer": 1, "Chartered Accountant": 2 } }
    ]
  },
  {
    q: "Which best describes your attention to detail?",
    options: [
      { text: "Extremely detail-oriented — small errors bother me", scores: { "Chartered Accountant": 3, "Civil Engineer": 2, "Doctor": 1 } },
      { text: "I focus on the big picture more than small details", scores: { "Entrepreneur": 2, "CSS Officer": 1, "Digital Marketer": 1 } },
      { text: "I balance both depending on the task", scores: { "Software Engineer": 2, "Data Scientist": 2 } },
      { text: "I care about visual/aesthetic detail specifically", scores: { "Graphic Designer": 3 } }
    ]
  },
  {
    q: "Do you prefer leading a team or working individually?",
    options: [
      { text: "I enjoy leading and making decisions for a team", scores: { "Entrepreneur": 2, "CSS Officer": 2, "Civil Engineer": 1, "BBA / Business Management": 2 } },
      { text: "I prefer focused individual work", scores: { "Software Engineer": 1, "Data Scientist": 1, "Graphic Designer": 1, "Computer Scientist / IT Professional": 1, "Artificial Intelligence Engineer": 1 } },
      { text: "I like mentoring and guiding others", scores: { "Teacher": 3, "Doctor": 1 } },
      { text: "I like collaborating closely in small teams", scores: { "Digital Marketer": 1, "Software Engineer": 1 } }
    ]
  },
  {
    q: "Which statement feels most true about you?",
    options: [
      { text: "I like structured, well-defined career paths", scores: { "Doctor": 2, "Chartered Accountant": 2, "Civil Engineer": 1 } },
      { text: "I like flexible, evolving fields with new trends", scores: { "Digital Marketer": 2, "Software Engineer": 1, "Data Scientist": 1 } },
      { text: "I like building something of my own from scratch", scores: { "Entrepreneur": 3 } },
      { text: "I like creative self-expression in my work", scores: { "Graphic Designer": 3 } }
    ]
  },
  {
    q: "Which long-term goal excites you most?",
    options: [
      { text: "Becoming a respected expert/specialist in a technical field", scores: { "Software Engineer": 1, "Data Scientist": 1, "Civil Engineer": 1, "Doctor": 1 } },
      { text: "Serving the public and holding a position of authority", scores: { "CSS Officer": 3 } },
      { text: "Owning a successful business or brand", scores: { "Entrepreneur": 3, "Digital Marketer": 1 } },
      { text: "Shaping young minds and contributing to education", scores: { "Teacher": 3 } }
    ]
  }
];

// Max possible score per career = sum of the highest score that career receives across all questions
function getMaxScores() {
  const max = {};
  QUIZ_QUESTIONS.forEach(question => {
    const perCareerMax = {};
    question.options.forEach(opt => {
      Object.entries(opt.scores).forEach(([career, val]) => {
        perCareerMax[career] = Math.max(perCareerMax[career] || 0, val);
      });
    });
    Object.entries(perCareerMax).forEach(([career, val]) => {
      max[career] = (max[career] || 0) + val;
    });
  });
  return max;
}

function calculateResults(answerIndices) {
  const totals = {};
  answerIndices.forEach((optionIndex, qIndex) => {
    const opt = QUIZ_QUESTIONS[qIndex].options[optionIndex];
    Object.entries(opt.scores).forEach(([career, val]) => {
      totals[career] = (totals[career] || 0) + val;
    });
  });

  const max = getMaxScores();
  const percentages = Object.entries(totals).map(([career, score]) => ({
    career,
    percentage: Math.round((score / (max[career] || 1)) * 100)
  }));

  percentages.sort((a, b) => b.percentage - a.percentage);
  return percentages.slice(0, 3);
}
