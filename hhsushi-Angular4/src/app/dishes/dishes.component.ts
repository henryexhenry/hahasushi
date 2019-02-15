import { Component, OnInit, Inject } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

    dishes: Dish[];
    category: string;
    categoryImage;

  constructor(private dishservice: DishService,
private route: ActivatedRoute,
private sanitization: DomSanitizer,
@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          this.category = params.category;
      })
      this.dishservice.getDishesByCategory(this.category)
      .subscribe(dishes => {
          this.dishes = dishes
      })
  }

  dishesWithImage(){
      return this.dishes.filter((dish)=>dish.image!="").filter((dish)=>dish.image_size!="long")
  }
  dishesWithLongImage(){
      return this.dishes.filter((dish)=>dish.image_size=="long")
  }
  dishesWithNoImage(){
      return this.dishes.filter((dish)=>dish.image=="");
  }


}
