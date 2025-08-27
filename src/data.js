// src/data.js
export const portfolioData = {
  name: "Yash Khati",
  phone: "+91 9520799133",
  email: "khati2212yash@gmail.com",
  github: "https://github.com/YashMoney", // Replace with your GitHub username
  linkedin: "https://www.linkedin.com/in/yash-khati-629a70255/", // Replace with your LinkedIn profile
  education: [
    {
      institution: "Graphic Era Deemed to be University",
      degree: "Bachelor of Technology in Computer Science",
      cgpa: "8.72/10.0",
      duration: "August 2022 - Present",
      location: "Dehradun, India",
    },
    {
      institution: "Don Bosco School (CBSE)",
      degree: "12th Grade",
      cgpa: "93.80%",
      duration: "April 2021 - May 2022",
      location: "Pithoragarh, India",
    },
  ],
  projects: [
    {
      title: "Handwritten Digit Recognition",
      year: 2024,
      technologies: ["Python", "Keras", "TensorFlow", "Streamlit", "NumPy"],
      description: [
        "Built and trained a Convolutional Neural Network (CNN) achieving 97% accuracy on the MNIST dataset.",
        "Developed an interactive web application with Streamlit that supports real-time digit sketching and image uploads for immediate inference."
      ],
      githubLink: "https://github.com/YashMoney/Handwritten-digit-recognition",
    },
    {
      title: "Sentiment Analyzer",
      year: 2025,
      technologies: ["Python", "Scikit-learn", "NLTK", "Streamlit", "Google API"],
      description: [
        "Engineered a robust sentiment classification system for the IMDB 50K Reviews dataset, covering the entire pipeline from preprocessing to deployment.",
        "Integrated the YouTube Data API to analyze over 10K live comments, providing real-time sentiment insights through an interactive dashboard."
      ],
      githubLink: "https://github.com/YashMoney/Sentiment_Analysis",
    },
    {
      title: "Sign Language Recognition System",
      year: 2025,
      technologies: ["Python", "TensorFlow", "Keras", "MediaPipe", "OpenCV"],
      description: [
        "Developed a real-time American Sign Language (ASL) alphabet recognition system using a stacked LSTM model.",
        "Created a custom data collection pipeline with MediaPipe for 3D hand landmark extraction, achieving 89% accuracy on live gesture recognition."
      ],
      githubLink: "https://github.com/YashMoney/Sign-Language-Recognition-System",
    },
  ],
  skills: {
    languages: ["C++", "Python", "C"],
    tools: ["Git", "GitHub", "VS Code"],
    database: ["MySQL"],
  },
  achievements: [
    "Qualified for Stage 2 of ATF 2024, ranking among the top 4,000 students in India.",
    "Selected from 2500+ students across IITs and NITs for the GraphTheory Programming Camp (Apr 2024) conducted by Codeforces Master Manas Kumar Verma.",
    "Contributed as part of the organizing team for the 2024 President's Cup of Cricket, the university's largest tournament.",
    "Served as a Volunteering Member at the G20 Symposium on Digital Agriculture (Aug 2023).",
  ],
};