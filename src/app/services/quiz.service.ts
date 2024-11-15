import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { QuizModel } from '../models/quiz.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private scoreSubject = new BehaviorSubject<{ score: number, totalScore: number }>({ score: 0, totalScore: 0 });
  public score$ = this.scoreSubject.asObservable();

  constructor(private http: HttpClient) { }

  public setScore(score: number, totalScore: number) {
    this.scoreSubject.next({ score, totalScore });
  }

  public getQuiz(): Observable<QuizModel> {
    return this.http.get<QuizModel>('https://tcc-backend-cwcyaqfqamdhc0br.brazilsouth-01.azurewebsites.net/Quizzes/1');
  }

  saveQuizResults(quizResult: any): Observable<any> {
    const token = localStorage.getItem('token'); // Supondo que o token está armazenado no localStorage
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post(`https://tcc-backend-cwcyaqfqamdhc0br.brazilsouth-01.azurewebsites.net/Conteudos/salvarResultadoQuiz`, quizResult, { headers });
  }
}
