import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUniversity, FaBriefcase, FaClipboardList } from "react-icons/fa"; 
import useTypewriter from "../../../hooks/useTypewriter";
import "../../../styles/ButtonStyles/ResumeButtons.css";
import useTranslationCustom from "../../../hooks/useTranslationCustom";

const ResumeSection = () => {
  const { t, language } = useTranslationCustom();
  // Typewriter effects
  const resumeHeader = useTypewriter({
    words: [t("resumeSection.resume")],
    typeSpeed: 70,
    delaySpeed: 4000,
    initialDelay: 0,
    cursor: true,
    cursorStyle: "|"
  });
  
  const resumeContent = useTypewriter({
    words: [" "],
    cursor: false,
    cursorStyle: "|",
    typeSpeed: 70,
    delaySpeed: 4000,
    initialDelay: 0
  });
  

  // State for active section and dot navigation
  const [activeSection, setActiveSection] = useState("education");
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
    { degree: [t("resumeSection.collegeDegree")], school: "Palacký University", graduation: [t("resumeSection.collegeGraduated")] },
    { degree: [t("resumeSection.highschoolDegree")], school: "Kosinova Olomouc", graduation: [t("resumeSection.highschoolGraduated")] },
    { degree: [t("resumeSection.vocationalDegree")], school: "Kosinova Olomouc", graduation: [t("resumeSection.vocationalGraduated")] }
  ];

  const workExperienceList = [
    { 
      title: t("resumeSection.jobExperienceFreelance"),
      company: t("resumeSection.companyFreelance"),
      years: "2020 - 2024", 
      responsibilities: [
        t("resumeSection.responsibilitiesFreelance1"),
        t("resumeSection.responsibilitiesFreelance2"),
        t("resumeSection.responsibilitiesFreelance3"),
        t("resumeSection.responsibilitiesFreelance4"),
      ]
    },

    { title: t("resumeSection.westlogicPosition"), 
      company: "Westlogic s.r.o.", 
      years: "2024", 
      responsibilities: [
        t("resumeSection.responsibilitiesWestlogic1"),
        t("resumeSection.responsibilitiesWestlogic2"),
        t("resumeSection.responsibilitiesWestlogic3"),
        t("resumeSection.responsibilitiesWestlogic4"),
      ]
    }
  ];

  const skillsList = [
    { category: "Hard Skills", skills: ["Adobe Photoshop", "Illustrator", "Figma", "Sketch", "HTML", "CSS", "ReactJS"] },
    {
      category: "Soft Skills",
      skills: [
        t("resumeSection.communication"),
        t("resumeSection.teamwork"),
        t("resumeSection.timeManagement"),
        t("resumeSection.problemSolving")
      ]
    },
    { category: t("resumeSection.language"),
      skills: [
        t("resumeSection.czech"),
        t("resumeSection.english")
      ]
    }
  ];

  // Transition settings for fade-in/out animation
  const fadeTransition = { duration: 1.5, delay: 0.5 };

  return (
    <motion.div key={language} className="content-box">
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
          <FaUniversity /> {t("resumeSection.education")}
        </motion.button>
        <motion.button
          className={`button ${activeSection === "experience" ? "active" : ""}`}
          onClick={() => setActiveSection("experience")}
        >
          <FaBriefcase /> {t("resumeSection.experience")}
        </motion.button>
        <motion.button
          className={`button ${activeSection === "skills" ? "active" : ""}`}
          onClick={() => setActiveSection("skills")}
        >
          <FaClipboardList /> {t("resumeSection.skill")}
        </motion.button>
      </motion.div>

      {/* Scrollable Container for Resume Sections */}
      <AnimatePresence mode="wait">
        <div className="scrollable-box">
          {/* Education Section - No dots, show all at once */}
          {activeSection === "education" && (
            <motion.section 
              className="resume-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }} // Fade out when leaving
              transition={fadeTransition}
            >
              <ul>
                {educationList.map((education, index) => (
                  <li key={index}>
                    <strong>{education.degree}</strong> <br />
                    {education.school} <br />
                    {education.graduation}  <br />
                    <p></p>
                    
                  </li>
                ))}
              </ul>
            
            </motion.section>
          )}

          {/* Work Experience Section - Dots navigation */}
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

          {/* Skills Section - Dots navigation */}
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


          {/* Dots for Experience */}
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

          {/* Dots for Skills */}
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
