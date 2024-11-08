import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContentModel} from "../models/content.model";

@Injectable({
  providedIn: 'root'
})
export class ContentsService {
  constructor(public http:HttpClient) {
  }

  public createHeader(): any {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
     'Authorization': `Bearer ${token}`
   });
  }
  public getContents(): Observable<ContentModel[]>{
    this.createHeader();
   return this.http.get<ContentModel[]>('https://tcc-backend-cwcyaqfqamdhc0br.brazilsouth-01.azurewebsites.net/Conteudos', {headers: this.createHeader()});
  }

  public getContentById(id: number): Observable<ContentModel>{
    return this.http.get<ContentModel>(`https://tcc-backend-cwcyaqfqamdhc0br.brazilsouth-01.azurewebsites.net/Conteudos/${id}` , {headers: this.createHeader()});
  }

  public getAllContents(): Observable<ContentModel[]>{
    return this.http.get<ContentModel[]>('https://tcc-backend-cwcyaqfqamdhc0br.brazilsouth-01.azurewebsites.net/Conteudos/getAll' , {headers: this.createHeader()});
  }

  public getContentsVisited(): Observable<ContentModel[]>{
    return this.http.get<ContentModel[]>('https://tcc-backend-cwcyaqfqamdhc0br.brazilsouth-01.azurewebsites.net/Conteudos/conteudos-visitados', {headers: this.createHeader()});
  }
}
