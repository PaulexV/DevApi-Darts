export interface GamePlayer {
  id: number;
  playerId: string | number;
  gameId: number;
  remainingShots: null | number;
  score: number;
  rank: null | number;
  order: number;
  inGame: boolean;
}
