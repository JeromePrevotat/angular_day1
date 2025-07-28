import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  userService = inject(UserService);
  authService = inject(AuthService);
  registerForm: FormGroup;
  isSubmitted = false;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      firstname: ['', [Validators.required, Validators.minLength(2)]],
      lastname: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    }, { validators: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.registerForm.valueChanges.subscribe(values => {
      console.log('Formulaire modifié:', values);
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    // Retourne true si TOUTES ces conditions sont vraies :
    //    champ existe ET champ invalide ET (champ dirty OU touched OU formulaire est soumis)
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.isSubmitted));
  }

  getFieldError(fieldName: string): string {
  const field = this.registerForm.get(fieldName);
  if (field && field.errors) {
    if (field.errors['required']) return `${fieldName} is required`;
    if (field.errors['minlength']) {
      return `Minimum ${field.errors['minlength'].requiredLength} characters`;
    }
  }
    return '';
  }

  submitCreateUser(){
    this.isSubmitted = true;
    console.log('Form submitted:', this.registerForm.value);
    if (this.registerForm.valid) {
      this.isLoading = true;
      console.log('Form submitted successfully:', this.registerForm.value);
      const newUser: Partial<User> = this.registerForm.value;
      this.userService.createUser(newUser).subscribe({
        next: (response) => {
          console.log('User created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating user:', error);
        }
      });
      this.isLoading = false;
      this.registerForm.reset();
      this.isSubmitted = false;
    } else {
      console.error('Form is invalid:', this.registerForm.errors);
    }
  }

  private passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
}
