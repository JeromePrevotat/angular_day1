import { Component, inject, OnInit } from '@angular/core';
import { Station } from '../../models/station';
import { StationCardComponent } from "../station-card/station-card.component";
import { StationServiceService } from '../../services/station-service.service';

@Component({
  selector: 'app-list-display',
  standalone: true,
  imports: [StationCardComponent],
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.css'
})
export class ListDisplayComponent implements OnInit{
  private stationService = inject(StationServiceService);
  stations: Station[] = [];

  ngOnInit() {
    this.fetchAllStations();
  }

  fetchAllStations() {
    this.stationService.getStations().subscribe({
      next: (data: Station[]) => {
        this.stations = data;
      },
      error: (error) => {
        console.error("Error fetching stations:", error);
      }
    });
  }
}
