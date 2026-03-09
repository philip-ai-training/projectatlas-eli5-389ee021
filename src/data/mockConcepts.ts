import type { ConceptNodeData } from "@/components/ConceptNode";

interface MockNode {
  id: string;
  position: { x: number; y: number };
  type: "concept";
  data: ConceptNodeData;
}

interface MockEdge {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
}

const NODE_COLORS = [
  { colorClass: "node-blue", borderClass: "node-blue-border" },
  { colorClass: "node-pink", borderClass: "node-pink-border" },
  { colorClass: "node-green", borderClass: "node-green-border" },
  { colorClass: "node-yellow", borderClass: "node-yellow-border" },
  { colorClass: "node-purple", borderClass: "node-purple-border" },
];

export const mockNodes: MockNode[] = [
  {
    id: "1",
    position: { x: 300, y: 0 },
    type: "concept",
    data: {
      label: "Quantum Physics",
      summary:
        "Quantum physics is about really tiny things — smaller than atoms! These tiny things don't follow the same rules as big things like balls or cars. They can be in two places at once and act really weird.",
      analogy:
        "It's like having a magic marble that's both red AND blue at the same time, but the moment you look at it, it picks one color.",
      colorClass: "node-purple",
      borderClass: "node-purple-border",
      delay: 0,
    },
  },
  {
    id: "2",
    position: { x: 80, y: 140 },
    type: "concept",
    data: {
      label: "Superposition",
      summary:
        "Superposition means a tiny particle can be in multiple states at once. It's not choosing — it's literally ALL of them simultaneously. Only when you measure it does it 'pick' one state.",
      analogy:
        "Imagine a coin spinning in the air. It's not heads or tails yet — it's both! Only when you catch it does it land on one side.",
      colorClass: "node-blue",
      borderClass: "node-blue-border",
      delay: 0.15,
    },
  },
  {
    id: "3",
    position: { x: 520, y: 140 },
    type: "concept",
    data: {
      label: "Entanglement",
      summary:
        "When two particles get entangled, they become connected forever. No matter how far apart they are, changing one instantly affects the other. Einstein called this 'spooky action at a distance.'",
      analogy:
        "It's like having magic socks 🧦 — if you put one on in New York and it turns red, the other sock in Tokyo instantly turns blue. No phone call needed!",
      colorClass: "node-pink",
      borderClass: "node-pink-border",
      delay: 0.3,
    },
  },
  {
    id: "4",
    position: { x: 0, y: 300 },
    type: "concept",
    data: {
      label: "Wave Function",
      summary:
        "A wave function is a math recipe that tells you all the possible things a particle could be doing. It's like a probability cloud showing where a particle might be. It collapses when observed.",
      analogy:
        "Think of it as a weather forecast showing 'maybe rain everywhere,' but when you look outside, it's only actually raining in one spot.",
      colorClass: "node-green",
      borderClass: "node-green-border",
      delay: 0.45,
    },
  },
  {
    id: "5",
    position: { x: 300, y: 300 },
    type: "concept",
    data: {
      label: "Measurement Problem",
      summary:
        "The measurement problem asks: why does looking at a quantum thing change it? Before you look, it's doing everything at once. After you look, it picks one thing. Nobody fully knows why.",
      analogy:
        "It's like a shy cat that's running around the house, but every time you open the door to check, it's sitting perfectly still on the couch.",
      colorClass: "node-yellow",
      borderClass: "node-yellow-border",
      delay: 0.6,
    },
  },
  {
    id: "6",
    position: { x: 580, y: 300 },
    type: "concept",
    data: {
      label: "Quantum Computing",
      summary:
        "Quantum computers use qubits instead of regular bits. While normal bits are 0 or 1, qubits can be both at once thanks to superposition. This lets them solve certain problems way faster.",
      analogy:
        "A regular computer tries every path in a maze one by one. A quantum computer is like a ghost that walks through ALL paths at the same time and finds the exit instantly.",
      colorClass: "node-blue",
      borderClass: "node-blue-border",
      delay: 0.75,
    },
  },
];

export const mockEdges: MockEdge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e2-5", source: "2", target: "5" },
  { id: "e3-6", source: "3", target: "6" },
  { id: "e4-5", source: "4", target: "5", animated: true },
  { id: "e5-6", source: "5", target: "6" },
];
