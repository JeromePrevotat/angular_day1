import { Routes } from '@angular/router';
import { ListDisplayComponent } from './components/list-display/list-display.component';
import { HomeComponent } from './components/home/home.component';
import { StationDetailsComponent } from './components/station-details/station-details.component';
import { StationCreateComponent } from './forms/station-create/station-create.component';
import { StationEditComponent } from './components/edit-station/edit-station.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'stations', component: ListDisplayComponent },
    { path: 'stations/add', component: StationCreateComponent },
    { path: 'stations/edit/:id', component: StationEditComponent },
    { path: 'stations/:id', component: StationDetailsComponent },
    
    { path: 'auth/register', component: RegisterFormComponent },
    { path: 'auth/login', component: LoginFormComponent },

    
    /* To Implement
    Station CRUD operations
    
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
