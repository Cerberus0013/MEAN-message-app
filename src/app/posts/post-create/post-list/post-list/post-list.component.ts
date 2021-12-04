import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/posts/posts.model';
import { PostService } from '../../posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
  // posts = [
  //   {title: 'ff', content: 'efef'},
  //   {title: 'ff', content: 'efef'},
  //  {title: 'ff', content: 'efef'},
  // ]

  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts();
    this.postsSub = this.postService
      .getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy(){
this.postsSub.unsubscribe()
  }
}
