import { Component } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent {
  constructor(public ps: PostsService) {

  }
}
