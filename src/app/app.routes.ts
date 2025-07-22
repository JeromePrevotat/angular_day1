import { Routes } from '@angular/router';
import { ListDisplayComponent } from './components/list-display/list-display.component';
import { HomeComponent } from './components/home/home.component';
import { StationDetailsComponent } from './components/station-details/station-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'stations', component: ListDisplayComponent },
    { path: 'stations/:id', component: StationDetailsComponent },


    // 404 Wildcard route
    { path:'**', redirectTo: '' }

];
