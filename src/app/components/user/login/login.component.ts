import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonDbService } from 'src/app/services/common-db.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  success = false;

  constructor(
    private commonDb: CommonDbService,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit(): void {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.commonDb.getUserByEmail(email, password).subscribe((data: any[]) => {
      if (data.length) {
        this.userService.loginCurrentUser(data[0]);
        this.router.navigateByUrl('home');
      }
    });
  }

  redirectToRegister(): void {
    this.router.navigateByUrl('register')
  }

  valueChange(event): void {
    this.loginForm.controls[event.detail.name].setValue(event.detail.value);
    if(!this.loginForm.controls[event.detail.name].touched) {
      this.loginForm.controls[event.detail.name].markAsTouched()
    }
  }

  isValidEmail(): boolean {
    return !this.loginForm.get('email').valid&&this.loginForm.get('email').touched;
  }
 }
