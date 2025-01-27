import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUniversity, FaBriefcase, FaClipboardList } from "react-icons/fa"; 
import useTypewriter from "../../../hooks/useTypewriter";
import "../../../styles/ButtonStyles/ResumeButtons.css";

const ResumeSection = () => {
  // Typewriter effects
  const resumeHeader = useTypewriter({ words: ["Resume"], typeSpeed: 70, delaySpeed: 4000, initialDelay: 0, cursor: true, cursorStyle: "|" });
  const resumeContent = useTypewriter({ words: [" "], cursor: false, cursorStyle: "|", typeSpeed: 70, delaySpeed: 4000, initialDelay: 0 });

  // State for active section and dot navigation
  const [activeSection, setActiveSection] = useState("education");
  const [educationIndex, setEducationIndex] = useState(0);
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [skillsIndex, setSkillsIndex] = useState(0);
  
  // New state to handle fade out
  const [isInitLoad, setIsInitLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitLoad(true);
    }, 500); // Time for the initial fade-in effect
    return () => clearTimeout(timer);
  }, []);
  
  // Sample data
  const educationList = [
    { degree: "Bachelor in Foreign Relations", school: "Palacký University", graduation: "Graduated: 2023" },
    { degree: "High School of Management", school: "Kosinova Olomouc", graduation: "Graduated: 2019" },
    { degree: "Vocational School of Smart Networks", school: "Kosinova Olomouc", graduation: "Graduated: 2016" }
  ];

  const workExperienceList = [
    { title: "Freelance Graphic Designer", company: "Self-employed", years: "2020 - 2024", responsibilities: ["Worked with clients", "Consulted on branding"] },
    { title: "Graphic Designer", company: "Westlogic s.r.o.", years: "2024", responsibilities: ["Creating designs"] }
  ];

  const skillsList = [
    { category: "Technical Skills", skills: ["Adobe Photoshop", "Illustrator", "Figma", "Sketch", "HTML", "CSS"] },
    { category: "Soft Skills", skills: ["Communication", "Teamwork", "Time Management", "Problem Solving"] },
    { category: "Languages", skills: ["Czech", "English"] }
  ];

  // Transition settings for fade-in/out animation
  const fadeTransition = { duration: 1.5, delay: 0.5 };

  return (
    <motion.div key="resume" className="content-box">
      <h1 className="name-intro">{resumeHeader}</h1>
      <motion.hr initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} />
      
      {/* Resume Content */}
      <p className="intro-desc">{resumeContent}</p>

      {/* Buttons to toggle between sections */}
      <motion.div
        className="buttons-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        <motion.button
          className={`button ${activeSection === "education" ? "active" : ""}`}
          onClick={() => setActiveSection("education")}
        >
          <FaUniversity /> Education
        </motion.button>
        <motion.button
          className={`button ${activeSection === "experience" ? "active" : ""}`}
          onClick={() => setActiveSection("experience")}
        >
          <FaBriefcase /> Experiences
        </motion.button>
        <motion.button
          className={`button ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => setActiveSection("skills")}
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
              transition={fadeTransition}
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
              transition={fadeTransition}
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
              transition={fadeTransition}
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
            <motion.div className="education-dots-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={fadeTransition}>
              {educationList.map((_, index) => (
                <motion.span
                  key={index}
                  className={`education-dot ${educationIndex === index ? "active" : ""}`}
                  onClick={() => setEducationIndex(index)}
                  transition={{ type: "spring", stiffness: 1000 }}
                />
              ))}
            </motion.div>
          )}

          {activeSection === "experience" && (
            <motion.div className="experience-dots-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={fadeTransition}>
              {workExperienceList.map((_, index) => (
                <motion.span
                  key={index}
                  className={`experience-dot ${experienceIndex === index ? "active" : ""}`}
                  onClick={() => setExperienceIndex(index)}
                  transition={{ type: "spring", stiffness: 1000 }}
                />
              ))}
            </motion.div>
          )}

          {activeSection === "skills" && (
            <motion.div className="skills-dots-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={fadeTransition}>
              {skillsList.map((_, index) => (
                <motion.span
                  key={index}
                  className={`skills-dot ${skillsIndex === index ? "active" : ""}`}
                  onClick={() => setSkillsIndex(index)}
                  transition={{ type: "spring", stiffness: 1000 }}
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
