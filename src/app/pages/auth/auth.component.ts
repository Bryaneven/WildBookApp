import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'wdb-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(credential){
    this.authService.login(credential).subscribe((token) =>
    console.log(token)
    );
  }

  signIn(user){
    this.authService.signIn(user).subscribe((userFrmSrv) => console.log(userFrmSrv));
  }
}
