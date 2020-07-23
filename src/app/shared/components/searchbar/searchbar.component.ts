import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'wdb-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  users: User[];
  name: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  findUsers() {
    this.userService.findbyName(this.name).subscribe((users) => this.users = users);
  }
  clearResults(){
    setTimeout(() => { this.users = []; }, 300 );

  }
}
