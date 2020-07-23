import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'wdb-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
@Input() user: User;
@Input() posts: Post[];
postToSend: string;
  constructor(private postService: PostService) { }

  ngOnInit(): void {}

  sendPost(){
    const post = {content: this.postToSend};
    this.postService.post(post).subscribe(postfrmsrv => {
      postfrmsrv.createdBy.firstname = this.user.firstname;
      postfrmsrv.createdBy.lastname = this.user.lastname;
      postfrmsrv.createdBy.pictureUrl = this.user.pictureUrl;
      this.posts.unshift(postfrmsrv);
    });
    this.postToSend = '';
  }
}
