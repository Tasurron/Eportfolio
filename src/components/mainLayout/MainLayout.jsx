import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import { Outlet } from "react-router";
import {
  SiDotnet,
  SiCplusplus,
  SiNextdotjs,
  SiNestjs,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFigma,
} from "react-icons/si";

const codeSymbols = [
  // tech stack icons
  { Icon: SiDotnet, top: "14%", left: "22%", size: "2.4rem", color: "text-purple-300/25", delay: "-2s", duration: "20s" },
  { Icon: SiCplusplus, top: "58%", left: "6%", size: "2.4rem", color: "text-cyan-300/20", delay: "-5s", duration: "24s" },
  { Icon: SiNextdotjs, top: "78%", left: "26%", size: "2.4rem", color: "text-neutral-300/20", delay: "-10s", duration: "21s" },
  { Icon: SiNestjs, top: "4%", left: "44%", size: "2.4rem", color: "text-pink-300/20", delay: "-9s", duration: "24s" },
  { Icon: SiJavascript, top: "40%", left: "14%", size: "2.4rem", color: "text-purple-300/20", delay: "-7s", duration: "23s" },
  { Icon: SiTailwindcss, top: "20%", left: "68%", size: "2.4rem", color: "text-cyan-300/20", delay: "-12s", duration: "25s" },
  { Icon: SiHtml5, top: "62%", left: "64%", size: "2.4rem", color: "text-pink-300/20", delay: "-13s", duration: "22s" },
  { Icon: SiCss3, top: "90%", left: "46%", size: "2.4rem", color: "text-purple-300/20", delay: "-4s", duration: "25s" },
  { Icon: SiFigma, top: "72%", left: "92%", size: "2.4rem", color: "text-pink-300/20", delay: "-14s", duration: "26s" },
];

const MainLayout = () => {
  return (
    <div className="overflow-x-hidden antialiased text-neutral-300 selection:bg-cyan-300 selection:text-cyan-900 tracking-tight text-justify">
      <div
        aria-hidden="true"
        className="fixed inset-0 -z-10 overflow-hidden bg-[#06060d] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(120,119,198,0.22),transparent)]"
      >
        <div className="bg-orb bg-orb-1 -top-40 -left-32 h-[40rem] w-[40rem] bg-[radial-gradient(circle,rgba(147,51,234,0.35)_0%,transparent_65%)]"></div>
        <div className="bg-orb bg-orb-2 top-1/4 -right-40 h-[44rem] w-[44rem] bg-[radial-gradient(circle,rgba(34,211,238,0.24)_0%,transparent_65%)]"></div>
        <div className="bg-orb bg-orb-3 -bottom-40 left-1/4 h-[38rem] w-[38rem] bg-[radial-gradient(circle,rgba(236,72,153,0.24)_0%,transparent_65%)]"></div>
        <div className="bg-grid-floor"></div>
        <div className="absolute inset-0" style={{ perspective: "800px" }}>
          {codeSymbols.map((s, i) => (
            <span
              key={i}
              className={`code-symbol ${s.color}`}
              style={{
                top: s.top,
                left: s.left,
                fontSize: s.size,
                animationDelay: s.delay,
                animationDuration: s.duration,
              }}
            >
              {s.Icon ? <s.Icon /> : s.text}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-8 ">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default MainLayout;
