import { Component } from '@angular/core';
import { ListDisplayComponent } from "../list-display/list-display.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListDisplayComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  intro:string = "Welcome to my Angular app!";
}
