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

function ConceptNode({ data, id }: NodeProps) {
  const nodeData = data as unknown as ConceptNodeData;

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
        hover:shadow-md transition-shadow min-w-[140px] max-w-[200px] text-center`}
      style={{
        backgroundColor: `var(--tw-node-bg)`,
        borderColor: `var(--tw-node-border)`,
      }}
      data-node-bg={nodeData.colorClass}
      data-node-border={nodeData.borderClass}
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
