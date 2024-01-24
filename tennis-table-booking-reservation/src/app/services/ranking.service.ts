import {HttpClient, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {League, RankingData} from "../models/ranking/LeagueRanking";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RankingService {
  constructor(private http: HttpClient) {}
  private serverUrl = 'http://64.226.124.118:8080';

  getRanking(league: League, club: string): Observable<RankingData> {
    let params = new HttpParams()

    params = params.append('league', league);
    params = params.append('club', club);

    return this.http.get<RankingData>(`${this.serverUrl}/rankings`, { params : params });
  }
}
