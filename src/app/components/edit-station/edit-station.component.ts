import { Component, inject, OnInit } from '@angular/core';
import { StationServiceService } from '../../services/station-service.service';
import { Station } from '../../models/station';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StationState } from '../../models/station-state';
import { StationDeleteBtnComponent } from "../station-delete-btn/station-delete-btn.component";

@Component({
  selector: 'app-edit-station',
  standalone: true,
  imports: [ReactiveFormsModule, StationDeleteBtnComponent],
  templateUrl: './edit-station.component.html',
  styleUrls: ['./edit-station.component.css']
})
export class StationEditComponent implements OnInit {
  private stationService = inject(StationServiceService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  stationEditForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  station: Station | undefined;
  editedStation: Station | undefined;
  stationId!: number;
  
  constructor(private fb: FormBuilder) {
    this.stationEditForm = this.fb.group({
      stationName: ['', [Validators.required, Validators.minLength(3)]],
      latitude: [0, [Validators.required]],
      longitude: [0, [Validators.required]],
      priceRate: [0, [Validators.required]],
      powerOutput: [0, [Validators.required]],
      manual: [''],
      state: [StationState.PRIME, [Validators.required]],
      grounded: [false, [Validators.required]],
      wired: [false, [Validators.required]],
      spot_id: [1, [Validators.required]],
      // mediaList: [[]],
      // plugTypeList: [[], [Validators.required]],
    })
  }

    ngOnInit(): void {
      const stationIdParam = this.activatedRoute.snapshot.paramMap.get('id');
      if(stationIdParam != null && !isNaN(Number(stationIdParam))) {
        this.stationId = Number(stationIdParam);
        this.stationService.getStation(this.stationId).subscribe({
          next: (station) => {
            this.station = station;
            this.stationEditForm.patchValue({
              stationName: station.stationName,
              latitude: station.latitude,
              longitude: station.longitude,
              priceRate: station.priceRate,
              powerOutput: station.powerOutput,
              manual: station.manual,
              state: station.state,
              grounded: station.grounded,
              wired: station.wired,
              spot_id: station.spot_id
            });
          },
          error: (error) => {
            console.error('Error fetching station:', error);
          }
        });
      }
    }

    isFieldInvalid(fieldName: string): boolean {
      const field = this.stationEditForm.get(fieldName);
      // Retourne true si TOUTES ces conditions sont vraies :
      //    champ existe ET champ invalide ET (champ dirty OU touched OU formulaire est soumis)
      return Boolean(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
    }

    getFieldError(fieldName: string): string {
    const field = this.stationEditForm.get(fieldName);
    if (field && field.errors) {
      if (field.errors['required']) return `${fieldName} is required`;
      if (field.errors['minlength']) {
        return `Minimum ${field.errors['minlength'].requiredLength} characters`;
      }
    }
      return '';
    }

    submitEditStation(){
      this.isSubmitted = true;
      console.log('Form submitted:', this.stationEditForm.value);
      if (this.stationEditForm.valid) {
        this.isLoading = true;
        console.log('Form submitted successfully:', this.stationEditForm.value);
        const newStation: Partial<Station> = this.stationEditForm.value;
        this.stationService.editStation(this.stationId, newStation).subscribe({
          next: (response) => {
            console.log('Station edited successfully:', response);
            this.isLoading = false;
            this.stationEditForm.reset();
            this.isSubmitted = false;
            this.router.navigate(['/stations']);
          },
          error: (error) => {
            console.error('Error editing station:', error);
          }
        });
      } else {
        console.error('Form is invalid:', this.stationEditForm.errors);
      }
    }

  
}
