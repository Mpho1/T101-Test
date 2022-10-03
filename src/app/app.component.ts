import { Component, OnInit} from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  events: Observable<any>;
 
  constructor(private api: ApiService) {
    this.events = api.getEventList();
  }

  getEventId(Id:number){
    console.log("Testing: ",Id);
    this.api.getMoreInfo(Id).subscribe(
      (res) => {
        console.log("getEventList RESPONSE: ",res);
      },
      (err) => {console.log("Error!: ",err)}
    )
  }

}



