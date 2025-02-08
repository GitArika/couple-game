import React from "react";
import { Player } from "../types";
import { Heart, Trophy, MapPin } from "lucide-react";

interface PlayerCardProps {
  player: Player;
  isWinning: boolean;
}

export function PlayerCard({ player, isWinning }: PlayerCardProps) {
  const isFemale = player.gender === "female";

  return (
    <div
      className={`
        backdrop-blur-md
        relative transform transition-all duration-300 hover:scale-105 

        rounded-2xl p-6 max-w-sm w-full mx-auto bg-white/10 backdrop-blur-md
        ${
          isWinning
            ? "ring-4 ring-opacity-50 " +
              (isFemale ? "ring-pink-300" : "ring-blue-400")
            : ""
        }
      `}
    >
      <div className="relative mb-4">
        <img
          src={player.photo}
          alt={player.name}
          className="w-32 h-32 mx-auto rounded-full object-cover"
        />
        {isWinning && (
          <Trophy
            className={`absolute -top-2 -right-2 ${
              isFemale ? "text-pink-500" : "text-blue-400"
            }`}
            size={24}
          />
        )}
      </div>

      <div
        className={`text-center ${isFemale ? "text-gray-800" : "text-white"}`}
      >
        <h2 className="text-2xl font-bold mb-1 font-montserrat text-white">
          {player.name}
        </h2>

        <p className="text-sm mb-2 font-montserrat text-white">
          {player.age} anos • {player.title}
        </p>

        <div
          className={`
          flex items-center justify-center gap-2 mb-4 font-bold
          ${isFemale ? "text-pink-500" : "text-blue-400"}
        `}
        >
          <MapPin size={16} />
          <span className="text-xl font-montserrat">{player.destination}</span>
        </div>

        <div
          className={`
          flex items-center justify-center gap-2 text-2xl font-bold animate-pulse
          ${isFemale ? "text-pink-500" : "text-blue-300"}
        `}
        >
          <Heart className="fill-current" size={20} />
          <span className="font-montserrat">{player.points} pontos</span>
        </div>
      </div>
    </div>
  );
}
