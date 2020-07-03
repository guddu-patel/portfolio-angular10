import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { ApiHandlerService } from '../service/api-handler.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {

  selectedPost: any = null;
  imgBase = environment.baseUrl;
  otherPosts = null;
  constructor(private route: ActivatedRoute, private api: ApiHandlerService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    this.route.paramMap.subscribe((data: any) => {
      let id = data.params.id
      this.api.get('/posts/' + id).subscribe((data: any) => {
        console.log('selected post:', data);
        this.selectedPost = data.post;
        this.otherPosts = data;
        debugger;
      });
    })
  }
}
