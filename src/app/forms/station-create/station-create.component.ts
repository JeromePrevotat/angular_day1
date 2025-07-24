import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StationState } from '../../models/station-state';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-station-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './station-create.component.html',
  styleUrls: ['./station-create.component.css']
})
export class StationCreateComponent {
  stationName = new FormControl('');
  latitude = new FormControl(0);
  longitude = new FormControl(0);
  priceRate = new FormControl(0);
  powerOutput = new FormControl(0);
  manual = new FormControl('');
  state = new FormControl(StationState);
  grounded = new FormControl(false);
  wired = new FormControl(false);
  // spot_id = new FormControl(0);
  mediaList = new FormControl([]);
  plugTypeList = new FormControl([]);
}
