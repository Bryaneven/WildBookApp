import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'wdb-profil-info',
  templateUrl: './profil-info.component.html',
  styleUrls: ['./profil-info.component.scss']
})
export class ProfilInfoComponent implements OnInit {
@Input() me: User;
@Input() followList: User[];
@Input()user: any;
@Input() isfollowing: boolean;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  followOrUnfollow(){
    if (this.isfollowing){
      this.followList = this.followList.filter(follow => follow.id !== this.user.id);
      this.me.follows = this.followList;
      this.userService.update(this.me.id, this.me).subscribe(user => this.isfollowing = false);
    }else {
      this.followList.push(this.user);
      this.me.follows = this.followList;
      this.userService.update(this.me.id, this.me).subscribe(user => this.isfollowing = true);
    }
  }

}
