import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { ArticleService } from '../services/article.service';
import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material';
import { Dish } from '../shared/dish';
import { Article } from '../shared/article';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    dishes: Dish[];
    articles: Article[];

    constructor(
        private dishservice: DishService,
        private articleservice: ArticleService
    ) { }

    ngOnInit() {
        this.articleservice.getAllArticles()
            .subscribe(articles => {
                this.articles = articles
            })
    }
    getFeaturedArticles() {
        return this.articles.filter((items) => { items.featured == true })
    }
    getUnfeaturedArticles() {
        return this.articles.filter((items) => { items.featured == false })
    }
}
