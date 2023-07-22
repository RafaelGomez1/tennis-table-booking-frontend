export class Agenda {
  id:             string;
  day:            Day;
  month:          string;
  week:           number;
  year:           number;
  availableHours: AvailableHour[];

  constructor(
    id: string,
    day: Day,
    month: string,
    week: number,
    year: number,
    availableHours: AvailableHour[]
  ) {
    this.id = id;
    this.day = day
    this.month = month
    this.week = week
    this.year = year
    this.availableHours = availableHours
  }
}

export class AvailableHour {
  id:                 string;
  from:               number;
  to:                 number;
  type:               string;
  registeredPlayers:  RegisteredPlayer[];
  capacity: Capacity;

  constructor(
    id: string,
    from: number,
    to: number,
    type: string,
    registeredPlayers:  RegisteredPlayer[],
    capacity: Capacity
  ) {
    this.id = id;
    this.from = from;
    this.to = to;
    this.type = type;
    this.registeredPlayers = registeredPlayers;
    this.capacity = capacity;
  }
}

export class RegisteredPlayer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class Capacity {
  value: string;

  constructor(value: string) {
    this.value = value;
  }
}

export class Day {
  number:    number;
  dayOfWeek: string;

  constructor(number: number, dayOfWeek: string) {
    this.number = number;
    this.dayOfWeek = dayOfWeek;
  }
}
