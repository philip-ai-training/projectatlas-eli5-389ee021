import { useCallback, useMemo, useState } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  type Node,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ConceptNode, { type ConceptNodeData } from "./ConceptNode";
import DetailPanel from "./DetailPanel";
import { mockNodes, mockEdges } from "@/data/mockConcepts";

export default function ConceptMap() {
  const [nodes, , onNodesChange] = useNodesState(mockNodes as Node[]);
  const [edges, , onEdgesChange] = useEdgesState(mockEdges);
  const [selectedNode, setSelectedNode] = useState<{
    id: string;
    data: ConceptNodeData;
  } | null>(null);

  const nodeTypes = useMemo(() => ({ concept: ConceptNode }), []);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode({
      id: node.id,
      data: node.data as unknown as ConceptNodeData,
    });
  }, []);

  return (
    <div className="relative w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.3 }}
        proOptions={{ hideAttribution: true }}
        className="bg-canvas"
      >
        <Background variant={BackgroundVariant.Dots} gap={24} size={1.5} color="hsl(220 15% 85%)" />
        <Controls
          showInteractive={false}
          className="!rounded-xl !border-border !shadow-sm"
        />
      </ReactFlow>

      <DetailPanel node={selectedNode} onClose={() => setSelectedNode(null)} />
    </div>
  );
}
