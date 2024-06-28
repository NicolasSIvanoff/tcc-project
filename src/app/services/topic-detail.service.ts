import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TopicDetailService {

  constructor(public http:HttpClient) { }

  public getTopicDetail(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
