import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    user = { username: '', password: ''};
    errMess: string;

    constructor(private authService: AuthService) { }

    ngOnInit() {
    }

    onSubmit() {
        console.log('123');
        console.log("User: ", this.user);
        this.authService.logIn(this.user)
            .subscribe(res => {
                if (res.success) {
                    console.log(res)
                }
                else {
                    console.log(res);
                }
            },
            error => {
                console.log(error);
                this.errMess = error
            })
    }

}