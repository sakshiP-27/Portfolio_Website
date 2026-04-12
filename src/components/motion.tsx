import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef, type ReactNode } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};
const slideInLeft: Variants = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
const slideInRight: Variants = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } };
const scaleIn: Variants = { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } };
const staggerContainer: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };

const ease = [0.25, 0.4, 0.25, 1] as const;

export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay, ease }} className={className}>{children}</motion.div>;
}

export function SlideIn({ children, delay = 0, direction = "left", className = "" }: { children: ReactNode; delay?: number; direction?: "left" | "right"; className?: string }) {
  return <motion.div variants={direction === "left" ? slideInLeft : slideInRight} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay, ease }} className={className}>{children}</motion.div>;
}

export function ScaleIn({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay, ease }} className={className}>{children}</motion.div>;
}

export function StaggerContainer({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className={className}>{children}</motion.div>;
}

export function StaggerItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div variants={fadeUp} transition={{ duration: 0.5, ease }} className={className}>{children}</motion.div>;
}

export function TextReveal({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <motion.p initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span key={`${word}-${i}`} variants={{ hidden: { opacity: 0, y: 20, filter: "blur(4px)" }, visible: { opacity: 1, y: 0, filter: "blur(0px)" } }} transition={{ duration: 0.4, delay: delay + i * 0.04, ease }} className="inline-block mr-[0.3em]">{word}</motion.span>
      ))}
    </motion.p>
  );
}

export function Parallax({ children, offset = 50, className = "" }: { children: ReactNode; offset?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return <motion.div ref={ref} style={{ y }} className={className}>{children}</motion.div>;
}

export { motion };
