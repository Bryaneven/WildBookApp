import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'wdb-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input() me: User;
 @Input() posts: Post[];
 likeTotal = [];
 likedPost: Post[];
  constructor(private userService: UserService, private postService: PostService) { }

  ngOnInit(): void {

    for (const post of this.posts) {
      this.userService.getPostLikes(post.id).subscribe(likes => {
        if (likes.length){
          this.likeTotal.push(likes.length);
        } else {
          this.likeTotal.push(0);
        }
      });
    }
    this.postService.getMyLikedPost().subscribe(posts => {
      this.likedPost = posts;
      for (const postLiked of posts ) {
        const compare = this.posts.find((postTofind) => postTofind.id === postLiked.id);
        if (compare.id) {
          this.posts.find((postTofind) => postTofind.id === postLiked.id).liked = true;
         }
       }
    });
  }
  like(post: Post, i){
   if (post.liked){
    this.likedPost = this.likedPost.filter(postToFilter => postToFilter.id !== post.id);
    this.likeTotal[i] -= 1;
    this.posts.find((postTofind) => postTofind.id === post.id).liked = false;
    this.userService.getPostLikes(post.id).subscribe(users => {
      users = users.filter(userTofilter => userTofilter.id !== this.me.id);
      post.likesList = users;
      this.postService.update(post.id, post).subscribe((e) => console.log(e));
      });

   } else {
     this.likedPost.push(post);
     this.likeTotal[i] += 1;
     this.posts.find((postTofind) => postTofind.id === post.id).liked = true;
     this.userService.getPostLikes(post.id).subscribe(users => {
      users.push(this.me);
      post.likesList = users;
      this.postService.update(post.id, post).subscribe((e) => console.log(e));
      });
   }

  }
}
