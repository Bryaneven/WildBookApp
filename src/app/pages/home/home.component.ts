import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'wdb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 userConnected: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
this.userService.getme().subscribe(user => this.userConnected = user);
  }

}
