import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register{

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void{
    if (this.form.valid) {
      window.alert(`Form data:${JSON.stringify(this.form.value)}`);
      // aqui faz o POST para o backend
    } else {
      window.alert('Form inválido');
      this.form.markAllAsTouched();
    }
  }


}
