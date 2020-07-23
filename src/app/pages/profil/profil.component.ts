import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/shared/services/post.service';
import { Post } from 'src/app/shared/models/post.model';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'wdb-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit, OnChanges {
 userId: number;
 posts: Post[];
 user: User;
 follow: boolean;
 followList: User[];
 me: User;
 showPost = false;
  constructor(private route: ActivatedRoute, private postService: PostService, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      this.userId = + param.get('id');
      this.postService.getUserPosts(this.userId).subscribe((posts) => {
        this.posts = posts.reverse();
    });
      this.userService.findbyId(this.userId).subscribe((user) => {
        this.user = user;
        this.userService.getMyFollows().subscribe(follows => {
          this.followList = follows;
          this.followList.map(follow => {
            if ( follow.id === user.id) {
              this.showPost = true;
            }
          });

        });
        this.userService.getme().subscribe(me => {
          this.me = me;
          if (me.id === this.userId){
            this.showPost = true;
          }
      });
      });
    });

  }
  ngOnChanges(){

    this.userService.getme().subscribe(me => {
      this.me = me;
      if (me.id === this.userId){
        console.log('lol');

        this.showPost = true;
      }else {
        this.showPost = false;
      }
  });
  }
}
