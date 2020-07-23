import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'wdb-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
 @Input() posts: Post[];
 @Input() user: User;
  constructor() { }

  ngOnInit(): void {
console.log(this.posts);

  }

}
