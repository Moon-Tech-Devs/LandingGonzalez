"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

interface BentoGridShowcaseProps {
  integration: React.ReactNode;
  trackers: React.ReactNode;
  statistic: React.ReactNode;
  focus?: React.ReactNode;
  productivity: React.ReactNode;
  shortcuts?: React.ReactNode;
  className?: string;
}

export const BentoGridShowcase = ({
  integration,
  trackers,
  statistic,
  focus,
  productivity,
  shortcuts,
  className,
}: BentoGridShowcaseProps) => {
  const hasExtraSlots = Boolean(focus) || Boolean(shortcuts);

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "grid w-full grid-cols-1 gap-6 md:grid-cols-3",
        hasExtraSlots ? "md:grid-rows-3" : "md:grid-rows-2",
        "auto-rows-[minmax(180px,auto)]",
        className
      )}
    >
      <motion.div variants={itemVariants} className={cn("md:col-span-1", hasExtraSlots ? "md:row-span-3" : "md:row-span-2")}>
        {integration}
      </motion.div>

      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {trackers}
      </motion.div>

      <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
        {statistic}
      </motion.div>

      {focus ? (
        <motion.div variants={itemVariants} className="md:col-span-1 md:row-span-1">
          {focus}
        </motion.div>
      ) : null}

      <motion.div variants={itemVariants} className={cn(hasExtraSlots ? "md:col-span-1" : "md:col-span-2", "md:row-span-1")}>
        {productivity}
      </motion.div>

      {shortcuts ? (
        <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-1">
          {shortcuts}
        </motion.div>
      ) : null}
    </motion.section>
  );
};