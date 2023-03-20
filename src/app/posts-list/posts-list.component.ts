import { Component, OnInit } from '@angular/core';
import { Post, PostCategory } from '../models/posts';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];

  constructor(public postsService: PostsService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts = this.postsService.getPosts();
  }

  filter(cat?: PostCategory) {
    if (!cat) {
      this.getPosts();
    } else {
      this.posts = this.postsService.getPostsByCategory(cat);
    }
  }
}
