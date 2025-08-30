"use client";

import { motion } from "motion/react";
import AnimatedCard from "./animatedCard";
import { useState } from "react";

export default function DigitalSkills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = './CV.pdf';
    link.download = 'cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <AnimatedCard
        initial={{ scaleY: 0, originY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 1.7 }}
        className="bg-variant col-span-6 md:col-span-4 p-6"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="font-sans font-extrabold text-foreground text-3xl p-8"
        >
          Digital Skills
        </motion.h1>

        <div className="flex flex-wrap gap-4 ps-8 pb-8">
          <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              className="text-foreground font-semibold"
            >
              Kotlin
            </motion.h1>
          </div>
          <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="text-foreground font-semibold"
            >
              Flutter
            </motion.h1>
          </div>
          <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.1 }}
              className="text-foreground font-semibold"
            >
              TypeScript
            </motion.h1>
          </div>
          <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              className="text-foreground font-semibold"
            >
              Java
            </motion.h1>
          </div>
          <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-surface hover:border-terciary">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              className="text-foreground font-semibold"
            >
              React
            </motion.h1>
          </div>
          <button onClick={() => setIsModalOpen(true)}>
            <div className="border-solid border-2 border-primary p-4 rounded-xl transition hover:bg-primary hover:border-terciary">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="text-foreground font-semibold"
              >
                See others in CV
              </motion.h1>
            </div>
          </button>
        </div>
      </AnimatedCard>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-surface rounded-2xl p-6 max-w-md w-full mx-4"
          >
            <h2 className="text-foreground text-xl font-bold mb-4">Download Confirmation</h2>
            <p className="text-foreground mb-6">
              This will transfer my CV to your device. Would you like to proceed?
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 border-2 border-primary text-foreground rounded-xl hover:bg-variant transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-opacity-80 hover:bg-secondary transition-colors"
              >
                Download
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}