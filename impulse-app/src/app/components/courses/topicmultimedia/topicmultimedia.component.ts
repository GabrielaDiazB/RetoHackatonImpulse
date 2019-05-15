import { Component, OnInit} from '@angular/core';
import { FirestoreserviceService } from 'src/app/services/firestore/firestoreservice.service';
// import { YoutubePlayerComponent } from 'ng2-youtube-player/src/modules/youtube-player.component';

@Component({
  selector: 'app-topicmultimedia',
  templateUrl: './topicmultimedia.component.html',
  styleUrls: ['./topicmultimedia.component.css']
})

// @Component({
//   selector: 'app',
//   template: `
//       <youtube-player
//     [videoId]="id"
//     (ready)="savePlayer($event)"
//     (change)="onStateChange($event)"
//   ></youtube-player>
//   `
// })

export class TopicmultimediaComponent implements OnInit {
  public courseTopics = [];
  // player: YT.Player;
  // private id:string = ''

  // savePlayer (player) {
  //   this.player = player;
  //   console.log('player instance', player)
  //   }
  // onStateChange(event){
  //   console.log('player state', event.data);
  // }

  constructor( public coursesService: FirestoreserviceService) {
    this.coursesService.getCourses().subscribe(topic => {
      this.courseTopics = topic;
    });
  }

  ngOnInit() {
  }

}

// our root app component
// import {Component} from '@angular/core'

// @Component({
//   selector: 'app-topicmultimedia',
//   styleUrls: ['./topicmultimedia.component.css'],
//   templateUrl: `
//     <div class="container">
//       <section class="panel panel-info">
//         <div class="panel-heading">
//           Angular (+4) Youtube Player Component <strong>v{{ version }}</strong>
//         </div>
//         <div class="panel-body">
//           <youtube-player
//             [videoId]="id"
//             (ready)="savePlayer($event)"
//             (change)="onStateChange($event)"
//           >
//           </youtube-player>
//         </div>
//       </section>

//       <div class="col-md-12">
//         <div class="btn-group" role="group">
//           <button type="button" class="btn btn-default" (click)="playVideo()">Play</button>
//           <button type="button" class="btn btn-default" (click)="pauseVideo()">Pause</button>
//         </div>
//       </div>

//       <div class="col-md-12">
//         <section class="panel panel-success">
//           <div class="panel-heading">Player State</div>
//           <div class="panel-body">
//             <pre>{{ ytEvent }}</pre>
//           </div>
//         </section>
//       </div>
//     </div>
//   `
// })
// export class  TopicmultimediaComponent {
//   id = 'qDuKsiwS5xw';
//   private player;
//   private ytEvent;
//   public version = systemConfig.map['ngx-youtube-player'].split('@')[1];

//   constructor() {

//   }
//   onStateChange(event) {
//     this.ytEvent = event.data;
//   }
//   savePlayer(player) {
//     this.player = player;
//   }

//   playVideo() {
//     this.player.playVideo();
//   }

//   pauseVideo() {
//     this.player.pauseVideo();
//   }
// }
