import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContentModel} from "../models/content.model";

@Injectable({
  providedIn: 'root'
})
export class ContentsService {

  constructor(public http:HttpClient) {
  }

  public getContents(): Observable<ContentModel[]>{
   return this.http.get<ContentModel[]>('https://localhost:7203/Conteudos')
  }

  public getContentById(id: number): Observable<ContentModel>{
    return this.http.get<ContentModel>(`https://localhost:7203/Conteudos/${id}`)
  }

  public getAllContents(): Observable<ContentModel[]>{
    return this.http.get<ContentModel[]>('https://localhost:7203/Conteudos/getAll')
  }
}
