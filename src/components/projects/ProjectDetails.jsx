import { Link, useParams } from "react-router";
import projects from "../../data/projects.json";

const ProjectDetails = () => {
  const { id } = useParams();
  const item = projects.find((p) => String(p.id) === id);

  if (!item)
    return <div className="text-center mt-10 text-xl">Item not found</div>;

  return (
    <div className="container mx-auto max-w-7xl mt-8 px-4">
      {/* Title */}
      <h1 className="font-bold text-3xl mb-4">{item.title}</h1>

      {/* Description */}
      <p className="text-lg font-semibold mb-6">{item.description}</p>

      {/* Images */}
      <div className="images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
        {item.imgs?.length > 0 ? (
          item.imgs.map((img, index) => (
            <div
              key={index}
              className="w-full h-64 bg-neutral-900 rounded-xl shadow-md overflow-hidden flex items-center justify-center"
            >
              <img
                src={img}
                alt={`${item.title} ${index + 1}`}
                loading={index < 3 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
          ))
        ) : (
          <div className="w-full h-64 bg-neutral-900 rounded-xl shadow-md overflow-hidden flex items-center justify-center">
            <img
              src={item.head}
              alt={item.title}
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </div>

      {/* Detailed Description */}
      {item.details && (
        <p className="text-lg mb-6">
          <span className="font-bold">Detailed description:</span> {item.details}
        </p>
      )}

      {/* Back Button */}
      <Link to="/projects">
        <button className="btn">Back</button>
      </Link>
    </div>
  );
};

export default ProjectDetails;
