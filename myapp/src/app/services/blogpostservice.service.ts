import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { PostData } from '../blogposts/postdata.model';

@Injectable({
  providedIn: 'root',
})
export class BlogpostService {
  constructor(private httpClient: HttpClient) {}

  private backendurl: string =
    'https://myangularhttp-1532e-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json';
  private url: string = this.backendurl + 'posts.json';
  private deleteurl: string = this.backendurl + 'posts/';

  CreatePosts(title: string, content: string) {
    const mypostdata: PostData = { title: title, content: content };
    return this.httpClient.post(this.url, mypostdata);
  }

  fetchPosts() {
    return this.httpClient.get(this.url).pipe(
      map((responseData) => {
        const postsArray = [];
        for (const key in responseData) {
          postsArray.push({ ...responseData[key], id: key });
        }
        return postsArray;
      })
    );
  }
  deletePosts() {
    return this.httpClient.delete(this.url);
  }

  deletePost(postid: string) {
    return this.httpClient.delete(this.deleteurl + postid + '.json');
  }
}
