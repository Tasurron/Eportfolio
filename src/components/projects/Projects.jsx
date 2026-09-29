import Project from "./Project";
import projects from "../../data/projects.json";

const Projects = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <h1 className="text-4xl text-center my-20">Projects</h1>
      <div>
        {projects.map((item) => (
          <Project key={item.id} item={item}></Project>
        ))}
      </div>
    </div>
  );
};

export default Projects;
