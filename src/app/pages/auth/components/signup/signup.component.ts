import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wdb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @Output() sendRegistration = new EventEmitter();
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  passwordBis: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.password === this.passwordBis){
      this.sendRegistration.emit({
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password
      });
    } else {
      alert('Les mots de passe ne correspondent pas');
    }

  }
}
