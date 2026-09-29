import img from "../../assets/cover.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-500 pb-4 mt-10 md:mt-0">
      <h1 className="text-4xl text-center my-20">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={img}
              alt="about"
              className="rounded-2xl max-w-sm"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-2 max-w-xl py-6 text-[20.3px] text-justify"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              I'm Tasurron Nazerin Nafisa, a Software Engineering graduate from American International University – Bangladesh, passionate about web development and building things that actually work.
              Throughout my academic journey, I've learned mostly by doing — taking on real projects instead of just studying theory, and figuring things out along the way.
              I'm especially interested in backend architecture and designing systems that hold up under real use.
              Outside of coursework, I enjoy exploring new web development tools, collaborating with teams on projects, and picking up design work in Figma when a project calls for it.
              I'm always looking for the next thing to learn, and I try to bring that mindset into everything I build.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
