import { Component, OnInit } from '@angular/core';
import { FirestoreserviceService } from 'src/app/services/firestore/firestoreservice.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})

export class TopicsComponent implements OnInit {
  public courseTopics = [];

  constructor( public coursesService: FirestoreserviceService) {
    this.coursesService.getCourses().subscribe(topics => {
      return this.courseTopics = topics;
    });
   }

  ngOnInit() {
  }

}
