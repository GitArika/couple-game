import React, { useState, useEffect } from "react";
import { PlayerCard } from "./components/PlayerCard";
import { BackgroundCarousel } from "./components/BackgroundCarousel";
import { MapPin } from "lucide-react";
import Ariel from "./assets/ariel.jpg";
import Ana from "./assets/ana.jpg";

// Mock data - replace with API call
const gameState = {
  players: [
    {
      id: "1",
      name: "Ana",
      age: 25,
      gender: "female",
      photo: Ana,
      title: "Terapeuta Ocupacional",
      points: 1000,
      destination: "Egito",
    },
    {
      id: "2",
      name: "Ariel",
      age: 27,
      gender: "male",
      photo: Ariel,
      title: "Programador",
      points: 0,
      destination: "Los Angeles",
    },
  ],
  currentDestination: "Egito",
};

function App() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateViewportHeight = () => setViewportHeight(window.innerHeight);

    window.addEventListener("resize", updateViewportHeight);
    updateViewportHeight(); // Ensure correct height on mount

    return () => window.removeEventListener("resize", updateViewportHeight);
  }, []);

  const winningPlayer = gameState.players.reduce((prev, current) =>
    prev.points > current.points ? prev : current
  );

  return (
    <div className="relative w-full min-h-screen">
      <BackgroundCarousel destination={gameState.currentDestination} />

      {/* Header */}
      <header className="w-full py-6 px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
          <MapPin className="text-pink-500" />
          <h1 className="font-montserrat text-2xl md:text-3xl text-white">
            Destino atual: Egito
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {gameState.players.map((player) => (
            <PlayerCard
              key={player.id}
              player={player}
              isWinning={player.id === winningPlayer.id}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-4 px-4 text-center relative z-10">
        <p className="font-dancing text-lg md:text-xl text-white/80 inline-block px-6 py-2 rounded-full">
          Isso não é uma tentativa de impressionar você Ana 👀.
        </p>
      </footer>
    </div>
  );
}

export default App;
