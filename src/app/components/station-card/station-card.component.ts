import { Component, Input, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from '../../models/station';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [NgClass, RouterLink],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.css'
})

export class StationCardComponent implements OnInit{
  @Input() station: Station | undefined;

  private route = inject(ActivatedRoute);
  stationId:number | undefined;

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam != null) this.stationId = parseInt(idParam);
  }
  
  stateToString(state: number): string {
    switch (state) {
      case 0:
        return 'Broken';
      case 1:
        return 'Damaged';
      case 2:
        return 'Decent';
      case 3:
        return 'Good';
      case 4:
        return 'Prime';
      case 5:
        return 'Active';
      case 6:
        return 'Inactive';
      case 7:
        return 'Under Maintenance';
      case 8:
        return 'Out of Service';
      default:
        return 'Unknown State';
    }
  }
}