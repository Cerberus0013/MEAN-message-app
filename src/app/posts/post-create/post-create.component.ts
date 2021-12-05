
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PostsService } from './posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
newPost = 'Please enter text here';
enteredContent = ' ';
enteredTitle='';


  constructor(private postsService: PostsService) { }

  onAddPost(form: NgForm){
    if(form.invalid){
      return
    }
      this.postsService.addPosts(form.value.title, form.value.content);
      form.resetForm()
    }

    getErrorMessage(){
      return 'Input Required'
    }
  };
