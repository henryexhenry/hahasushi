import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ArticleService } from '../services/article.service';
import { Article } from '../shared/article';
import { EditorModule } from '@tinymce/tinymce-angular';

@Component({
    selector: 'app-postarticle',
    templateUrl: './postarticle.component.html',
    styleUrls: ['./postarticle.component.scss']
})
export class PostarticleComponent implements OnInit {
    @ViewChild('atform') articleFormDirective;
    articleForm: FormGroup;
    article: Article;
    submitted = null;


    formErrors = {
        'title':'',
        'author': '',
        'content': '',
        'coverImage': ''
    };

    validationMessages = {
        'title': {
            'required': 'title is required.'
        },
        'author': {
            'required': 'author is required.'
        },
        'content': {
            'required': 'content is required.'
        },
        'coverImage': {
            'required': 'coverImage is required.'
        }
    }

    constructor(private fb: FormBuilder, private articleService: ArticleService) { }

    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.articleForm = this.fb.group({
            title: ['', Validators.required],
            author: ['', Validators.required],
            content: ['', Validators.required],
            coverImage: ['', Validators.required],
            quotedFrom: ''
        })
        this.articleForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged(); // (re)set form validation messages
    }
    onValueChanged(data?: any) {
        if (!this.articleForm) { return; }
        const form = this.articleForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }

    }

    onSubmit() {
        this.article = this.articleForm.value;
        console.log(this.article);
        this.articleService.postArticle(this.article)
            .subscribe(fb => {
                this.submitted = fb;
                this.article = null;
                setTimeout(() => { this.submitted = null; }, 5000);
            },
            error => console.log(error.status, error.message));
        this.articleForm.reset({
            title: '',
            author: '',
            content: '',
            coverImage: '',
            quotedFrom: ''
        });
        this.articleFormDirective.resetForm();
    }


}

