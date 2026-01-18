"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Stars, Flower2, ArrowRight } from "lucide-react";
import { AppState } from "../../../types";
import confetti from "canvas-confetti";

interface ProposalFlowProps {
  setAppState: (state: AppState) => void;
}

export const ProposalFlow: React.FC<ProposalFlowProps> = ({ setAppState }) => {
  const [step, setStep] = useState(0);
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

  const steps = [
    {
      text: "You know you mean a lot to me, right?",
      icon: <Stars className="w-8 h-8 text-rose-400" />,
    },
    {
      text: "And I would really love to have a special day with you.",
      icon: <Flower2 className="w-8 h-8 text-rose-400" />,
    },
    {
      text: "So, I wanted to ask you something.",
      icon: <Heart className="w-8 h-8 text-rose-400" />,
    },
  ];

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handleYes = () => {
    // Fire confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ffb7b2", "#ff9aa2", "#ffdac1"],
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ffb7b2", "#ff9aa2", "#ffdac1"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
    setAppState(AppState.ACCEPTED);
  };

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoBtnPosition({ x, y });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-50/90 backdrop-blur-md">
      <AnimatePresence mode="wait">
        {step < steps.length ? (
          <motion.div
            key={`step-${step}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border border-rose-100"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-rose-50 rounded-full">
                {steps[step].icon}
              </div>
            </div>
            <h3 className="text-2xl text-rose-800 mb-8 font-light">
              {steps[step].text}
            </h3>
            <button
              onClick={handleNext}
              className="group flex items-center justify-center gap-2 mx-auto text-rose-400 hover:text-rose-600 transition-colors"
            >
              <span className="uppercase tracking-widest text-sm font-semibold">
                Next
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="final"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center border-4 border-rose-100 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-rose-200 via-pink-300 to-rose-200" />

            <h2 className="text-5xl font-vibes text-rose-600 mb-8 p-4">
              Will you be my Valentine ?
            </h2>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="bg-rose-400 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-rose-500 transition-colors w-full md:w-auto"
              >
                Yes! 💖
              </motion.button>

              <motion.button
                animate={{ x: noBtnPosition.x, y: noBtnPosition.y }}
                onHoverStart={moveNoButton}
                onClick={moveNoButton}
                className="bg-rose-100 text-rose-400 px-10 py-4 rounded-full text-lg font-semibold hover:bg-rose-200 transition-colors w-full md:w-auto"
              >
                No
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
