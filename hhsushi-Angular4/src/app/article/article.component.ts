import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../shared/article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    ArticleID: string;
    article: Article;
    template: string;
    text: string;
    imageURL: string;
    date: Date;

  constructor(private route: ActivatedRoute,
private articleservice: ArticleService) { }

  ngOnInit() {
      this.route.params.subscribe((params)=>{
          this.ArticleID = params.id
      })
      this.articleservice.getArticleById(this.ArticleID).subscribe((article) => {
          this.article = article;
          this.imageURL = 'url(/assets/'+article.coverImage+'.jpg) no-repeat center center';
        })

      this.text = '<h3>123123</h3>';

      var date = new Date()
      
  }

}
