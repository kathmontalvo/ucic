import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commentsData: CommentsService) { }

  ngOnInit() {
  }

  getComments() {
    this.commentsData.getAllComments()
    .subscribe(res => console.log(res))
  }
}
