import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { motion } from "framer-motion";

export interface ConceptNodeData {
  label: string;
  summary: string;
  analogy: string;
  colorClass: string;
  borderClass: string;
  delay: number;
  [key: string]: unknown;
}

const COLOR_MAP: Record<string, { bg: string; border: string }> = {
  "node-blue": { bg: "bg-node-blue", border: "border-node-blue-border" },
  "node-pink": { bg: "bg-node-pink", border: "border-node-pink-border" },
  "node-green": { bg: "bg-node-green", border: "border-node-green-border" },
  "node-yellow": { bg: "bg-node-yellow", border: "border-node-yellow-border" },
  "node-purple": { bg: "bg-node-purple", border: "border-node-purple-border" },
};

function ConceptNode({ data }: NodeProps) {
  const nodeData = data as unknown as ConceptNodeData;
  const colors = COLOR_MAP[nodeData.colorClass] ?? COLOR_MAP["node-blue"];

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: nodeData.delay,
      }}
      className={`px-5 py-3.5 rounded-2xl border-2 shadow-sm cursor-pointer select-none
        hover:shadow-md transition-shadow min-w-[140px] max-w-[200px] text-center
        ${colors.bg} ${colors.border}`}
    >
      <Handle type="target" position={Position.Top} className="!bg-muted-foreground/30 !w-2 !h-2 !border-0" />
      <span className="text-sm font-display font-semibold text-foreground leading-tight">
        {nodeData.label}
      </span>
      <Handle type="source" position={Position.Bottom} className="!bg-muted-foreground/30 !w-2 !h-2 !border-0" />
    </motion.div>
  );
}

export default memo(ConceptNode);
