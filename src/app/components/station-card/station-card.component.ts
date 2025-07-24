import { Component, Input, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Station } from '../../models/station';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StateToStringPipe } from "../../pipes/StationPipe/state-to-string.pipe";

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [NgClass, RouterLink, StateToStringPipe],
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
  
}