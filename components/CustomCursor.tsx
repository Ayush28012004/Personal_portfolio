"use client";

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--primary)] pointer-events-none z-[100] mix-blend-difference hidden md:block"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 bg-[var(--primary-bg)] rounded-full blur-3xl pointer-events-none z-[-1] hidden md:block"
        animate={{ x: mousePosition.x - 192, y: mousePosition.y - 192 }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
      />
    </>
  );
}
