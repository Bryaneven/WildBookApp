import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'wdb-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router,   private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login(credential){
    this.authService.login(credential).subscribe((token) => {
    this.router.navigateByUrl('');
    }
    );
  }

  signIn(user){
    this.authService.signIn(user).subscribe((userFrmSrv) =>
    this.snackBar.open('Utilisateur enregistré, vous pouvez maintenant vous connecter !'));
  }
}
