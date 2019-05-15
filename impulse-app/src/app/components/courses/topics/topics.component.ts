import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})

export class TopicsComponent implements OnInit {
  public courseTopics = [];

  constructor( public coursesService: FirestoreDBService ) { 
    this.coursesService.getCourses().subscribe(topics => {
      this.courseTopics = topics;
    })
   }

  ngOnInit() {
  }

}
