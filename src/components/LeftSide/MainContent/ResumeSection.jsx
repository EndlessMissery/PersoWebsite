import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUniversity, FaBriefcase, FaClipboardList } from "react-icons/fa"; // Import icons
import useTypewriter from "../../../hooks/useTypewriter"; // Assuming you have this custom hook for typewriter effect
import "../../../styles/ButtonStyles/ResumeButtons.css";

const ResumeSection = () => {
  // Typewriter effects for header and content
  const resumeHeader = useTypewriter({ words: ["Resume"], typeSpeed: 30, delaySpeed: 2000, cursor: true, cursorStyle: "|" });
  const resumeContent = useTypewriter({
    words: [" "],
    cursor: false,
    cursorStyle: "|",
    typeSpeed: 40,
    delaySpeed: 2000,
  });

  // State to manage which section is active
  const [activeSection, setActiveSection] = useState("education");

  // State to manage the index of selected education, work experience, and skills
  const [educationIndex, setEducationIndex] = useState(0);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [skillsIndex, setSkillsIndex] = useState(0); // New state for skills section

  // Sample data for education, work experience, and skills
  const educationList = [
    { degree: "Bachelor of Arts in Graphic Design", school: "University of XYZ", graduation: "Graduated: 2021" },
    { degree: "Master of Arts in Visual Design", school: "Design Institute", graduation: "Graduated: 2023" },
    { degree: "Diploma in Web Development", school: "Tech Academy", graduation: "Graduated: 2020" }
  ];

  const workExperienceList = [
    {
      title: "Junior Graphic Designer",
      company: "ABC Design Studio",
      years: "2021 - 2023",
      responsibilities: [
        "Assisted in designing marketing materials for clients",
        "Created digital designs for social media platforms"
      ]
    },
    {
      title: "Freelance Graphic Designer",
      company: "Self-employed",
      years: "2020 - Present",
      responsibilities: [
        "Worked with clients to design logos, brochures, and websites",
        "Provided consulting for branding and visual identity"
      ]
    }
  ];

  const skillsList = [
    { category: "Technical Skills", skills: ["Adobe Photoshop", "Illustrator", "Figma", "HTML", "CSS"] },
    { category: "Soft Skills", skills: ["Communication", "Teamwork", "Time Management", "Problem Solving"] },
    { category: "Languages", skills: ["English", "Spanish", "French"] }
  ];

  return (
    <motion.div key="resume" className="content-box">
      <h1 className="name-intro">{resumeHeader}</h1>
      <motion.hr
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1 }}
      />
      
      {/* Resume Content */}
      <p className="intro-desc">{resumeContent}</p>

      {/* Buttons to toggle between sections */}
<motion.div
  className="buttons-container"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 1.5, delay: 0.5 }}
>
  <motion.button
    className={`button ${activeSection === "education" ? "active" : ""}`}
    onClick={() => setActiveSection("education")} // Don't reset index
  >
    <FaUniversity /> Education
  </motion.button>
  <motion.button
    className={`button ${activeSection === "experience" ? "active" : ""}`}
    onClick={() => setActiveSection("experience")} // Don't reset index
  >
    <FaBriefcase /> Experiences
  </motion.button>
  <motion.button
    className={`button ${activeSection === "skills" ? "active" : ""}`}
    onClick={() => setActiveSection("skills")} // Don't reset index
  >
    <FaClipboardList /> Skills
  </motion.button>
</motion.div>


      {/* Scrollable Container for Resume Sections */}
      <AnimatePresence mode="wait">
        <div className="scrollable-box">
          {/* Education Section */}
          {activeSection === "education" && (
            <motion.section 
              className="resume-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} // Fade out when leaving
              transition={{ duration: 2.5 }} // Adjust timing for fade-out effect
            >
              <ul>
                <li>
                  <strong>{educationList[educationIndex].degree}</strong> <br />
                  {educationList[educationIndex].school} <br />
                  {educationList[educationIndex].graduation}
                </li>
              </ul>
            </motion.section>
          )}

          {/* Work Experience Section */}
          {activeSection === "experience" && (
            <motion.section 
              className="resume-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} // Fade out when leaving
              transition={{ duration: 2.5 }} // Adjust timing for fade-out effect
            >
              <ul>
                <li>
                  <strong>{workExperienceList[experienceIndex].title}</strong> <br />
                  {workExperienceList[experienceIndex].company} | {workExperienceList[experienceIndex].years} <br />
                  <ul>
                    {workExperienceList[experienceIndex].responsibilities.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </motion.section>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <motion.section 
              className="resume-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} // Fade out when leaving
              transition={{ duration: 2.5 }} // Adjust timing for fade-out effect
            >
              <h3>{skillsList[skillsIndex].category}</h3>
              <ul>
                {skillsList[skillsIndex].skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Navigation Dots for Education, Work Experience, and Skills */}
          {activeSection === "education" && (
            <motion.div 
              className="education-dots-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {educationList.map((_, index) => (
                <motion.span
                  key={index}
                  className={`education-dot ${educationIndex === index ? "active" : ""}`}
                  onClick={() => setEducationIndex(index)}
                  transition={{ type: "spring", stiffness: 700 }}
                />
              ))}
            </motion.div>
          )}

          {activeSection === "experience" && (
            <motion.div 
              className="experience-dots-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {workExperienceList.map((_, index) => (
                <motion.span
                  key={index}
                  className={`experience-dot ${experienceIndex === index ? "active" : ""}`}
                  onClick={() => setExperienceIndex(index)}
                  transition={{ type: "spring", stiffness: 700 }}
                />
              ))}
            </motion.div>
          )}

          {activeSection === "skills" && (
            <motion.div 
              className="skills-dots-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              {skillsList.map((_, index) => (
                <motion.span
                  key={index}
                  className={`skills-dot ${skillsIndex === index ? "active" : ""}`}
                  onClick={() => setSkillsIndex(index)}
                  transition={{ type: "spring", stiffness: 700 }}
                />
              ))}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </motion.div>
  );
};

export default ResumeSection;

