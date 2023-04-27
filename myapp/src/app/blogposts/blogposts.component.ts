import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostData } from './postdata.model';
import { BlogpostService } from '../services/blogpostservice.service';

@Component({
  selector: 'app-blogposts',
  templateUrl: './blogposts.component.html',
  styleUrls: ['./blogposts.component.css'],
})
export class BlogpostsComponent implements OnInit {
  dbPosts: PostData[] = [];
  isfetching = false;
  errorMessage: any;
  constructor(private blogPostService: BlogpostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postsData: PostData, form: NgForm) {
    this.blogPostService
      .CreatePosts(postsData.title, postsData.content)
      .subscribe((responseData) => {
        console.log(responseData);
        this.fetchPosts();
        form.reset();
      });
  }
  onFetchPosts() {
    this.fetchPosts();
  }
  fetchPosts() {
    this.isfetching = true;
    this.blogPostService.fetchPosts().subscribe(
      (posts) => {
        this.dbPosts = posts;
        this.isfetching = true;
      },
      (error) => {
        this.errorMessage = error.error.error;
        console.log(error);
        console.log(error.error.error);
      }
    );
  }
  onDeletePosts() {
    this.blogPostService.deletePosts().subscribe((posts) => {
      this.fetchPosts();
    });
  }
  onSinglePostDeleted(deletedPost: PostData) {
    this.fetchPosts();
  }
}
