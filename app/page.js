"use client"
import React from 'react';
import './globals.css';

const profileData = {
  name: "Harnoor Kaur Saggu",
  tagline: "Passionate for Software Engineering & Data Science. I love building things and helping people. Very active on Linkedin.",
  profileImageUrl: "/me.png", // Link for profile image
  emojiWave: "👋",
  aboutHtml: `
    <p>I started my development journey using simple & basic tools like HTML, CSS, Bootstrap 
    to build simple frontend pages of websites.
    As a result of my commitment & determination, today, I know scalable frameworks and 
    technologies to build websites. As far as Data Science is concerned, I expanded from 
    using and applying simple ML models like
    Random Forest to complex Deep Learning and CNN frameworks.
    </p>
  `,
};

const workExperience = [
  {
    company: "J.P. Morgan Chase & Co.",
    role: "Corporate Data Analyst Internship",
    dates: "Jan 2025 - Jun 2025",
    logoUrl: "/logo.png",
    description:
      "Successfully designed and deployed automated data pipelines and reporting solutions using Alteryx workflows and Python scripts aimed at preparing and analysing data saving several hours of daily work enabling data-driven decisions.",
  },
];

const technicalSkills = [
  "Python", "C++", "JavaScript", "SQL", "Tailwind CSS", "NumPy", "Pandas", "SciKit Learn", "Matplotlib", "Streamlit", "Flask", "PostgreSQL", "ReactJS", "NextJS", "FastAPI", ".NET", "RESTful API", "LangChain"
];

const ProjectLink = ({ type, href }) => {
  const Icon = () => {
    switch (type) {
      case 'Website':
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe mr-2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>;
      case 'Source':
        return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github mr-2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.6c3.2-1.3 6.6-1.3 6.6-7.3a4.7 4.7 0 0 0-1.3-3.3 4.4 4.4 0 0 0 0-3.3s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0c-2.4-1.6-3.5-1.3-3.5-1.3a4.4 4.4 0 0 0 0 3.3 4.7 4.7 0 0 0-1.3 3.3c0 6 3.4 6 6.6 7.3a4.8 4.8 0 0 0-1 3.6v4"/><path d="M9 18c-3.1 0-4-3-4-3"/></svg>;
      default:
        return null;
    }
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-50"
    >
      <Icon />
      {type}
    </a>
  );
}

const projectData = [
  {
    title: "Tax GPT",
    dates: "Jan 2025 - Feb 2025",
    description: "Developed a smart assistant bot to simplify the process of understanding tax and salary forms by providing summary (in proper tabular form) of documents uploaded.",
    vidUrl: "/taxgpt.mp4", // Placeholder URL
    skills: ["Streamlit", "Python", "Gemini API", "HTML", "CSS"],
    links: [
      { type: "Source", href: "https://github.com/harnoor345kaur/GGH-2025" }
    ],
  },
  {
    title: "SmartMailInsights",
    dates: "May 2025 - June 2025",
    description: "Aimed at saving time in a corporate environment by providing user a summary of emails received on daily basis by leveraging the power of GenAI for summarizing the emails.",
    vidUrl: "/smart.mp4",
    skills: ["Next.js", "React.js", "Python", "Flask", "GenAI", "Firebase Auth"],
    links: [
      { type: "Website", href: "https://drive.google.com/file/d/1LBXxdqKO-Jm3EGI36YF_51pznb8toemJ/view" }
    ],
  },
  {
    title: "Detection of Parkinson's Disease",
    dates: "October 2025 - Dec 2025",
    description: "Designed a multimodal deep learning framework which processed multiple brain imaging modalities (MRI, fMRI, DTI, etc.) for early and accurate detection of Parkinson’s disease.",
    vidUrl: "https://placehold.co/400x250/A0AEC0/ffffff?text=Video+Unavailable",
    skills: ["Python", "State-of-the-art DL models", "Transformers", "PPMI Dataset"],
    links: [
      { type: "Website", href: "https://www.canva.com/design/DAG123_uW4U/SjsGijoA3cK5AcQJIPgXZg/edit?utm_content=DAG123_uW4U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" }
    ],
  },
  {
    title: "AI Content Auditor",
    dates: "October 2025 - Dec 2025",
    description: "Built an end-to-end RAG system to audit LLM outputs by extracting factual claims and calculating their Risk, Overconfidence and Hallucination scores to ensure user publishes content safely.",
    vidUrl: "/audit.mp4",
    skills: ["RAG", "FastAPI", "NLP", "FAISS VectorStore", "Docker", "ReactJS", "NextJS"],
    links: [
      { type: "Website", href: "https://drive.google.com/file/d/1n0ZxRr085qYi0wfWBWxms21L8My3ivbt/view?usp=sharing" }
    ],
  }
];

/**
 * Main application component.
 * Combines all sections into a single portfolio page layout.
 */
const App = () => {
  const [openIndex, setOpenIndex] = React.useState(null);
  return (
    <div className="min-h-screen bg-white text-gray-800 flex justify-center items-center p-4 sm:p-8 font-[Inter,sans-serif]">
      <div className="w-full max-w-3xl">
        {/* --- 1. Header/Hero Section --- */}
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-gray-200">
          {/* Intro Section (Text + Picture together) */}
          <div className="intro-section flex items-center gap-6">
            {/* Name and tagline */}
            <div>
              <h1 className="text-[37px] sm:text-6xl font-extrabold mb-3">
                Hi, I'm {profileData.name}{" "}
                <span className="inline animate-wave text-5xl">
                  {profileData.emojiWave}
                </span>
              </h1>
              <p className="text-[18px] text-gray-500 max-w-xl">{profileData.tagline}</p>
            </div>

            {/* Profile picture */}
            <div className="flex-shrink-0">
              <img
                src={profileData.profileImageUrl}
                alt={`${profileData.name}'s profile`}
                className="w-30 h-42 rounded-full object-cover ring-2 ring-black-500 shadow-lg"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100x100/A0AEC0/ffffff?text=User";
                }}
              />
            </div>
          </div>
        </header>

        {/* --- 2. About Section --- */}
        <div className='intro-section'>
          <section className="mt-12 mb-16">
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <div
              className="text-gray-700 text-[18px] leading-relaxed space-y-4"
              dangerouslySetInnerHTML={{ __html: profileData.aboutHtml }}
            />
          </section>
        </div>

        {/* --- 3. Work Experience Section --- */}
        <div className="intro-section">
          <section className="mb-32">
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>

            <div className="space-y-4">
              {workExperience.map((job, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="transition-all duration-200 rounded-lg bg-white shadow-sm"
                  >
                    {/* HEADER (clickable entire area) */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() =>
                        setOpenIndex(isOpen ? null : index)
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setOpenIndex(isOpen ? null : index);
                        }
                      }}
                      className={`flex items-center justify-between p-4 rounded-lg transition-colors duration-150 cursor-pointer ${
                        isOpen ? "bg-gray-100" : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex items-center space-x-4 min-w-0">
                        <img
                          src={job.logoUrl}
                          alt={`${job.company} logo`}
                          className="logo rounded-lg flex-shrink-0"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src =
                              "https://placehold.co/40x40/7C3AED/ffffff?text=Co";
                          }}
                        />
                        <div className="job flex flex-wrap items-center gap-2 min-w-0">
                          <p className="text-lg font-bold text-gray-900 whitespace-nowrap">
                            {job.company}
                          </p>
                          <p className="text-sm text-gray-500 whitespace-nowrap">
                            {job.role}
                          </p>
                        </div>
                      </div>

                      {/* Date + Arrow */}
                      <div className="job1 flex items-center space-x-2 ml-4">
                        <span className="text-sm font-medium text-gray-500 whitespace-nowrap">
                          {job.dates}
                        </span>
                        <span
                          className={`transform transition-transform duration-200 inline-block ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* COLLAPSIBLE DETAIL */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "max-h-[1000px] p-4 pt-0 bg-gray-50"
                          : "max-h-0 p-0"
                      }`}
                    >
                      {isOpen && (
                        <p className="text-gray-700 text-sm leading-relaxed mt-4">
                          {job.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        <div className='intro-section'>
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill, index) => (
                <div  
                  key={index}
                  className="flex items-center bg-gray-900 text-white text-[14px] font-medium pl-2 pr-4 py-1.5 rounded-full shadow-md transition-transform duration-150 hover:scale-[1.02] cursor-default"
                >
                  <button
                    className="btn"
                  >
                    {skill}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className='intro-section'>
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Problem Solving</h2>
            
            <div className="flex flex-col gap-4">
              {/* LeetCode */}
              <div className="flex items-center gap-[13px]">
                <img 
                  src="\LeetCode_logo_rvs.png" 
                  alt="LeetCode Logo" 
                  className="w-[65px] h-[65px] object-contain"
                />
                <span className="text-gray-800 text-[19px]">
                  <span className="bold">LeetCode: </span> 
                  300+ problems solved
                </span>
              </div>

              {/* GeeksforGeeks */}
              <div className="flex items-center gap-[12px]">
                <img 
                  src="\gfg.png" 
                  alt="GFG Logo" 
                  className="w-[54px] h-[54px] object-contain ml-[12px]"
                />
                <span className="text-gray-800 text-[19px]">
                  <span className="bold">GFG: </span>
                  100+ problems solved
                </span>
              </div>
            </div>
          </section>
        </div>
        
        <div className='intro-section'>
          <section className="mb-20 pt-8 border-t border-gray-100">
            {/* Header Content */}
            <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-10">
              <span className="bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full tracking-wider uppercase mb-3 shadow-md">
                My Projects
              </span>
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                Check out my latest work
              </h2>
              <p className="text-lg text-gray-600">
                I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
              </p>
            </div>
            
            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectData.map((project, index) => (
                <div 
                  key={index} 
                  className="flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.01]"
                >
                  {/* Project Image Placeholder */}
                  <div className="aspect-video">
                    <video
                      src={project.vidUrl} // replace with your video URL
                      className="w-full h-full object-cover rounded-lg"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/400x250/A0AEC0/ffffff?text=Video+Unavailable";
                      }}
                    />
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-indigo-600 font-medium mb-3">
                      {project.dates}
                    </p>
                    <p className="text-gray-600 text-base mb-4 flex-grow">
                      {project.description}
                    </p>
                    
                    {/* Skill Tags for Projects */}
                    <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t border-gray-100">
                      {project.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex} 
                          // Style for Project Tags (Lighter appearance)
                          className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Links */}
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.links.map((link, linkIndex) => (
                        <ProjectLink key={linkIndex} type={link.type} href={link.href} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Intro Section (Text + Picture together) */}
        <div className="intro-section">
          {/* Name and tagline */}
          <div>
            <h2 className="text-[37px] sm:text-6xl font-extrabold mb-3">
              I would love to connect with you!{" "}
            </h2>
            <p className="text-[18px] text-gray-500 max-w-xl">I am open to working for internships and full time opportunities!</p>
            <p className="text-[18px] text-gray-800 max-w-xl">Email: kaur.harnoor020@gmail.com</p>
          </div>
        </div>

      </div>

      {/* --- Waving Hand Animation --- */}
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-wave {
            animation: wave 2.5s infinite;
            transform-origin: 70% 70%;
            display: inline-block;
          }
        `}
      </style>
    </div>
  );
};

export default App;
