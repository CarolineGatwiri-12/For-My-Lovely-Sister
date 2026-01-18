"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export const Background: React.FC = () => {
  // Generate random hearts once using useMemo
  const hearts = useMemo(
    () =>
      Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 20,
        size: 10 + Math.random() * 20,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rose-200/40"
          initial={{ bottom: -50, left: `${heart.x}%`, opacity: 0 }}
          animate={{
            bottom: "120%",
            opacity: [0, 0.5, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            fontSize: `${heart.size}px`,
          }}
        >
          ♥
        </motion.div>
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white/0 via-rose-50/10 to-rose-100/20" />
    </div>
  );
};
