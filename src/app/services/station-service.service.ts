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
}
