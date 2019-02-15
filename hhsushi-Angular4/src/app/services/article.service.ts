import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { Observable } from 'rxjs/Observable';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { Article } from '../shared/article';

@Injectable()
export class ArticleService {

  constructor(private http : HttpClient,
private processHTTPMsgService: ProcessHTTPMsgService) { }

  getAllArticles(): Observable<Article[]>{
      return this.http.get(baseURL+'articles')
      .catch(error => {return this.processHTTPMsgService.handleError(error)})
  }

  getArticleById(id: string): Observable<Article>{
      return this.http.get(baseURL+ 'articles/' + id)
      .catch(error => {return this.processHTTPMsgService.handleError(error)})
  }

  postArticle(article: Article): Observable<Article>{
        return this.http.post(baseURL + 'articles' , article)
        .catch(error => {return this.processHTTPMsgService.handleError(error)})
  }

}
