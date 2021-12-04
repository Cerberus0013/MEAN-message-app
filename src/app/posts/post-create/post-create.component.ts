//styling



import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../posts.model';
import { PostService } from './posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
newPost = 'Please enter text here';
enteredContent = ' ';
enteredTitle='';
postCreated = new EventEmitter<Post>()

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  onAddPost(form: NgForm){
    if(form.invalid){
      return
    }
      this.postService.addPosts(form.value.title, form.value.content);
      form.resetForm()
    }

    getErrorMessage(){
      return 'Input Required'
    }
  };
