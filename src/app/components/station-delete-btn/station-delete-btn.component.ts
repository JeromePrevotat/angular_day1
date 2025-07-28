import { Component, inject, Input } from '@angular/core';
import { StationServiceService } from '../../services/station-service.service';

@Component({
  selector: 'app-station-delete-btn',
  standalone: true,
  imports: [],
  templateUrl: './station-delete-btn.component.html',
  styleUrl: './station-delete-btn.component.css'
})
export class StationDeleteBtnComponent {
  stationService = inject(StationServiceService);
  @Input() stationId!: number;

  deleteStation() {
    this.stationService.deleteStation(this.stationId).subscribe(() => {
      console.log('Station deleted');
    });
  }
}
