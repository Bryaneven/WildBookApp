import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'wdb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 userConnected: User;
 feed: Post[];
  constructor(private userService: UserService,
              private postService: PostService) { }

  ngOnInit(): void {
this.userService.getme().subscribe(user => this.userConnected = user);
this.postService.getMyFeed().subscribe(feed => this.feed = this.sortByDueDate(feed).reverse());
  }
  public sortByDueDate(array) {
   return array.sort((a: Post, b: Post) => {
    const date1 = new Date(a.createdDate);
    const date2 = new Date(b.createdDate);

    return date1.getTime() - date2.getTime();
    });
}
}
