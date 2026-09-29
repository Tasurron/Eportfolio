import { motion } from "framer-motion";
import { Link } from "react-router";
import { GiStrong } from "react-icons/gi";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdOutlineSyncProblem } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const softSkills = [
  {
    name: "Hard-Working",
    Icon: GiStrong,
    desc: "Committed to delivering high-quality results through dedication and perseverance.",
  },
  {
    name: "Teamwork",
    Icon: BsMicrosoftTeams,
    desc: "Thrives in collaborative environments, sharing knowledge and supporting teammates.",
  },
  {
    name: "Problem Solving",
    Icon: MdOutlineSyncProblem,
    desc: "Breaks down complex issues into manageable parts using analytical thinking.",
  },
  {
    name: "Time Management",
    Icon: FaClock,
    desc: "Prioritizes tasks and manages deadlines without compromising quality.",
  },
];

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
const SIMPLEICONS = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

const skillCategories = [
  {
    title: "Backend",
    skills: [
      {
        name: "ASP.NET Core",
        icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
        desc: "Building secure, scalable APIs and web applications.",
      },
      {
        name: "C#",
        icon: `${DEVICON}/csharp/csharp-original.svg`,
        desc: "Strongly-typed language for reliable backend systems.",
      },
      {
        name: "PHP",
        icon: `${DEVICON}/php/php-original.svg`,
        desc: "Server-side scripting for dynamic web applications.",
      },
      {
        name: "NestJS",
        icon: `${DEVICON}/nestjs/nestjs-original.svg`,
        desc: "Structured Node.js framework for scalable server apps.",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "Next.js",
        icon: `${DEVICON}/nextjs/nextjs-original.svg`,
        desc: "React framework for fast, server-rendered interfaces.",
      },
      {
        name: "React",
        icon: `${DEVICON}/react/react-original.svg`,
        desc: "Component-based library for building dynamic user interfaces.",
      },
      {
        name: "TypeScript",
        icon: `${DEVICON}/typescript/typescript-original.svg`,
        desc: "Typed superset of JavaScript for safer, more reliable code.",
      },
      {
        name: "JavaScript",
        icon: `${DEVICON}/javascript/javascript-original.svg`,
        desc: "Core language for interactive, dynamic user interfaces.",
      },
      {
        name: "HTML5",
        icon: `${DEVICON}/html5/html5-original.svg`,
        desc: "Semantic markup for accessible, well-structured pages.",
      },
      {
        name: "CSS3",
        icon: `${DEVICON}/css3/css3-original.svg`,
        desc: "Styling and responsive layouts for modern interfaces.",
      },
      {
        name: "Tailwind CSS",
        icon: `${DEVICON}/tailwindcss/tailwindcss-original.svg`,
        desc: "Utility-first CSS framework for building custom designs fast.",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "SQL Server",
        icon: `${DEVICON}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
        desc: "Relational database management for transactional data.",
      },
      {
        name: "PostgreSQL",
        icon: `${DEVICON}/postgresql/postgresql-original.svg`,
        desc: "Advanced open-source database for reliable data storage.",
      },
    ],
  },
  {
    title: "Architecture",
    skills: [
      {
        name: "Entity Framework",
        icon: `${DEVICON}/dotnetcore/dotnetcore-original.svg`,
        desc: "ORM for mapping objects to relational data cleanly.",
      },
      {
        name: "REST APIs",
        icon: `${SIMPLEICONS}/openapiinitiative.svg`,
        desc: "Designing stateless APIs for client-server communication.",
      },
      {
        name: "JWT Authentication",
        icon: `${SIMPLEICONS}/jsonwebtokens.svg`,
        desc: "Token-based authentication for secure user sessions.",
      },
      {
        name: "MVC / 3-Tier",
        icon: `${DEVICON}/dot-net/dot-net-original.svg`,
        desc: "Layered architecture separating concerns for maintainability.",
      },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      {
        name: "C++",
        icon: `${DEVICON}/cplusplus/cplusplus-original.svg`,
        desc: "Performance-focused language for systems and graphics.",
      },
      {
        name: "OpenGL / GLUT",
        icon: `${SIMPLEICONS}/khronosgroup.svg`,
        desc: "Real-time 2D/3D graphics rendering for interactive apps.",
      },
      {
        name: "Chart.js",
        icon: `${SIMPLEICONS}/chartdotjs.svg`,
        desc: "Rendering interactive charts and data visualizations.",
      },
      {
        name: "Stripe",
        icon: `${SIMPLEICONS}/stripe.svg`,
        desc: "Integrating secure online payment processing.",
      },
      {
        name: "Bootstrap",
        icon: `${DEVICON}/bootstrap/bootstrap-original.svg`,
        desc: "Responsive UI components for clean interfaces.",
      },
      {
        name: "Figma",
        icon: `${DEVICON}/figma/figma-original.svg`,
        desc: "Designing interfaces and prototypes before development.",
      },
      {
        name: "Git & GitHub",
        icon: `${DEVICON}/git/git-original.svg`,
        desc: "Version control and collaboration for tracking project history.",
      },
    ],
  },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    className="group relative w-full max-w-sm"
  >
    {/* Hover glow */}
    <div className="absolute -inset-[2px] -z-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-400 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40"></div>

    {/* Card */}
    <div className="relative flex items-center gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all duration-300 group-hover:border-cyan-300/30 group-hover:bg-neutral-900/80">
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-neutral-700 bg-white/90 p-2.5 shadow-inner">
        <img
          src={skill.icon}
          alt={`${skill.name} logo`}
          className="h-full w-full object-contain transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div>
        <h6 className="font-semibold tracking-wide text-neutral-100 transition-colors group-hover:text-cyan-300">
          {skill.name}
        </h6>
        <p className="mt-1 text-sm font-light text-neutral-400">
          {skill.desc}
        </p>
      </div>
    </div>
  </motion.div>
);

const Skill = () => {
  return (
    <div>
      <div className="border-b border-neutral-500 pb-4">
        <h1 className="text-4xl text-center my-20">
          Technical <span className="text-neutral-500">Skills</span>
        </h1>

        {skillCategories.map((category) => (
          <div key={category.title} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
              {category.skills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>
        ))}

        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
            Soft Skills
          </h2>
          <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative w-full max-w-sm"
              >
                <div className="absolute -inset-[2px] -z-10 rounded-2xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-400 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-40"></div>
                <div className="relative flex items-center gap-5 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-5 transition-all duration-300 group-hover:border-cyan-300/30 group-hover:bg-neutral-900/80">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-800 text-cyan-300 text-2xl">
                    <skill.Icon />
                  </div>
                  <div>
                    <h6 className="font-semibold tracking-wide text-neutral-100 transition-colors group-hover:text-cyan-300">
                      {skill.name}
                    </h6>
                    <p className="mt-1 text-sm font-light text-neutral-400">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View Projects CTA */}
        <div className="flex justify-center mt-4 mb-16">
          <Link
            to="/projects"
            className="btn rounded-full bg-transparent px-8 text-lg border-cyan-300 text-cyan-300 hover:bg-cyan-300 hover:text-neutral-900 transition-colors duration-300"
          >
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skill;
