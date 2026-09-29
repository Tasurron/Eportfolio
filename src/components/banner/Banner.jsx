import img from "../../assets/my photo.jpg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  [["const ", "text-pink-400"], ["developer ", "text-cyan-300"], ["= {", "text-neutral-300"]],
  [["  name: ", "text-purple-300"], ['"Nafisa"', "text-green-300"], [",", "text-neutral-300"]],
  [["  role: ", "text-purple-300"], ['"Software Engineer"', "text-green-300"], [",", "text-neutral-300"]],
  [["  stack: ", "text-purple-300"], ['["ASP.NET", "Next.js"]', "text-green-300"], [",", "text-neutral-300"]],
  [["  loves: ", "text-purple-300"], ['"clean code"', "text-green-300"], [",", "text-neutral-300"]],
  [["};", "text-neutral-300"]],
];
const totalChars = codeLines.reduce(
  (sum, line) => sum + line.reduce((s, [t]) => s + t.length, 0),
  0
);

const CodeWindow = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(totalChars);
      return;
    }
    const timer = setInterval(() => {
      setCount((c) => (c >= totalChars ? c : c + 1));
    }, 55);
    return () => clearInterval(timer);
  }, []);

  let remaining = count;
  return (
    <div className="code-window w-72 rounded-xl border border-neutral-700 bg-neutral-900/80 shadow-2xl shadow-purple-500/30 text-left">
      <div className="flex items-center gap-2 border-b border-neutral-700 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400"></span>
        <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
        <span className="h-3 w-3 rounded-full bg-green-400"></span>
        <span className="ml-2 font-mono text-xs text-neutral-400">portfolio.js</span>
      </div>
      <pre className="px-4 py-3 font-mono text-[13px] leading-6 whitespace-pre text-left">
        {codeLines.map((line, i) => (
          <div key={i}>
            {line.map(([text, color], j) => {
              const shown = text.slice(0, Math.max(0, remaining));
              remaining -= text.length;
              return (
                <span key={j} className={color}>
                  {shown}
                </span>
              );
            })}
            {i === codeLines.length - 1 && (
              <span className="code-cursor text-cyan-300">▍</span>
            )}
          </div>
        ))}
      </pre>
    </div>
  );
};

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Banner = () => {
  return (
    <div className="md:hero md:h-screen">
      <div className="max-w-[1280px] flex items-center justify-center flex-col lg:flex-row-reverse gap-x-20 py-10 md:py-0">
        <div className="relative">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            src={img}
            className="max-w-[220px] sm:max-w-xs md:max-w-lg rounded-full my-14"
          />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            className="hidden md:block absolute -bottom-2 -left-16 z-10"
          >
            <CodeWindow />
          </motion.div>
        </div>
        <div>
          {/* h1  */}
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold"
          >
            Assalamualaikum, I’m Nafisa!
          </motion.h1>
          {/* h2  */}
          <motion.h2
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent  text-justify"
          >
            Passionate about creating seamless, user-focused experiences.
          </motion.h2>
          {/* p  */}
          <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="py-6 text-[20.3px]  text-justify "
          >
            Welcome to my portfolio! I aim to apply what I've learned in software engineering to build practical, reliable digital solutions — while continuing to grow, explore new ideas, and deepen my skills along the way.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
