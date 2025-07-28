import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StationState } from '../../models/station-state';
import { StationServiceService } from '../../services/station-service.service';
import { Station } from '../../models/station';


@Component({
  selector: 'app-station-create',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './station-create.component.html',
  styleUrls: ['./station-create.component.css']
})
export class StationCreateComponent {
  stationService: StationServiceService = inject(StationServiceService);
  stationCreateForm: FormGroup;
  isSubmitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.stationCreateForm = this.fb.group({
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
    this.stationCreateForm.valueChanges.subscribe(values => {
      console.log('Formulaire modifié:', values);
    });

    this.stationCreateForm.get('stationName')?.valueChanges.subscribe(stationName => {
      console.log('Station Name modifié:', stationName);
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.stationCreateForm.get(fieldName);
    // Retourne true si TOUTES ces conditions sont vraies :
    //    champ existe ET champ invalide ET (champ dirty OU touched OU formulaire est soumis)
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
  }

  getFieldError(fieldName: string): string {
  const field = this.stationCreateForm.get(fieldName);
  if (field && field.errors) {
    if (field.errors['required']) return `${fieldName} is required`;
    if (field.errors['minlength']) {
      return `Minimum ${field.errors['minlength'].requiredLength} characters`;
    }
  }
    return '';
  }

  submitCreateStation(){
    this.isSubmitted = true;
    console.log('Form submitted:', this.stationCreateForm.value);
    if (this.stationCreateForm.valid) {
      this.isLoading = true;
      console.log('Form submitted successfully:', this.stationCreateForm.value);
      const newStation: Partial<Station> = this.stationCreateForm.value;
      this.stationService.createStation(newStation).subscribe({
        next: (response) => {
          console.log('Station created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating station:', error);
        }
      });
      this.isLoading = false;
      this.stationCreateForm.reset();
      this.isSubmitted = false;
    } else {
      console.error('Form is invalid:', this.stationCreateForm.errors);
    }
  }
}
