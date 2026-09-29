import Navbar from "../navbar/Navbar";
import Contact from "../contact/Contact";
import { Outlet } from "react-router";
import {
  SiDotnet,
  SiSharp,
  SiCplusplus,
  SiNextdotjs,
  SiNestjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiFigma,
} from "react-icons/si";

const codeSymbols = [
  { text: "</>", top: "8%", left: "6%", size: "2.4rem", color: "text-cyan-300/25", delay: "0s", duration: "16s" },
  { text: "{ }", top: "18%", left: "82%", size: "3rem", color: "text-purple-300/25", delay: "-4s", duration: "20s" },
  { text: "=>", top: "55%", left: "90%", size: "2.2rem", color: "text-cyan-300/20", delay: "-2s", duration: "22s" },
  { text: "( )", top: "70%", left: "12%", size: "2.6rem", color: "text-purple-300/20", delay: "-10s", duration: "19s" },
  { text: "</>", top: "82%", left: "70%", size: "2rem", color: "text-pink-300/20", delay: "-6s", duration: "17s" },
  { text: "[ ]", top: "30%", left: "48%", size: "1.8rem", color: "text-cyan-300/15", delay: "-12s", duration: "24s" },
  { text: "//", top: "90%", left: "36%", size: "2.2rem", color: "text-purple-300/20", delay: "-3s", duration: "21s" },
  { text: "&&", top: "12%", left: "34%", size: "1.8rem", color: "text-pink-300/15", delay: "-9s", duration: "23s" },
  // code syntax
  { text: "async / await", top: "48%", left: "70%", size: "1rem", color: "text-purple-300/20", delay: "-11s", duration: "25s" },
  { text: "git commit -m", top: "76%", left: "44%", size: "1rem", color: "text-pink-300/20", delay: "-1s", duration: "27s" },
  { text: "SELECT * FROM", top: "88%", left: "82%", size: "0.95rem", color: "text-pink-300/15", delay: "-9s", duration: "26s" },
  { text: "public class", top: "66%", left: "78%", size: "0.95rem", color: "text-cyan-300/15", delay: "-4s", duration: "29s" },
  { text: "import React", top: "92%", left: "8%", size: "0.95rem", color: "text-purple-300/20", delay: "-6s", duration: "25s" },
  // tech stack icons
  { Icon: SiDotnet, top: "14%", left: "22%", size: "2.4rem", color: "text-purple-300/25", delay: "-2s", duration: "20s" },
  { Icon: SiSharp, top: "34%", left: "88%", size: "2.4rem", color: "text-cyan-300/25", delay: "-8s", duration: "22s" },
  { Icon: SiCplusplus, top: "58%", left: "6%", size: "2.4rem", color: "text-cyan-300/20", delay: "-5s", duration: "24s" },
  { Icon: SiNextdotjs, top: "78%", left: "26%", size: "2.4rem", color: "text-neutral-300/20", delay: "-10s", duration: "21s" },
  { Icon: SiNestjs, top: "4%", left: "44%", size: "2.4rem", color: "text-pink-300/20", delay: "-9s", duration: "24s" },
  { Icon: SiJavascript, top: "40%", left: "14%", size: "2.4rem", color: "text-purple-300/20", delay: "-7s", duration: "23s" },
  { Icon: SiTypescript, top: "84%", left: "58%", size: "2.4rem", color: "text-cyan-300/20", delay: "-3s", duration: "23s" },
  { Icon: SiTailwindcss, top: "20%", left: "68%", size: "2.4rem", color: "text-cyan-300/20", delay: "-12s", duration: "25s" },
  { Icon: SiHtml5, top: "62%", left: "64%", size: "2.4rem", color: "text-pink-300/20", delay: "-13s", duration: "22s" },
  { Icon: SiCss3, top: "90%", left: "46%", size: "2.4rem", color: "text-purple-300/20", delay: "-4s", duration: "25s" },
  { Icon: SiBootstrap, top: "8%", left: "90%", size: "2.4rem", color: "text-purple-300/20", delay: "-9s", duration: "24s" },
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
