import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ThemeContext";
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";
import image5 from "/public/5.png";
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import {
  BiLogoAndroid,
  BiLogoApple,
  BiLogoDjango,
  BiLogoDocker,
  BiLogoFirebase,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTailwindCss,
  BiLogoTypescript,
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJava,
} from "react-icons/bi";
import { useTranslation } from "react-i18next";

const technologyIcons = {
  JavaScript: {
    icon: BiLogoJavascript,
    lightColor: "text-yellow-300",
    darkColor: "text-yellow-400",
  },
  React: {
    icon: BiLogoReact,
    lightColor: "text-cyan-300",
    darkColor: "text-cyan-400",
  },
  TailwindCSS: {
    icon: BiLogoTailwindCss,
    lightColor: "text-teal-300",
    darkColor: "text-teal-400",
  },
  NodeJS: {
    icon: BiLogoNodejs,
    lightColor: "text-green-400",
    darkColor: "text-green-500",
  },
  Docker: {
    icon: BiLogoDocker,
    lightColor: "text-blue-500",
    darkColor: "text-blue-600",
  },
  PostgreSQL: {
    icon: BiLogoPostgresql,
    lightColor: "text-blue-700",
    darkColor: "text-blue-800",
  },
  Firebase: {
    icon: BiLogoFirebase,
    lightColor: "text-yellow-400",
    darkColor: "text-yellow-500",
  },
  Android: {
    icon: BiLogoAndroid,
    lightColor: "text-green-400",
    darkColor: "text-green-500",
  },
  iOS: {
    icon: BiLogoApple,
    lightColor: "text-gray-400",
    darkColor: "text-gray-500",
  },
  MongoDB: {
    icon: BiLogoMongodb,
    lightColor: "text-green-300",
    darkColor: "text-green-400",
  },
  SpringBoot: {
    icon: BiLogoSpringBoot,
    lightColor: "text-green-300",
    darkColor: "text-green-400",
  },
  Django: {
    icon: BiLogoDjango,
    lightColor: "text-green-300",
    darkColor: "text-green-400",
  },
  TypeScript: {
    icon: BiLogoTypescript,
    lightColor: "text-sky-400",
    darkColor: "text-sky-500",
  },
  HTML: {
    icon: BiLogoHtml5,
    lightColor: "text-orange-500",
    darkColor: "text-orange-600",
  },
  CSS: {
    icon: BiLogoCss3,
    lightColor: "text-blue-300",
    darkColor: "text-blue-400",
  },
  Java: {
    icon: BiLogoJava,
    lightColor: "text-red-400",
    darkColor: "text-red-500",
  },
  "Core Data": {
    icon: BiLogoApple, // Usa el ícono de Apple como referencia para Core Data
    lightColor: "text-gray-500",
    darkColor: "text-gray-600",
  },
};

const projectsData = {
  web: [
    {
      image: imageSistemaVinculacion,
      title: "Sistema Web Oficina de Vinculación",
      description:
        "Sistema web para la gestión de proyectos del departamento de Sistemas y Computación.",
      extendedDescription:
        "Este sistema fue desarrollado para centralizar y facilitar la gestión de proyectos de vinculación académica y profesional del departamento de Sistemas y Computación. Utiliza tecnologías modernas para ofrecer un entorno eficiente y funcional, incluyendo una interfaz intuitiva y herramientas que mejoran la productividad. El proyecto integra características como registro de proyectos, administración de usuarios y reportes automáticos.",
      technologies: ["Django", "Python", "JavaScript", "SQL"],
      github: "https://github.com/tuusuario/SistemaWebOficinaVinculacion",
    },
    {
      image: image2,
      title: "Web Project 2",
      description: "Aplicación web para seguimiento de tareas.",
      extendedDescription:
        "Un sistema completo de gestión de tareas con autenticación y CRUD.",
      technologies: ["CSS", "JavaScript", "JavaScript"],
      github: "https://github.com/tuusuario/web-project-2",
    },
  ],
  mobile: [
    {
      image: image3,
      title: "Mobile Project 1",
      description: "Aplicación móvil para Android.",
      extendedDescription:
        "Aplicación nativa para Android que utiliza Kotlin y Firebase para autenticación y almacenamiento.",
      technologies: ["Kotlin", "Firebase"],
      github: "https://github.com/tuusuario/mobile-project-1",
    },
    {
      image: image4,
      title: "Mobile Project 2",
      description: "Aplicación para iOS con Swift.",
      extendedDescription:
        "Aplicación iOS diseñada con interfaces modernas usando Swift y Core Data.",
      technologies: ["Swift", "Core Data"],
      github: "https://github.com/tuusuario/mobile-project-2",
    },
  ],
  others: [
    {
      image: image5,
      title: "API Project",
      description: "API RESTful para gestión de usuarios.",
      extendedDescription:
        "Un servicio backend para manejar usuarios, utilizando Node.js, Express y MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB"],
      github: "https://github.com/tuusuario/api-project",
    },
  ],
};

const Modal = ({ project, onClose, isDarkTheme }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
    <div
      className={`relative w-full max-w-5xl rounded-lg shadow-2xl p-6 ${
        isDarkTheme ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Botón de cierre */}
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 shadow-lg ${
          isDarkTheme
            ? "bg-green-500 hover:bg-green-600"
            : "bg-pink-300 hover:bg-pink-400"
        }`}
        style={{ transform: "scale(1)" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        ✖
      </button>

      {/* Contenido principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Imagen */}
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Detalles del proyecto */}
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-sm leading-relaxed mb-4">
            {project.extendedDescription}
          </p>

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-4 mb-4">
            {project.technologies.map((tech, index) => {
              const techDetails = technologyIcons[tech];
              if (!techDetails) {
                console.error(`Icon not found for technology: ${tech}`);
                return null;
              }

              const Icon = techDetails.icon;
              return (
                <Icon
                  key={index}
                  className={`text-3xl ${
                    isDarkTheme ? techDetails.darkColor : techDetails.lightColor
                  }`}
                />
              );
            })}
          </div>

          {/* Botón GitHub */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            a
            className={`inline-block px-6 py-3 mt-auto rounded-lg font-semibold text-center transition-all duration-300 shadow-lg ${
              isDarkTheme
                ? "bg-green-500 text-white hover:bg-green-600"
                : "bg-pink-300 text-black hover:bg-pink-400"
            }`}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
);

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
