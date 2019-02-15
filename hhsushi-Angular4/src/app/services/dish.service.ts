import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/catch';


@Injectable()
export class DishService {

    constructor(private http: HttpClient, private processHTTPMsgService: ProcessHTTPMsgService) { }

    getDishesByCategory(category: string): Observable<Dish[]> {
        return this.http.get(baseURL + "dishes?category=" + category)
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    getDishesByLabel(label: string): Observable<Dish[]> {
        return this.http.get(baseURL + "dishes?label=" + label)
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    submitDish(dish: Dish): Observable<Dish> {
        return this.http.post(baseURL + "dishes", dish)
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    
    getAllDishes() {
        return this.http.get(baseURL + "dishes")
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    /*
    getDishesName_cn(name_cn: string) {
        return this.http.get(baseURL + "dishes?name_cn=" + name_cn)
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    deleteDish(dishId: string): Observable<Dish> {
        return this.http.delete(baseURL + "dishes/" + dishId)
            .catch(error => { return this.processHTTPMsgService.handleError(error); });
    }
    */
}
