import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  const links = [
    {
      href: "https://www.linkedin.com/in/tasurron-nazerin-nafisa-2978a22a8/",
      icon: <FaLinkedin />,
    },
    {
      href: "https://github.com/Tasurron",
      icon: <FaGithub />,
    },

  ];

  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="text-4xl text-center my-10">Get in Touch</h1>

      <div className="flex justify-center items-center mb-10">
        <ul className="list-none flex flex-row gap-5 items-center text-2xl">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center tracking-tighter">

        <a
          href="mailto:tasurron.tn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-b"
        >
          tasurron.tn@gmail.com
        </a>
        <p className="my-4">Dhaka, Bangladesh</p>
      </div>
    </div>
  );
};

export default Contact;
