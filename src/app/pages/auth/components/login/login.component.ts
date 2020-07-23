import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'wdb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() sendCredentials = new EventEmitter();
  email: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const credentials = {email: this.email, password: this.password};
    this.sendCredentials.emit(credentials);
  }
}
