"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Background } from "./components/Background";
import { ScrollStory } from "./components/Scroll";
import { ProposalFlow } from "./components/Proposal";
import { AppState } from "../../types";
import { Heart } from "lucide-react";

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.SCROLLING);

  return (
    <div className="min-h-screen w-full relative">
      <Background />

      <AnimatePresence>
        {appState === AppState.SCROLLING && (
          <motion.div
            key="scrolling"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8 }}
          >
            <ScrollStory
              onComplete={() => setAppState(AppState.PROPOSAL_FLOW)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {appState === AppState.PROPOSAL_FLOW && (
          <ProposalFlow setAppState={setAppState} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {appState === AppState.ACCEPTED && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-60 flex flex-col items-center justify-center bg-rose-50 p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
            >
              <Heart className="w-32 h-32 text-rose-500 fill-rose-500 mx-auto mb-8 animate-pulse" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-vibes text-rose-600 mb-6">
              Yay!
            </h1>
            <p className="text-2xl md:text-3xl text-rose-800 font-garamond max-w-2xl">
              I can`t wait to spend the day with you. 🌹
            </p>
            <p className="mt-8 text-rose-400 text-sm">
              You just made me the happiest girl in the world !!
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
