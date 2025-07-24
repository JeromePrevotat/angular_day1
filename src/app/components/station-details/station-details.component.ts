import { Component, inject, OnInit } from '@angular/core';
import { StationServiceService } from '../../services/station-service.service';
import { Station } from '../../models/station';
import { StateToStringPipe } from '../../pipes/StationPipe/state-to-string.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-station-details',
  standalone: true,
  imports: [NgClass, RouterLink, StateToStringPipe],
  templateUrl: './station-details.component.html',
  styleUrl: './station-details.component.css'
})
export class StationDetailsComponent implements OnInit {
  private stationService = inject(StationServiceService);
  private activatedRoute = inject(ActivatedRoute);
  station: Station | undefined;
  constructor() { }
  
  ngOnInit() {
    const stationIdParam = this.activatedRoute.snapshot.paramMap.get('id');
    if(stationIdParam != null && !isNaN(Number(stationIdParam))) {
      this.fetchStationDetails(Number(stationIdParam));
    }
    else {
      console.error("Invalid station ID parameter:", stationIdParam);
    }
  }

  fetchStationDetails(id: number) {
    this.stationService.getStation(id).subscribe(
      {
        next: (data: Station) => {
          this.station = data;
        },
        error: (error) => {
          console.error("Error fetching station details:", error);
        }
      }
    );
  }
}
