import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service'
import { CommentsInterface } from '../../models/comments-interface'
import { Location } from '@angular/common'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private commentsData: CommentsService, private location: Location) { }
  comments;
  comment: CommentsInterface = {
    body: '',
  }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commentsData.getAllComments()
      .subscribe((comments) => this.comments = comments)
  }

  postComment() {
    this.commentsData.saveComment(this.comment.body)
      .subscribe(data => {
        console.log(data)
        location.reload();
      });
  }

}
