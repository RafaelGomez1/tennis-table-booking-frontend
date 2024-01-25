import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Clubs, League} from "../models/ranking/LeagueRanking";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  constructor(private http: HttpClient) {}
  private serverUrl = 'http://64.226.124.118:8080';

  getClubs(league: League): Observable<Clubs> {
    let params = new HttpParams()

    params = params.append('league', league);

    return this.http.get<Clubs>(`${this.serverUrl}/clubs`, { params : params });
  }
}
