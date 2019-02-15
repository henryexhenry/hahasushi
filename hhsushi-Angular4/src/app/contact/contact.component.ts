import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from'@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { Feedback } from '../shared/feedback';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    @ViewChild('fbform') feedbackFormDirective;
    feedbackForm: FormGroup;
    feedback: Feedback;
    submitted = null;


    formErrors = {
        'firstname':'',
        'lastname':'',
        'feedback':''
    };

    validationMessages = {
        'firstname':{
            'required':'Firstname is required.'
        },
        'lastname':{
            'required':'Lastname is required.'
        },
        'feedback':{
            'required':'Feedback is required.'
        }
    }


  constructor(private feedbackservice: FeedbackService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
      this.feedbackForm = this.fb.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          tel: '',
          email: '',
          feedback: ['', Validators.required]
      })
      
      this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  
    this.onValueChanged(); // (re)set form validation messages
  }
  onValueChanged(data?:any){
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;

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
  onSubmit(){
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackservice.submitFeedback(this.feedback)
      .subscribe(fb => {
         this.submitted = fb;
         this.feedback = null; 
         setTimeout(() => { this.submitted = null; }, 5000); 
        },
        error => console.log(error.status, error.message));
    this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        tel: '',
        email: '',
        feedback: ''
    });
    this.feedbackFormDirective.resetForm();
  }

}
