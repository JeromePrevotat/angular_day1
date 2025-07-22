import { Component } from '@angular/core';
import { Station } from '../../models/station';
import { StationCardComponent } from "../station-card/station-card.component";
import { StationState } from '../../models/station-state';

@Component({
  selector: 'app-list-display',
  standalone: true,
  imports: [StationCardComponent],
  templateUrl: './list-display.component.html',
  styleUrl: './list-display.component.css'
})
export class ListDisplayComponent {
  stations: Station[] = [
    {
      id: 1,
      stationName: "Station Rpublique",
      latitude: 48.86700000,
      longitude: 2.36300000,
      priceRate: 0.25,
      powerOutput: 22.00,
      manual: "Voir le manuel  l'accueil.",
      state: StationState.ACTIVE,
      grounded: true,
      busy: false,
      wired: true,
      spot_id: 3,
      reservationList: [
        1
      ],
      mediaList: [],
      plugTypeList: []
  },
  {
    id: 2,
    stationName: "Station Gare",
    latitude: 48.84400000,
    longitude: 2.37400000,
    priceRate: 0.30,
    powerOutput: 50.00,
    manual: "Instructions affiches sur place.",
    state: StationState.INACTIVE,
    grounded: true,
    busy: true,
    wired: false,
    spot_id: 2,
    reservationList: [
      2,
      3
    ],
    mediaList: [],
    plugTypeList: []
  },
  {
    id: 3,
    stationName: "BatBorne",
    latitude: 48.85719400,
    longitude: 2.34706300,
    priceRate: 0.20,
    powerOutput: 11.00,
    manual: "",
    state: StationState.ACTIVE,
    grounded: false,
    busy: false,
    wired: false,
    spot_id: 1,
    reservationList: [],
    mediaList: [],
    plugTypeList: []
  },
  {
    id: 4,
    stationName: "SuperBorne",
    latitude: 48.85719400,
    longitude: 2.34706400,
    priceRate: 0.20,
    powerOutput: 11.00,
    manual: "null",
    state: StationState.ACTIVE,
    grounded: false,
    busy: false,
    wired: false,
    spot_id: 1,
    reservationList: [],
    mediaList: [],
    plugTypeList: []
  },
  {
    id: 5,
    stationName: "SpeedBorne",
    latitude: 48.85719400,
    longitude: 2.34706500,
    priceRate: 0.20,
    powerOutput: 11.00,
    manual: "",
    state: StationState.ACTIVE,
    grounded: false,
    busy: false,
    wired: false,
    spot_id: 1,
    reservationList: [],
    mediaList: [],
    plugTypeList: []
  }
  ];
}
