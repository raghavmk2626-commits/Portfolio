import project1 from "../assets/project1.jpg";
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { SkillCard } from './components/SkillCard';
import { Button } from './components/ui/button';
import { Mail, Linkedin, Github, Figma, Palette, Users, Zap, Smartphone, Layout, FileCode, Braces} from 'lucide-react';
<h1>test update</h1>
function App() {
  const projects = [
    {
      title: "Mental Health Mobile Application",
      description: "Comprehensive mental health app designed to provide accessible support, meditation resources, and mood tracking. Focused on creating a safe, calming user experience.",
      image: project1,
      tags: ["Mobile App", "Mental Health", "Wellness"],
      year: "2025",
      link: "https://www.figma.com/proto/qNoMIyDuLfBhT6bKOkk3Ju/Untitled?node-id=2010-174&p=f&t=VoQwCcJb6cP47gAX-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2010%3A174"
    },
    {
      title: "Mobile Service Application",
      description: "On-demand service platform connecting users with service providers. Streamlined booking process with real-time tracking and secure payments.",
      image: project2,
      tags: ["Mobile App", "Service Platform", "UX Design"],
      year: "2025",
      link: "https://www.figma.com/proto/vWCdN39TRdy0fTpSlynazD/Untitled?node-id=17-398&p=f&t=4ZfMqW8wrObXuupK-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=17%3A398&device-frame=0"
    },
    {
    title: "Book Library (Full Stack)",
    description: "Full stack web application for managing books with CRUD operations.",
    image: project3,
    tags: ["Full Stack", "Web App", "CRUD"],
    year: "2025"
    },
    {
    title: "Legal Justice Predictor",
    description: "Machine learning project that predicts legal outcomes using historical data.",
    image: project4,
    tags: ["Machine Learning", "AI", "Prediction"],
    year: "2026"
    }
  ];

  const skills = [
    {
      icon: Palette,
      title: "Visual Design",
      description: "Creating beautiful and functional interfaces with attention to typography, color, and layout."
    },
    {
      icon: Users,
      title: "User Research",
      description: "Conducting interviews, surveys, and usability testing to understand user needs and behaviors."
    },
    {
      icon: Zap,
      title: "Prototyping",
      description: "Building interactive prototypes to validate ideas and communicate design solutions effectively."
    },
    {
      icon: FileCode,
      title: "HTML",
      description: "Building semantic and structured web pages."
    },
    {
      icon: Palette,
      title: "CSS",
      description: "Styling responsive layouts and modern UI."
    },
    {
      icon: Braces,
      title: "JavaScript",
      description: "Adding interactivity and logic to websites."
    },
    {
    icon: Braces,
    title: "TypeScript",
    description: "Writing scalable and type-safe frontend code."
    },
    {
    icon: FileCode,
    title: "React",
    description: "Building reusable UI components and modern interfaces."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <Hero />

      {/* Education Section */}
      <section id="education" className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Education</h2>
            <p className="text-lg text-gray-600">Academic background</p>
          </div>
          
          <div className="space-y-6">
            <div className="border-l-4 border-gray-900 pl-6 py-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl">BE Computer Science and Design</h3>
                <span className="text-gray-600">2022-2026</span>
              </div>
              <p className="text-gray-600">Kongu Engineering College</p>
              <p className="text-gray-900 mt-1">CGPA: 7.09</p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6 py-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl">Higher Secondary Certificate (HSC)</h3>
                <span className="text-gray-600">2021-2022</span>
              </div>
              <p className="text-gray-600">Sri Nachammal Vidyavani School</p>
              <p className="text-gray-900 mt-1">Percentage: 70.6%</p>
            </div>

            <div className="border-l-4 border-gray-900 pl-6 py-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl">Secondary School Certificate (SSC)</h3>
                <span className="text-gray-600">2019-2020</span>
              </div>
              <p className="text-gray-600">Sri Nachammal Vidyavani School</p>
              <p className="text-gray-900 mt-1">Percentage: 81.6%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Projects</h2>
            <p className="text-lg text-gray-600">A collection of my recent design projects</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600">What I bring to the table</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-12">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="https://mail.google.com/mail/?view=cm&to=raghavmk2626@gmail.com" target="_blank">
            <Button size="lg" className="gap-2">
              <Mail className="h-4 w-4" />
              Email Me
            </Button>
            </a>
            <a href="https://www.linkedin.com/in/raghav-m-k-9b572a3a9/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </Button>
            </a>
            <a href="https://github.com/raghavmk2626-commits" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </Button>
            </a>
          </div>

          <div className="text-sm text-gray-500">
            © 2026 All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;