export interface Player {
  id: string;
  name: string;
  age: number;
  gender: string;
  photo: string;
  title: string;
  points: number;
  destination: string;
}

export interface GameState {
  players: Player[];
  currentDestination: string;
}
