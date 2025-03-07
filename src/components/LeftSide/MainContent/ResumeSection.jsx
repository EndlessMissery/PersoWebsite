import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useTypewriter from "../../../hooks/useTypewriter";
import "../../../styles/main.css";
import useTranslationCustom from "../../../hooks/useTranslationCustom";
import SectionButtons from ".//MainContentButtons/ResumeButtons"; 

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

  // Active section + dot nav
  const [activeSection, setActiveSection] = useState("education");
  const [experienceIndex, setExperienceIndex] = useState(0);
  const [skillsIndex, setSkillsIndex] = useState(0);

  // Fade-out handle
  const [, setIsInitLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitLoad(true);
    }, 500); // Time for fade-in
    return () => clearTimeout(timer);
  }, []);

  // Data
  const educationList = [
    { degree: [t("resumeSection.collegeDegree")], school: [t("resumeSection.university")], graduation: [t("resumeSection.collegeGraduated")] },
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
    { 
      title: t("resumeSection.westlogicPosition"), 
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
        t("resumeSection.softSkill1"),
        t("resumeSection.softSkill2"),
        t("resumeSection.softSkill3"),
        t("resumeSection.softSkill4"),
        t("resumeSection.softSkill5"),
        t("resumeSection.softSkill6"),
      ]
    },
    { 
      category: t("resumeSection.language"),
      skills: [
        t("resumeSection.czech"),
        t("resumeSection.english")
      ]
    }
  ];

  // Transition fade-in/out animation
  const fadeTransition = { duration: 1.5, delay: 0.5 };

  return (
    <motion.div key={language} className="content-box">
      <h1 className="name-intro">{resumeHeader}</h1>
      <motion.hr initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 1.5 }} />
      <p className="intro-desc">{resumeContent}</p>

      {/* Include the new SectionButtons component */}
      <SectionButtons 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />

      {/* Scrollable Container for Resume Sections */}
      <AnimatePresence mode="wait">
        <div className="scrollable-box">
          
          {/* Education Section */}
          {activeSection === "education" && (
            <motion.section 
              className="resume-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}>
              <ul>
                {educationList.map((education, index) => (
                  <li key={index}>
                    <strong className="edu-item">{education.degree}</strong> <br />
                    <ul className="edu-list">
                      {education.school} <br />
                      {education.graduation} <br />
                      <p></p>
                    </ul>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <motion.section
              className="resume-section"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={fadeTransition}>
              <h3 className="exp-header">{workExperienceList[experienceIndex].title}</h3>
              <ul>
                <li className="exp-item">
                  {workExperienceList[experienceIndex].company} | {workExperienceList[experienceIndex].years} <br />
                  <ul className="responsibilities-list">
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
              exit={{ opacity: 0 }}
              transition={fadeTransition}>
              <h3 className="exp-header">{skillsList[skillsIndex].category}</h3>
              <ul className="skill-item">
                {skillsList[skillsIndex].skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </motion.section>
          )}

          {/* Dots Experience */}
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

          {/* Dots Skills */}
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
