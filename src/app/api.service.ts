import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { FieldInputFacultyModel } from '../_models/fieldInput.model';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getEventList(): Observable<any> {
    return this.http.get(`https://recon.t101api.com/EventList`);
  }

  getMoreInfo(Id:number){
    return this.http.get(`https://www.recon.com/en/Events/Calendar/Event/${Id}`);
  }

}