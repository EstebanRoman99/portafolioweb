import { motion } from "framer-motion";

const ProjectCard = ({ project, onClick, isDarkTheme }) => (
  <motion.div
    className={`p-4 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
      isDarkTheme
        ? "hover:bg-green-500 text-gray-300 hover:text-black"
        : "hover:bg-pink-300 text-black"
    }`}
    whileHover={{ scale: 1.05 }}
    onClick={onClick}
  >
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-40 object-cover rounded-lg mb-4"
    />
    <h3 className="text-lg font-bold">{project.title}</h3>
    <p className="text-sm">{project.description}</p>
  </motion.div>
);

export default ProjectCard;
