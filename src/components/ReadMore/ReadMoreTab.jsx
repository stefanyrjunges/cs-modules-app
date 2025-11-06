import { motion, AnimatePresence } from "framer-motion";
import "./ReadMoreTab.css";
import { READ_MORE_MODULES } from "../../data.js";

export function ReadMoreTab({ selectedModuleId }) {
  return (
    <AnimatePresence>
      {selectedModuleId && (
        <motion.div
          id="read-more-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>{READ_MORE_MODULES[selectedModuleId].details}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
