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
    public players: Player[],
    public standings: Map<string, LeagueStandingsDTO[]> = new Map()
  ) {}
}

export class LeagueStandingsDTO {
  id: string;
  club: string;
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;
  setsWon: number;
  setsLost: number;
  points: number;
  standing: number;

  constructor(id: string, club: string, gamesPlayed: number, gamesWon: number, gamesLost: number, setsWon: number, setsLost: number, points: number, standing: number) {
    this.id = id;
    this.club = club;
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon;
    this.gamesLost = gamesLost;
    this.setsWon = setsWon;
    this.setsLost = setsLost;
    this.points = points;
    this.standing = standing;
  }
}

export enum League {
  PREFERENT ="PREFERENT",
  PRIMERA = "PRIMERA",
  SEGUNDA_A ="SEGUNDA_A",
  SEGUNDA_B ="SEGUNDA_B",
  TERCERA_A ="TERCERA_A",
  TERCERA_B ="TERCERA_B",
  CUARTA = "CUARTA",
}

export class Clubs {
  constructor(public clubs: string[]) {}
}
