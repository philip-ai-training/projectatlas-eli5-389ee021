import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Link, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const PERSONAS = [
  { id: "five-year-old", label: "👶 Five-Year-Old", emoji: "👶" },
  { id: "pirate", label: "🏴‍☠️ Pirate", emoji: "🏴‍☠️" },
  { id: "grumpy-professor", label: "🧑‍🏫 Grumpy Professor", emoji: "🧑‍🏫" },
  { id: "gen-z", label: "💅 Gen-Z", emoji: "💅" },
] as const;

export type PersonaId = (typeof PERSONAS)[number]["id"];

interface VibeInputBarProps {
  onGenerate: (input: string, persona: PersonaId) => void;
  isLoading: boolean;
}

export default function VibeInputBar({ onGenerate, isLoading }: VibeInputBarProps) {
  const [input, setInput] = useState("");
  const [persona, setPersona] = useState<PersonaId>("five-year-old");

  const selectedPersona = PERSONAS.find((p) => p.id === persona)!;
  const isUrl = input.startsWith("http");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onGenerate(input.trim(), persona);
  };

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="flex items-center gap-2 rounded-2xl border border-border bg-card p-2 shadow-sm transition-shadow focus-within:shadow-md focus-within:border-primary/30">
        <div className="flex items-center pl-3 text-muted-foreground">
          {isUrl ? <Link size={18} /> : <FileText size={18} />}
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="Paste a URL or type any concept…"
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
        />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-xs font-medium rounded-xl px-3 shrink-0"
            >
              <span>{selectedPersona.emoji}</span>
              <span className="hidden sm:inline">{selectedPersona.label.split(" ").slice(1).join(" ")}</span>
              <ChevronDown size={14} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="rounded-xl">
            {PERSONAS.map((p) => (
              <DropdownMenuItem
                key={p.id}
                onClick={() => setPersona(p.id)}
                className="gap-2 rounded-lg"
              >
                {p.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          onClick={handleSubmit}
          disabled={!input.trim() || isLoading}
          size="sm"
          className="rounded-xl gap-1.5 px-4 font-medium"
        >
          <Sparkles size={14} />
          {isLoading ? "Mapping…" : "Map It"}
        </Button>
      </div>
    </motion.div>
  );
}
