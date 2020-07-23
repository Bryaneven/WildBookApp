import { User } from './user.model';

export class Post {
  id: number;
  content: string;
  createdDate: Date;
  createdBy: User;
  liked = false;
  likesList: User[];

  constructor(post: Post){
    Object.assign(this, post);


  }
}
