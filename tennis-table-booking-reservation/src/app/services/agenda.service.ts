import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Agenda} from "../models/agenda/Agenda";

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  constructor(private http: HttpClient) {}
  private serverUrl = 'http://64.226.124.118:8080';

  getWeekAgenda(week: number, year: number): Observable<Agenda[]> {

    let params = new HttpParams()

    params = params.append('week', week);
    params = params.append('year', year);

    return this.http.get<Agenda[]>(`${this.serverUrl}/agendas`, { params : params });
  }
}
