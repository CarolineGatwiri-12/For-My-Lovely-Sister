import React from "react";
import { motion } from "framer-motion";
import { StorySegment } from "../../../types";
import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";

interface ScrollStoryProps {
  onComplete: () => void;
}

const segments: StorySegment[] = [
  {
    id: 1,
    text: "Hey you...",
    subtext: "Lowkey thinking of you... a lot",
    alignment: "center",
  },
  {
    id: 2,
    text: "I really admire everything about you. You are someone I tressure and I want you to know that.",
    imageUrl: "/sissy 3.jpeg",
    alignment: "left",
  },
  {
    id: 3,
    text: "You bring so much love and happiness into my world.",
    subtext: "More than you probably know.",
    imageUrl: "/sissy2.jpeg",
    alignment: "right",
  },
  {
    id: 4,
    text: "I cherish the little things.",
    subtext: "Your smile, your laugh, the way you are.",
    imageUrl: "/sissy1.jpeg",
    alignment: "center",
  },
   {
    id: 5,
    text: "Every moment with you feels like a soft breeze while watching a beautiful sunset",
    subtext: "You make ordnary moments feel special",
    imageUrl: "/sissy4.jpeg",
    alignment: "center",
  },
];

export const ScrollStory: React.FC<ScrollStoryProps> = ({ onComplete }) => {
  return (
    <div className="relative z-10 flex flex-col items-center w-full">
      {segments.map((segment) => (
        <motion.div
          key={segment.id}
          className={`min-h-[80vh] w-full max-w-4xl flex items-center p-8 ${
            segment.alignment === "left"
              ? "justify-start"
              : segment.alignment === "right"
                ? "justify-end"
                : "justify-center"
          }`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }} // Changed: removed margin, reduced amount
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className={`flex flex-col ${
              segment.alignment === "left"
                ? "items-start text-left"
                : segment.alignment === "right"
                  ? "items-end text-right"
                  : "items-center text-center"
            } max-w-lg gap-6`}
          >
            {segment.imageUrl && (
              <motion.div
                className="overflow-hidden rounded-2xl shadow-xl shadow-rose-200/50 border-4 border-white rotate-1"
                whileHover={{ scale: 1.02, rotate: 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  height={400}
                  width={400}
                  src={segment.imageUrl}
                  alt="Aesthetic"
                  className="w-full h-auto max-h-100 object-cover opacity-90"
                />
              </motion.div>
            )}

            <div>
              <h2 className="text-4xl md:text-5xl font-garamond text-rose-800 leading-tight">
                {segment.text}
              </h2>
              {segment.subtext && (
                <p className="mt-4 text-xl text-rose-600 font-light italic">
                  {segment.subtext}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Final Trigger Section */}
      <motion.div
        className="min-h-[50vh] flex flex-col items-center justify-center pb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-2xl text-rose-700 mb-8 font-vibes">
          I have a question for you...
        </p>
        <motion.button
          onClick={onComplete}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white/80 backdrop-blur-sm border border-rose-200 px-8 py-4 rounded-full shadow-lg text-rose-600 hover:text-rose-800 hover:shadow-xl hover:border-rose-300 transition-all duration-300 flex items-center gap-2 group"
        >
          <Heart className="w-5 h-5 fill-rose-200 text-rose-400 group-hover:fill-rose-400 transition-colors" />
          <span className="tracking-widest uppercase text-sm font-semibold">
            Continue
          </span>
        </motion.button>
      </motion.div>

      <div className="fixed bottom-8 text-rose-300 animate-bounce">
        <ChevronDown size={24} />
      </div>
    </div>
  );
};
