import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  form!: FormGroup;
  invioConSuccesso = false;

  generi = ['Uomo', 'Donna'];
  userProibiti = ['animale'];

  constructor(private fb: FormBuilder) {}

  validUsername = (formC: FormControl) => {
    if (this.userProibiti.includes(formC.value)) {
      return { usernameProibito: true };
    } else {
      return null;
    }
  };

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: this.fb.control(null, [Validators.required]),
      cognome: this.fb.control(null, [Validators.required]),
      password: this.fb.control(null, [Validators.required]),
      confermaPassword: this.fb.control(null, [Validators.required]),
      genere: this.fb.control('donna', [Validators.required]),
      immagineProfilo: this.fb.control(null),
      biografia: this.fb.control(null, [
        Validators.required,
        Validators.maxLength(100),
        Validators.minLength(0),
      ]),
      userInfo: this.fb.group({
        username: this.fb.control(null, {
          validators: [Validators.required, this.validUsername],
        }),
        email: this.fb.control(null, [Validators.required, Validators.email]),
      }),
    });
  }

  getErrorsC(name: string, errore: string) {
    return this.form.get(name)?.errors![errore];
  }

  getFormC(name: string) {
    return this.form.get(name);
  }

  onSubmit() {
    console.log(this.form.value);
    this.invioConSuccesso = true;

    if (this.invioConSuccesso) {
      this.form.reset();
      this.invioConSuccesso = false;
    }
  }
}
