import { Component, OnInit } from '@angular/core';
import { FirestoreserviceService } from 'src/app/services/firestore/firestoreservice.service';

@Component({
  selector: 'app-topicmultimedia',
  templateUrl: './topicmultimedia.component.html',
  styleUrls: ['./topicmultimedia.component.css']
})
export class TopicmultimediaComponent implements OnInit {
  public courseTopics = [];

  constructor( public coursesService: FirestoreserviceService) { 
    this.coursesService.getCourses().subscribe(topic => {
      this.courseTopics = topic;
    })  
  }  
  
  ngOnInit() {
  }

}
