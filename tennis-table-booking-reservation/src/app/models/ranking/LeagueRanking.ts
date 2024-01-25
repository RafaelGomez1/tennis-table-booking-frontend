export class PlayerStats {
  constructor(
    public gamesPlayed: number,
    public gamesWon: number,
    public gamesLost: number,
    public winRate: number
  ) {}
}

export class Player {
  constructor(
    public id: number,
    public name: string,
    public club: string,
    public stats: PlayerStats,
    public rankingPoints: number
  ) {}
}

export class RankingData {
  constructor(
    public id: string,
    public name: League,
    public players: Player[]
  ) {}
}

export enum League {
  PREFERENT ="PREFERENT",
  PRIMERA ="PRIMERA",
  SEGUNDA_A ="SEGUNDA_A",
  SEGUNDA_B ="SEGUNDA_B",
  TERCERA_A ="TERCERA_A",
  TERCERA_B ="TERCERA_B",
}

export class Clubs {
  constructor(public clubs: string[]) {}
}
