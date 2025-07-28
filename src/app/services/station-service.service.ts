import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Station } from '../models/station';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationServiceService {

  private apiUrl = 'http://localhost:8080/api/stations';
  private http = inject(HttpClient);

  getStations(): Observable<Station[]> {
    return this.http.get<Station[]>(this.apiUrl);
  }

  getStation(id:number): Observable<Station> {
    return this.http.get<Station>(`${this.apiUrl}/${id}`);
  }

  createStation(station:Partial<Station>): Observable<Station> {
    return this.http.post<Station>(this.apiUrl, station);
  }

  editStation(id: number, station: Partial<Station>): Observable<Station> {
    return this.http.put<Station>(`${this.apiUrl}/${id}`, station);
  }

  deleteStation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
