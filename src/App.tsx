import React from "react";
import { PlayerCard } from "./components/PlayerCard";
import { BackgroundCarousel } from "./components/BackgroundCarousel";
import { MapPin } from "lucide-react";
import Ariel from "./assets/ariel.jpg";
import Beatriz from "./assets/beatriz.jpg";

// Mock data - replace with API call
const gameState = {
  players: [
    {
      id: "1",
      name: "Beatriz",
      age: 25,
      gender: "female",
      photo: Beatriz,
      title: "Biomédica",
      points: 100,
      destination: "Paris",
    },
    {
      id: "2",
      name: "Ariel",
      age: 26,
      gender: "male",
      photo: Ariel,
      title: "Gerente de Tecnologia",
      points: 0,
      destination: "Los Angeles",
    },
  ],
  currentDestination: "Paris",
};

function App() {
  const winningPlayer = gameState.players.reduce((prev, current) =>
    prev.points > current.points ? prev : current
  );

  return (
    <div className="min-h-screen w-full">
      <BackgroundCarousel destination={gameState.currentDestination} />

      {/* Header */}
      <header className="w-full py-6 px-4 text-center relative">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
          <MapPin className="text-pink-500" />
          <h1 className="font-montserrat text-2xl md:text-3xl text-white">
            Destino atual: {gameState.currentDestination}
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
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
      <footer className="w-full py-4 px-4 text-center">
        <p className="font-dancing text-lg md:text-xl text-white/80 inline-block px-6 py-2 rounded-full">
          Desenvolvido por Ariel apenas para curtir um bom momento com Beatriz
        </p>
      </footer>
    </div>
  );
}

export default App;
