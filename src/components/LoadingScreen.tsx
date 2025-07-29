import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5, delay: progress === 100 ? 0.3 : 0 }}
    >
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <Code2 className="w-20 h-20 text-teal-400 mx-auto" />
          <motion.div
            className="absolute inset-0 w-20 h-20 border-4 border-teal-400/30 border-t-teal-400 rounded-full mx-auto"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-2 w-16 h-16 border-2 border-violet-400/50 border-b-violet-400 rounded-full mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        <motion.h2
          className="text-3xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Loading Portfolio
        </motion.h2>
        
        <div className="w-80 h-3 bg-slate-700 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-teal-400 via-green-400 to-violet-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
        
        <motion.p
          className="text-slate-300 text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {progress}%
        </motion.p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;