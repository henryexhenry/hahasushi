import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,
    MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule,
    MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule,
    MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { DishesComponent } from './dishes/dishes.component';
import { ArticleComponent } from './article/article.component';
import { PostdishComponent } from './postdish/postdish.component';
import { PostarticleComponent } from './postarticle/postarticle.component';

import { routes } from './app-routing/routes';

import { DishService } from './services/dish.service';
import { FeedbackService } from './services/feedback.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { baseURL } from './shared/baseurl';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticleService } from './services/article.service';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AuthService } from './services/auth.service';
import { AuthInterceptor, UnauthorizedInterceptor} from './services/auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutusComponent,
    ContactComponent,
    DishesComponent,
    PostdishComponent,
    ArticleComponent,
    PostarticleComponent,
    LoginComponent
  ],
  imports: [
    EditorModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule,
    ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule,  MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, MatSlideToggleModule, MatToolbarModule, MatListModule, MatGridListModule, MatCardModule, MatIconModule, MatProgressSpinnerModule, MatDialogModule,
  ],
  providers: [
      DishService,
      FeedbackService,
      ProcessHTTPMsgService,
      ArticleService,
      AuthService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },
      {
        provide: HTTP_INTERCEPTORS,
        useClass: UnauthorizedInterceptor,
        multi: true
      },
      { provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
