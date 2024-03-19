import React, { useState, useEffect } from "react";
import BarNav from "../components/navbar/BarNav";
import Image from "next/image";
import DiversityChart from "../components/home/DiversityChart";
import GenderChart from "../components/home/GenderChart";
import ComparisonChart from "../components/home/ComparisonChart";
import PerformanceChart from "../components/home/PerformanceChart";
import EnrollmentChart from "../components/home/EnrollmentChart";
import ProgramCard from "../components/home/ProgramCard";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faHardHat,
  faPalette,
  faFilm,
  faBriefcase,
  faPuzzlePiece,
  faChalkboardTeacher,
  faHospital,
  faSuitcaseRolling,
  faUsers,
  faDesktop,
  faNewspaper,
  faGavel,
  faIndustry,
  faGlobe,
  faAnchor,
  faFlask,
  faBook,
  faTruck,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const timelineEvents = [
    {
      title: "School Inauguration",
      date: "August 2005",
      description:
        "Seven Lakes High School officially opens its doors, relieving overcrowding in neighboring schools and becoming the largest high school construction project in Texas at the time.",
    },
    {
      title: "First Graduating Class",
      date: "May 2008",
      description:
        "Seven Lakes celebrates its first graduating class of 408 students, marking a significant milestone in the school's history.",
    },
    {
      title: "National Recognition",
      date: "2008",
      description:
        "Seven Lakes is nominated as a 'National Blue Ribbon School of 2008,' gaining recognition for its commitment to academic excellence.",
    },
    {
      title: "Construction Completion",
      date: "2009",
      description:
        "The construction of Seven Lakes High School, with a total cost of $77,424,704, is completed, making it the second-largest and most expensive school built at one time in the United States.",
    },
    {
      title: "Athletic Achievements",
      date: "2013-2023",
      description:
        "Seven Lakes achieves numerous state championships in athletics, including victories in boys cross country, wrestling, volleyball, spirit, and boys soccer.",
    },
    {
      title: "Academic Excellence",
      date: "2019",
      description:
        "Seven Lakes High School meets state standards and earns distinctions in all surveyed areas by the Texas Education Agency, showcasing its commitment to academic success.",
    },
    {
      title: "Covid's Impact",
      date: "March 2020",
      description:
        "The COVID-19 pandemic affects the school, leading to challenges in adapting to remote learning and impacting various events and activities.",
    },
    {
      title: "Current Achievements",
      date: "2024",
      description:
        "In its nineteenth year, Seven Lakes High School continues to excel in academics, athletics, and fine arts, maintaining its status as a high-performing campus and earning accolades.",
    },

    // Add more events as needed
  ];

  const programs = [
    {
      title: "Agriculture, Food, and Natural Resources",
      description:
        "This program focuses on the study of agricultural practices, food science, and natural resource management.",
      courses: [
        "Introduction to Agriculture",
        "Food Science",
        "Natural Resource Management",
      ],
      FaIcon: faBookOpen,
    },
    {
      title: "Architecture and Construction",
      description:
        "Explore the principles of architecture and construction, including design, building technology, and project management.",
      courses: [
        "Architectural Design",
        "Construction Technology",
        "Project Management",
      ],
      FaIcon: faHardHat,
    },
    {
      title: "Arts and Humanities",
      description:
        "Immerse yourself in the world of arts and humanities, covering literature, philosophy, visual arts, and more.",
      courses: ["Literary Studies", "Philosophy", "Visual Arts"],
      FaIcon: faPalette,
    },
    {
      title: "Arts, Audio Video Technology and Communication",
      description:
        "Dive into the creative realms of arts and communication, including audio-video production, graphic design, and media studies.",
      courses: ["Media Production", "Graphic Design", "Communication Studies"],
      FaIcon: faFilm,
    },
    {
      title: "Business, Marketing, and Finance",
      description:
        "Develop skills in business management, marketing strategies, and financial planning.",
      courses: [
        "Business Management",
        "Marketing Strategies",
        "Financial Planning",
      ],
      FaIcon: faBriefcase,
    },
    {
      title: "Combinations",
      description:
        "Explore interdisciplinary studies that combine elements from multiple fields, fostering a holistic approach to problem-solving.",
      courses: [
        "Interdisciplinary Studies",
        "Problem-Solving Approaches",
        "Integration of Disciplines",
      ],
      FaIcon: faPuzzlePiece,
    },
    {
      title: "Education and Training",
      description:
        "Prepare for a career in education and training, covering pedagogy, curriculum development, and classroom management.",
      courses: ["Pedagogy", "Curriculum Development", "Classroom Management"],
      FaIcon: faChalkboardTeacher,
    },
    {
      title: "Health Science",
      description:
        "Study various aspects of health science, including anatomy, medical technology, and patient care.",
      courses: ["Anatomy", "Medical Technology", "Patient Care"],
      FaIcon: faHospital,
    },
    {
      title: "Hospitality and Tourism",
      description:
        "Delve into the world of hospitality and tourism, learning about hotel management, event planning, and travel industry trends.",
      courses: ["Hotel Management", "Event Planning", "Travel Industry Trends"],
      FaIcon: faSuitcaseRolling,
    },
    {
      title: "Human Services",
      description:
        "Focus on human services, covering social work, counseling, and community support.",
      courses: ["Social Work", "Counseling", "Community Support"],
      FaIcon: faUsers,
    },
    {
      title: "Information Technology",
      description:
        "Explore the dynamic field of information technology, including software development, cybersecurity, and network administration.",
      courses: [
        "Software Development",
        "Cybersecurity",
        "Network Administration",
      ],
      FaIcon: faDesktop,
    },
    {
      title: "Journalism and Speech",
      description:
        "Hone your skills in journalism and speech, covering writing, reporting, and public speaking.",
      courses: [
        "Journalistic Writing",
        "Reporting Techniques",
        "Public Speaking",
      ],
      FaIcon: faNewspaper,
    },
    {
      title: "Law and Public Service",
      description:
        "Study law and public service, including legal principles, criminal justice, and public administration.",
      courses: [
        "Legal Principles",
        "Criminal Justice",
        "Public Administration",
      ],
      FaIcon: faGavel,
    },
    {
      title: "Manufacturing",
      description:
        "Learn about manufacturing processes, industrial engineering, and quality control.",
      courses: [
        "Manufacturing Processes",
        "Industrial Engineering",
        "Quality Control",
      ],
      FaIcon: faIndustry,
    },
    {
      title: "Multidisciplinary",
      description:
        "Engage in multidisciplinary studies, exploring diverse subjects and fostering a broad perspective.",
      courses: [
        "Multidisciplinary Studies",
        "Diverse Subjects Exploration",
        "Broad Perspective Development",
      ],
      FaIcon: faGlobe,
    },
    {
      title: "NJROTC",
      description:
        "Participate in the Naval Junior Reserve Officers Training Corps, developing leadership and maritime skills.",
      courses: ["Naval Leadership", "Maritime Skills", "Team Building"],
      FaIcon: faAnchor,
    },
    {
      title: "Science, Technology, Engineering, and Mathematics (STEM)",
      description:
        "Focus on STEM disciplines, including science, technology, engineering, and mathematics, preparing for careers in these fields.",
      courses: [
        "STEM Foundations",
        "Engineering Applications",
        "Advanced Mathematics",
      ],
      FaIcon: faFlask,
    },
    {
      title: "TEA-Designated Program of Study",
      description:
        "Participate in a program of study designated by the Texas Education Agency, aligning with state educational standards.",
      courses: [
        "TEA-Designated Curriculum",
        "State Educational Standards Alignment",
        "Academic Excellence",
      ],
      FaIcon: faBook,
    },
    {
      title: "Transportation, Distribution, and Logistics",
      description:
        "Explore transportation systems, logistics management, and distribution strategies.",
      courses: [
        "Transportation Systems",
        "Logistics Management",
        "Distribution Strategies",
      ],
      FaIcon: faTruck,
    },
  ];

  const [Recharts, setRecharts] = useState(null);

  useEffect(() => {
    import("recharts").then((module) => {
      setRecharts(module);
    });
  }, []);

  if (!Recharts) {
    return null; // or a loading spinner
    console.log("deployment works")
  }
   
  return (
    <div className="bg-red-500 text-white relative">
      <BarNav />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 relative">
        <Image src="/slhs.jpeg" alt="SLHS" layout="fill" objectFit="cover" />
        <div className="absolute top-1/3 right-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10 slideDown">
          <p className="text-2xl font-bold text-left">Welcome to SLHS</p>
          <a href="#about">
            <button className="bg-red-500 hover:bg-red-700 transition-colors duration-300 px-4 py-2 rounded">
              Learn Our History
            </button>
          </a>
        </div>
      </div>

      <section id="about" className="mt-10">
        <h1 className="text-center pt-2">
          <b className="font-raleway text-2xl">OUR STORY</b>
        </h1>
        <div className="container-timeline">
          <div className="timeline">
            <ul>
              {timelineEvents.map((event, index) => (
                <li key={index}>
                  <div
                    className={`timeline-css ${
                      index % 2 === 0
                        ? 'data-aos="fade-right"'
                        : 'data-aos="fade-left"'
                    }`}
                  >
                    <div className="timeline-content">
                      <h1>{event.title}</h1>
                      <h2>{event.date}</h2>
                      <p>{event.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="awards" className="bg-white text-red-500 py-10">
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl font-bold text-center mb-6">
            Honors and Recognition
          </h2>
          <p className="text-center mb-8">
            Seven Lakes High School is proud to be recognized for excellence in
            education. Here are some of our most notable achievements:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Example of an award card */}
            <div className="bg-red-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out hover:border-2 hover:border-red-500">
              <h3 className="text-xl font-semibold mb-2">
                #356 in National Rankings
              </h3>
              <p className="text-md mb-4">
                Awarded by U.S. News & World Report for outstanding academic
                performance.
              </p>
              <span className="text-red-600 font-bold">
                Overall Score 97.99/100
              </span>
            </div>

            <div className="bg-red-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out hover:border-2 hover:border-red-500">
              <h3 className="text-xl font-semibold mb-2">
                #12 in High Schools in Texas
              </h3>
              <p className="text-md mb-4">
                Ranked by the Texas Education Agency based on academic
                performance.
              </p>
              <span className="text-red-600 font-bold">Score 98%</span>
            </div>

            <div className="bg-red-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-200 ease-in-out hover:border-2 hover:border-red-500">
              <h3 className="text-xl font-semibold mb-2">
                3,500+ Students On Campus
              </h3>
              <p className="text-md mb-4">
                Representing a large student population contributing to a
                vibrant learning environment.
              </p>
              <span className="text-red-600 font-bold">Enrollment Size</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-500 text-white py-10">
        <div className="mt-10 mb-10 bg-red-500">
          <h3 className="text-2xl font-bold text-center mb-6">
            Key Statistics
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center">
              <span className="text-4xl font-bold">61%</span>
              <p className="mt-1">AP Participation Rate</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold">98%</span>
              <p className="mt-1">Graduation Rate</p>
            </div>
            <div className="text-center">
              <span className="text-4xl font-bold">70%</span>
              <p className="mt-1">Student-Teacher Ratio</p>
            </div>

            <div className="text-center">
              <span className="text-4xl font-bold">80%</span>
              <p className="mt-1">Financial Aid Recipients</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="#programs"
              className="bg-white text-red-500 px-6 py-3 rounded-full font-bold transition duration-300 ease-in-out hover:bg-red-400 hover:text-white"
            >
              Learn More About Our Programs
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white text-red-500 py-10 px-10">
        <div className="mt-10 ">
          <h3 className="text-2xl font-bold text-center mb-6">
            Seven Lakes By The Stats
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center justify-center rounded-md  shadow-xl">
              <DiversityChart />
            </div>
            <div className="flex items-center justify-center rounded-md  shadow-xl">
              <GenderChart />
            </div>
            <div className="flex items-center justify-center rounded-md  shadow-xl">
              <ComparisonChart />
            </div>
            <div className="flex items-center justify-center rounded-md  shadow-xl">
              <EnrollmentChart />
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="bg-red-500 text-white py-10 px-10">
        <div className="mt-10">
          <h3 className="text-2xl font-bold text-center mb-6">
            Programs of Study
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                courses={program.courses}
                FaIcon={program.FaIcon}
              />
            ))}
          </div>
        </div>
      </section>

       <section id="documentation" className="mx-auto max-w-7xl p-4">
        <h1 className="text-4xl font-bold mb-6 text-white">Documentation - About SLHS</h1>
        <div className=" text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">About This Website</h2>
          <p className="mb-4">This website was built using a variety of technologies including Next.js, Vercel, and Tailwind CSS.</p>

          <ul className="list-disc list-inside space-y-2 text-lg">

            <li>Next.js is a React framework that allows you to build static and server-side rendered websites.</li>
            <li>Vercel is a platform that allows you to host websites and applications.</li>
            <li>Tailwind CSS is a utility-first CSS framework that allows you to build responsive websites with ease.</li>
            <li>Material UI is a React component library that allows you to build responsive websites with ease.</li>
            <li>React is a JavaScript library that allows you to build user interfaces.</li>
            <li>Font Awesome is a library of icons that can be used in web development.</li>
          </ul>

          <h2 className="text-2xl font-bold mb-4 mt-4">Despite using libraries, all code was created by me. </h2>
          <a href="/UTE School.pdf" download>
 <button className="mt-4 bg-white hover:bg-gray-100 text-gray-600 font-bold py-2 px-4 rounded cursor-pointer">Download Documentation</button>
</a>
         
        </div>
      </section>
      <Footer />
    </div>
  );
}
