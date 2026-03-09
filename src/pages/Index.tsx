import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Map, Compass } from "lucide-react";
import VibeInputBar, { type PersonaId } from "@/components/VibeInputBar";
import ConceptMap from "@/components/ConceptMap";

const Index = () => {
  const [showMap, setShowMap] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = (_input: string, _persona: PersonaId) => {
    setIsLoading(true);
    // Simulate AI processing
    setTimeout(() => {
      setIsLoading(false);
      setShowMap(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-background overflow-hidden">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center">
              <Compass size={16} className="text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-lg text-foreground tracking-tight">
              Project Atlas
            </h1>
          </div>
          <span className="text-xs text-muted-foreground font-medium px-3 py-1 rounded-full bg-muted">
            ELI5 Concept Mapper
          </span>
        </div>
      </header>

      {/* Input Bar Section */}
      <div className="px-6 py-5 border-b border-border bg-card/40">
        <VibeInputBar onGenerate={handleGenerate} isLoading={isLoading} />
      </div>

      {/* Main Canvas */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          {!showMap ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground"
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                <Map size={28} className="text-muted-foreground/50" />
              </div>
              <div className="text-center space-y-1.5">
                <p className="font-display font-semibold text-foreground/70">
                  Paste a topic to explore
                </p>
                <p className="text-sm text-muted-foreground/70 max-w-sm">
                  Drop a URL or describe any concept. Atlas will break it down into bite-sized,
                  connected ideas with fun analogies.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="map"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              <ConceptMap />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
