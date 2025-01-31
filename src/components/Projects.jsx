import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../ThemeContext";
import image1 from "../../public/projects/oficinaVinculacion.png";
import image2 from "../../public/projects/huxGym.png";
import image3 from "../../public/3.png";
import image4 from "../../public/4.png";
import appnotesimage from "/public/projects/appnotes.png";
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
  BiLogoXing,
  BiLogoGraphql,
  BiLogoRedux,
  BiLogoFigma,
  BiLogoPython,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJava,
  BiLogoPhp,
} from "react-icons/bi";
import { FaLaravel } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiWebpack, SiAxios } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { useTranslation } from "react-i18next";
import translateText from "../utils/translator";

const technologyIcons = {
  JavaScript: {
    icon: BiLogoJavascript,
    lightColor: "text-yellow-300",
    darkColor: "text-yellow-400",
  },
  PHP: {
    icon: BiLogoPhp,
    lightColor: "text-red-300",
    darkColor: "text-red-400",
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
  Python: {
    icon: BiLogoPython,
    lightColor: "text-blue-400", // Azul claro para tema claro
    darkColor: "text-yellow-400", // Amarillo para tema oscuro
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
  Figma: {
    icon: BiLogoFigma,
    lightColor: "text-pink-500",
    darkColor: "text-pink-600",
  },
  NextJS: {
    icon: RiNextjsFill,
    lightColor: "text-black",
    darkColor: "text-white",
  },
  Axios: {
    icon: SiAxios,
    lightColor: "text-blue-400",
    darkColor: "text-blue-500",
  },
  Redux: {
    icon: BiLogoRedux,
    lightColor: "text-purple-300",
    darkColor: "text-purple-400",
  },
  Laravel: {
    icon: FaLaravel,
    lightColor: "text-orange-400",
    darkColor: "text-orange-500",
  },
  GraphQL: {
    icon: BiLogoGraphql,
    lightColor: "text-pink-400",
    darkColor: "text-pink-500",
  },
  Webpack: {
    icon: SiWebpack,
    lightColor: "text-blue-400",
    darkColor: "text-blue-500",
  },
  ExpressJS: {
    icon: BiLogoXing, // No hay icono específico de ExpressJS, usando BiLogoXing como alternativa
    lightColor: "text-green-400",
    darkColor: "text-green-500",
  },
  ThreeJS: {
    icon: TbBrandThreejs,
    lightColor: "text-green-400",
    darkColor: "text-green-500",
  },
};

const projectsData = {
  web: [
    {
      image: image1,
      title: "Sistema Web Oficina de Vinculación",
      description:
        "Sistema web para la gestión de proyectos del departamento de Sistemas y Computación.",
      extendedDescription:
        "Este sistema fue desarrollado para centralizar y facilitar la gestión de proyectos de vinculación académica y profesional del departamento de Sistemas y Computación. Utiliza tecnologías modernas para ofrecer un entorno eficiente y funcional, incluyendo una interfaz intuitiva y herramientas que mejoran la productividad. El proyecto integra características como registro de proyectos, administración de usuarios y reportes automáticos.",
      technologies: [
        "Django",
        "Python",
        "JavaScript",
        "SQL",
        "TailwindCSS",
        "HTML5",
        "CSS3",
        "PostgreSQL",
        "Figma",
        "Alpine.js",
      ],
      github: "https://github.com/EstebanRoman99/oficinaVinculacion-Django",
      live: "none",
    },
    {
      image: image2,
      title: "HuxGym",
      description:
        "Sistema web para la regulación de acceso a gimnasios durante la contingencia por COVID-19.",
      extendedDescription:
        "HuxGym fue desarrollado para ayudar a los gimnasios a gestionar la entrada y el control de personas durante la contingencia de la pandemia por COVID-19. El sistema permite establecer un límite máximo de ocupación en tiempo real, asegurando el cumplimiento de las normativas sanitarias. La plataforma incluye un diseño intuitivo creado con Figma y tecnologías modernas como React y TailwindCSS para el frontend. El backend se construyó utilizando Python y Docker para un entorno escalable y seguro.",
      technologies: [
        "React",
        "TailwindCSS",
        "Figma",
        "Docker",
        "Python",
        "Axios",
      ],
      github: "https://github.com/EstebanRoman99/HuxGym-React",
      live: "none",
    },
    {
      image: image3,
      title: "Sistema de Inventarios Neumarket",
      description:
        "Sistema para la gestión eficiente de inventarios en tiempo real.",
      extendedDescription:
        "El Sistema de Inventarios Neumarket optimiza la gestión de inventarios en negocios medianos y grandes. Permite controlar stock, gestionar productos y generar reportes en tiempo real. Desarrollado con Laravel y TailwindCSS, ofrece una interfaz moderna, análisis de datos y soporte multiusuario con permisos personalizables. La interfaz fue diseñada en Figma y el sistema usa SQL para gestionar datos.",
      technologies: [
        "Laravel",
        "PHP",
        "SQL",
        "TailwindCSS",
        "Figma",
        "Chart.js",
        "Livewire",
        "Bootstrap",
      ],
      github:
        "https://github.com/EstebanRoman99/neumarket-laravel/tree/main/sistema-master",
      live: "none",
    },
    {
      image: appnotesimage,
      title: "Aplicación de Notas Web",
      description:
        "Aplicación web para la gestión de notas y categorías con autenticación de usuarios.",
      extendedDescription:
        "Esta aplicación fue desarrollada para permitir al usuario crear, editar y gestionar notas con categorías asociadas. Cuenta con una interfaz moderna y responsiva construida con tecnologías web actuales. La funcionalidad incluye registro de usuarios, autenticación, filtrado por categorías y paginación de notas. Además, se implementó un backend seguro para garantizar la integridad de los datos de los usuarios.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Spring Boot",
        "PostgreSQL",
        "Java",
        "TailwindCSS",
        "SpringBoot",
      ],
      github: "https://github.com/EstebanRoman99/appnotes",
      live: "https://appnotes-icqw.vercel.app/login",
    },
  ],
  mobile: [],
  others: [
    {
      image: image4,
      title: "API Project",
      description: "API RESTful para gestión de usuarios.",
      extendedDescription:
        "Un servicio backend para manejar usuarios, utilizando Node.js, Express y MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB"],
      live: "none",
    },
  ],
};

const translateProjectsData = async (originalData, targetLang) => {
  const translatedData = {};

  for (const category in originalData) {
    translatedData[category] = await Promise.all(
      originalData[category].map(async (project) => ({
        ...project,
        title: await translateText(project.title, targetLang),
        description: await translateText(project.description, targetLang),
        extendedDescription: await translateText(
          project.extendedDescription,
          targetLang
        ),
      }))
    );
  }

  return translatedData;
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

          {/* Botones */}
          <div
            className={`flex ${
              project.live !== "none" ? "justify-between" : "justify-center"
            } gap-4`}
          >
            {/* Botón GitHub */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex-1 px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg ${
                isDarkTheme
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-pink-300 text-black hover:bg-pink-400"
              }`}
            >
              View on GitHub
            </a>

            {/* Botón Live */}
            {project.live !== "none" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 shadow-lg ${
                  isDarkTheme
                    ? "bg-pink-500 text-white hover:bg-pink-600"
                    : "bg-green-300 text-black hover:bg-green-400"
                }`}
              >
                View Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProjectCard = ({ project, onClick, isDarkTheme }) => (
  <motion.div
    className={`p-4 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
      isDarkTheme
        ? "bg-black/50 hover:bg-green-500 text-gray-300 hover:text-black"
        : "bg-white/30 hover:bg-pink-300 text-black"
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

const Projects = () => {
  const [activeTab, setActiveTab] = useState("web");
  const [selectedProject, setSelectedProject] = useState(null);
  const [translatedData, setTranslatedData] = useState(projectsData);
  const { isDarkTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();

  const tabs = [
    { id: "web", label: t("web"), icon: <FaLaptopCode /> },
    { id: "mobile", label: t("mobile"), icon: <FaMobileAlt /> },
    { id: "others", label: t("others"), icon: <FaServer /> },
  ];

  useEffect(() => {
    const fetchTranslatedData = async () => {
      const newData = await translateProjectsData(projectsData, i18n.language);
      setTranslatedData(newData);
    };

    fetchTranslatedData();
  }, [i18n.language]);

  return (
    <div
      id="projects"
      className={`min-h-screen p-8 ${
        isDarkTheme ? "text-white" : "text-black"
      }`}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("my_projects")}
      </motion.h1>
      <div className="flex justify-center gap-6 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg transform ${
              activeTab === tab.id
                ? isDarkTheme
                  ? "bg-green-500 text-black scale-110"
                  : "bg-pink-300 text-black scale-110"
                : isDarkTheme
                ? "hover:bg-green-500 hover:text-black text-white bg-black"
                : "hover:bg-pink-200 hover:text-black text-gray-700 bg-gray-100"
            }`}
          >
            <span className="text-2xl">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {translatedData[activeTab]?.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => setSelectedProject(project)} // Actualiza el estado para abrir el modal
            isDarkTheme={isDarkTheme}
          />
        ))}
      </div>

      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)} // Cierra el modal
          isDarkTheme={isDarkTheme}
        />
      )}
    </div>
  );
};

export default Projects;
