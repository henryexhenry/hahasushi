import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from '../menu/menu.component';
import { DishesComponent } from '../dishes/dishes.component';
import { PostdishComponent } from '../postdish/postdish.component';
import { PostarticleComponent } from '../postarticle/postarticle.component';
import { ArticleComponent } from '../article/article.component';
import { LoginComponent } from '../login/login.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'aboutus', component: AboutusComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'dishes/:category', component: DishesComponent},
    {path: 'postdish', component: PostdishComponent},
    {path: 'postarticle', component: PostarticleComponent},
    {path: 'article/:id', component: ArticleComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]