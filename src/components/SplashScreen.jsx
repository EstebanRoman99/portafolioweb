import { motion } from "framer-motion";
import { GiSnakeEgg } from "react-icons/gi";

const SplashScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      {/* Animación del ícono */}
      <motion.div
        className="text-[100px] mb-4" // Tamaño grande del ícono
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.8] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        style={{
          color: "#FF69B4",
        }}
      >
        <GiSnakeEgg />
      </motion.div>

      {/* Texto con colores gradientes */}
      <motion.h1
        className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-pink-500 to-purple-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Welcome to Seira Danny&apos;s Portfolio
      </motion.h1>
    </div>
  );
};

export default SplashScreen;
