import { motion, AnimatePresence } from "framer-motion";
import { X, Lightbulb } from "lucide-react";
import type { ConceptNodeData } from "./ConceptNode";

interface DetailPanelProps {
  node: { id: string; data: ConceptNodeData } | null;
  onClose: () => void;
}

export default function DetailPanel({ node, onClose }: DetailPanelProps) {
  return (
    <AnimatePresence>
      {node && (
        <motion.div
          key={node.id}
          initial={{ x: 320, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 320, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="absolute top-4 right-4 bottom-4 w-80 rounded-2xl border border-border bg-card shadow-lg z-20 flex flex-col overflow-hidden"
        >
          <div className="flex items-center justify-between p-5 pb-3 border-b border-border">
            <h3 className="font-display font-bold text-lg text-foreground">{node.data.label}</h3>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
            >
              <X size={16} />
            </button>
          </div>

          <div className="flex-1 p-5 space-y-4 overflow-y-auto">
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                ELI5 Summary
              </h4>
              <p className="text-sm text-foreground/90 leading-relaxed">{node.data.summary}</p>
            </div>

            <div className="rounded-xl bg-accent/50 border border-accent-foreground/10 p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={14} className="text-accent-foreground" />
                <h4 className="text-xs font-semibold text-accent-foreground uppercase tracking-wider">
                  Real World Analogy
                </h4>
              </div>
              <p className="text-sm text-foreground/85 leading-relaxed italic">
                "{node.data.analogy}"
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
