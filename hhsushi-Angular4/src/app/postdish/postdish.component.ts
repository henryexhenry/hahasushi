import { Component, OnInit, ViewChild } from '@angular/core';
import { DishService } from '../services/dish.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-postdish',
  templateUrl: './postdish.component.html',
  styleUrls: ['./postdish.component.scss']
})
export class PostdishComponent implements OnInit {
    @ViewChild('pdform') postDishFormDirective;
    postDishForm: FormGroup;
    postDish: Dish;
    submitted = null;
    
    formErrors = {
        'name_eng':'',
        'name_cn':'',
        'name_jp':'',
        'category':'',
        'price':''
    };

    validationMessages = {
        'name_eng':{
            'required':'English dish name is required.'
        },
        'name_cn':{
            'required':'Chinese dish name is required.'
        },
        'name_jp':{
            'required':'Japanese dish name is required.'
        },
        'category':{
            'required':'Category is required.'
        },
        'price':{
            'required':'Price is required.'
        }
    }

  constructor(private dishservice: DishService,
private fb: FormBuilder) { }

  ngOnInit() {
      this.createForm();
  }
  createForm(){
      this.postDishForm = this.fb.group({
        name_eng: ['', Validators.required],
        name_cn: ['', Validators.required],
        name_jp: ['', Validators.required],
        description:'',
        image:'',
        category: ['', Validators.required],
        price: ['', Validators.required],
        unit: '/(1件/pc/貫)',
        label: ''
      })
      
    this.postDishForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

  this.onValueChanged(); // (re)set form validation messages

  }

  onValueChanged(data?: any) {
    if (!this.postDishForm) { return; }
    const form = this.postDishForm;

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
    this.postDish = this.postDishForm.value;
    console.log(this.postDish);
    this.dishservice.submitDish(this.postDish)
      .subscribe(pd => {
         this.submitted = pd;
         this.postDish = null; 
         setTimeout(() => { this.submitted = null; }, 5000); 
        },
        error => console.log(error.status, error.message));
    this.postDishForm.reset({
        name_eng: '',
        name_cn: '',
        name_jp: '',
        description:'',
        image:'',
        category: '',
        price: '',
        unit: '/(1件/pc/貫)',
        label: ''
    });
    this.postDishFormDirective.resetForm();
  }
}
