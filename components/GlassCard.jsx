// GlassCard.js
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "./ui/card";
import { Instagram, Twitter } from "lucide-react";

const GlassCard = ({ children, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5 }}
    >
      <Card className={`bg-white shadow-lg border-none ${className}`}>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  );
};

export default GlassCard;
