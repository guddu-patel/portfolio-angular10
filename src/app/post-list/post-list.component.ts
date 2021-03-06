import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiHandlerService } from '../service/api-handler.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  blogs: any = [];
  showPostNo: string = "";
  imgBase = environment.baseUrl;
  activePage = 1;

  constructor(private router: Router,
    public location: Location,
    private api: ApiHandlerService) {
    // location.path();
    // debugger;
  }
  ngOnInit(): void {
    this.getPosts();
  }
  getTime() {
    return '0.2s';
  }
  ngAfterViewInit(): void {

  }
  getPosts() {
    let url = '/posts?page=' + this.activePage + '&limit=10';
    this.api.get(url).subscribe((data: any) => {
      console.log('All Posts:', data.posts);
      debugger;
      this.blogs = this.blogs.concat(data.posts.docs);
      this.activePage = data.posts.pages <= this.activePage ? -1 : (data.posts.page + 1);
      // this.activePage = data.posts.pages <= this.activePage ? -1 : (this.activePage + 1);
      if (this.location.path() == '') {
        this.blogs = this.blogs.slice(0, 3);
      }
    });
  }
  trackblog(index, blog) {
    console.log(blog);
    return blog ? blog.updatedAt : undefined;

  }

}
