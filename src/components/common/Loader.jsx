import { motion } from "framer-motion";

function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950 z-[9999]">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-4xl font-bold text-white"
      >
        S
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-3xl font-bold text-white"
      >
        Saif Ullah Khan
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-2 text-slate-400"
      >
        Loading Portfolio...
      </motion.p>

      <div className="mt-8 w-64 h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2 }}
          className="h-full bg-blue-500"
        />
      </div>
    </div>
  );
}

export default Loader;