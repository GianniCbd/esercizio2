import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userForm = {
    usernameOrEmail: '',
    password: '',
  };

  risposta = '';

  user: any = {
    usernameOrEmail: '',
    password: '',
  };

  constructor() {}

  @ViewChild('form', { static: true }) form!: NgForm;

  ngOnInit(): void {
    this.form.statusChanges?.subscribe((status) => {
      console.log('Stato del form: ', status);
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.risposta = 'Non sei registrato!? Fallo ora!';
    } else {
      this.risposta = 'Pefavore compila i campi richiesti';
    }
  }
}
