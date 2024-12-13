import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Navegación
        Inicio: "Home",
        "Acerca de mí": "About Me",
        Proyectos: "Projects",
        Contacto: "Contact",

        // Hero
        "Soy Esteban Roman": "I'm Daniel Roman",
        "Desarrollador fullstack con sede en":
          "Web Fullstack Developer Based In",
        México: "Mexico",
        "Construyendo aplicaciones web y móviles con enfoque en calidad, diseño limpio y experiencia de usuario. Explorando principios de arquitectura limpia y desarrollo escalable, estoy listo para colaborar en proyectos innovadores. 🚀":
          "Building web and mobile applications with a focus on quality, clean design, and user experience. Exploring principles of clean architecture and scalable development, I am ready to collaborate on innovative projects. 🚀",
        "Descargar CV": "Download CV",

        // Acerca de mí
        "Acerca de mí Descripción":
          "I am a frontend developer in Mexico 🌐, passionate about creating dynamic and functional experiences. Every day, I learn something new while tackling challenges with creativity and determination. I'm improving my English to expand my horizons and collaborate on international projects. By the way, if you find a line of code with 'fix later' or a console.log, it's probably me leaving messages for the future. 😅 The sky is just the beginning! 🚀",

        Advanced: "Advanced",
        Intermediate: "Intermediate",
        Beginner: "Beginner",
        UXUIDesign: "UX/UI Design",
        UXUIDescription:
          "Experience in designing intuitive and visually appealing interfaces, using Figma for prototyping and user-centered design.",

        "What I Learned": "What I Learned",

        "Habilidades destacadas": "Highlighted Skills",
        "Inglés - Nivel B2": "English - Level B2",
        "Estudiando intensamente en Harmon Hall para expandir mis oportunidades internacionales.":
          "Studying intensively at Harmon Hall to expand my international opportunities.",
        "Diseño gráfico": "Graphic Design",
        "Capacidad para crear diseños visuales atractivos y funcionales.":
          "Ability to create visually appealing and functional designs.",
        "Documentación técnica": "Technical Documentation",
        "Experiencia en crear documentación clara para proyectos de software, incluyendo:":
          "Experience in creating clear documentation for software projects, including:",
        "Diagramas UML y mapas conceptuales":
          "UML diagrams and conceptual maps",
        "Historias de usuario y casos de uso": "User stories and use cases",
        "Guías de instalación y configuración":
          "Installation and configuration guides",
        "Documentación de endpoints y APIs REST":
          "Documentation of endpoints and REST APIs",
        "Aprendizaje autodidacta": "Self-Learning",
        "Habilidad para aprender nuevas tecnologías y herramientas de forma autónoma, manteniéndome actualizado con las tendencias del sector.":
          "Ability to learn new technologies and tools autonomously, staying updated with industry trends.",

        "Programming Books": "Programming Books",

        "Next Book": "Next Book",
        "Looking for the next book to improve my skills. More learnings to come!":
          "Looking for the next book to improve my skills. More learnings to come!",

        // contacto

        Contáctame: "Contact Me",
        "¡Colaboremos juntos para hacer realidad tus ideas! 🚀":
          "Let's collaborate to bring your ideas to life! 🚀",
        "¡Correo copiado al portapapeles! 📋": "Email copied to clipboard! 📋",

        // proyectos

        my_projects: "My Projects",
        web: "Web Development",
        mobile: "Mobile Development",
        others: "Other Projects",
      },
    },
    es: {
      translation: {
        // Navegación
        Inicio: "Inicio",
        "Acerca de mí": "Acerca de mí",
        Proyectos: "Proyectos",
        Contacto: "Contacto",

        // Hero
        "Soy Esteban Roman": "Soy Daniel Roman",
        "Desarrollador fullstack con sede en":
          "Desarrollador Web Fullstack Con Sede En",
        México: "México",
        "Construyendo aplicaciones web y móviles con enfoque en calidad, diseño limpio y experiencia de usuario. Explorando principios de arquitectura limpia y desarrollo escalable, estoy listo para colaborar en proyectos innovadores. 🚀":
          "Construyendo aplicaciones web y móviles con enfoque en calidad, diseño limpio y experiencia de usuario. Explorando principios de arquitectura limpia y desarrollo escalable, estoy listo para colaborar en proyectos innovadores. 🚀",
        "Descargar CV": "Descargar CV",

        // Acerca de mí
        "Acerca de mí Descripción":
          "Soy un desarrollador frontend en México 🌐, apasionado por crear experiencias dinámicas y funcionales. Cada día aprendo algo nuevo mientras enfrento retos con creatividad y determinación. Estoy mejorando mi inglés para expandir mis horizontes y colaborar en proyectos internacionales. Por cierto, si encuentras una línea de código con 'arreglar después' o un console.log probablemente fui yo dejando mensajes al futuro. 😅 ¡El cielo es solo el comienzo! 🚀",

        Advanced: "Avanzado",
        Intermediate: "Intermedio",
        Beginner: "Principiante",

        UXUIDesign: "Diseño de Interfaces (UX/UI)",
        UXUIDescription:
          "Experiencia en diseño de interfaces intuitivas y atractivas, utilizando Figma para prototipado y diseño centrado en el usuario.",

        "What I Learned": "¿Qué aprendí?",

        "Habilidades destacadas": "Habilidades destacadas",
        "Inglés - Nivel B2": "Inglés - Nivel B2",
        "Estudiando intensamente en Harmon Hall para expandir mis oportunidades internacionales.":
          "Estudiando intensamente en Harmon Hall para expandir mis oportunidades internacionales.",
        "Diseño gráfico": "Diseño gráfico",
        "Capacidad para crear diseños visuales atractivos y funcionales.":
          "Capacidad para crear diseños visuales atractivos y funcionales.",
        "Documentación técnica": "Documentación técnica",
        "Experiencia en crear documentación clara para proyectos de software, incluyendo:":
          "Experiencia en crear documentación clara para proyectos de software, incluyendo:",
        "Diagramas UML y mapas conceptuales":
          "Diagramas UML y mapas conceptuales",
        "Historias de usuario y casos de uso":
          "Historias de usuario y casos de uso",
        "Guías de instalación y configuración":
          "Guías de instalación y configuración",
        "Documentación de endpoints y APIs REST":
          "Documentación de endpoints y APIs REST",
        "Aprendizaje autodidacta": "Aprendizaje autodidacta",
        "Habilidad para aprender nuevas tecnologías y herramientas de forma autónoma, manteniéndome actualizado con las tendencias del sector.":
          "Habilidad para aprender nuevas tecnologías y herramientas de forma autónoma, manteniéndome actualizado con las tendencias del sector.",
        "Programming Books": "Libros de programación",

        "Next Book": "¿Próximo libro?",
        "Looking for the next book to improve my skills. More learnings to come!":
          "Estoy buscando el siguiente libro para mejorar mis habilidades. ¡Se vienen más aprendizajes!",

        // Contacto

        Contáctame: "Contáctame",
        "¡Colaboremos juntos para hacer realidad tus ideas! 🚀":
          "¡Colaboremos juntos para hacer realidad tus ideas! 🚀",
        "¡Correo copiado al portapapeles! 📋":
          "¡Correo copiado al portapapeles! 📋",

        // proyectos

        my_projects: "Mis Proyectos",
        web: "Desarrollo Web",
        mobile: "Desarrollo Móvil",
        others: "Otros Proyectos",
      },
    },
  },
  lng: "en", // Idioma inicial
  fallbackLng: "es", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // React ya maneja la protección contra XSS
  },
});

export default i18n;
