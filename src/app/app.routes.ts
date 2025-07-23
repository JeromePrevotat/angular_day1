import { Routes } from '@angular/router';
import { ListDisplayComponent } from './components/list-display/list-display.component';
import { HomeComponent } from './components/home/home.component';
import { StationDetailsComponent } from './components/station-details/station-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'stations', component: ListDisplayComponent },
    { path: 'stations/:id', component: StationDetailsComponent },
    
    /* To Implement
    Station CRUD operations
    { path: 'add/stations', component: StationDetailsComponent },
    { path: 'edit/stations/:id', component: StationDetailsComponent },
    { path: 'delete/stations/:id', component: StationDetailsComponent },
    
    User CRUD operations
    { path: 'users', component: ListDisplayComponent },
    { path: 'users/:id', component: UserDetailsComponent },
    { path: 'add/users', component: UserDetailsComponent },
    { path: 'edit/users/:id', component: UserDetailsComponent },
    { path: 'delete/users/:id', component: UserDetailsComponent },

    Address CRUD operations
    { path: 'addresses', component: ListDisplayComponent },
    { path: 'addresses/:id', component: AddressDetailsComponent },
    { path: 'add/addresses', component: AddressDetailsComponent },
    { path: 'edit/addresses/:id', component: AddressDetailsComponent },
    { path: 'delete/addresses/:id', component: AddressDetailsComponent }

    Spot CRUD operations
    { path: 'spots', component: ListDisplayComponent },
    { path: 'spots/:id', component: SpotDetailsComponent },
    { path: 'add/spots', component: SpotDetailsComponent },
    { path: 'edit/spots/:id', component: SpotDetailsComponent },
    { path: 'delete/spots/:id', component: SpotDetailsComponent }
    
    Vehicle CRUD operations
    { path: 'vehicles', component: ListDisplayComponent },
    { path: 'vehicles/:id', component: VehicleDetailsComponent },
    { path: 'add/vehicles', component: VehicleDetailsComponent },
    { path: 'edit/vehicles/:id', component: VehicleDetailsComponent },
    { path: 'delete/vehicles/:id', component: VehicleDetailsComponent },
    
    Media CRUD operations
    User Media Get/Add/Edit/Delete
    Station Media Get/Add/Edit/Delete => Both accessible to Users
    Spot Media Get/Add/Edit/Delete => ?

    Hidden API /admin/...
    Admin Section
    Role based access control
    Plug Type CRUD operations

    */
    // 404 Wildcard route
    { path:'**', redirectTo: '' }

];
