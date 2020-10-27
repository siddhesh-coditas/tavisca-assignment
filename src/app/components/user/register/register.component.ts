import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonDbService } from 'src/app/services/common-db.service';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private router: Router,
    private dbService: CommonDbService,
    private userService: UserService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl(null, []),
      email: new FormControl(null, [Validators.email]),
      phone: new FormControl(null, [Validators.minLength(10), Validators.maxLength(10)]),
      password: new FormControl(null, []),
      cpassword: new FormControl(null, [this.passwordValidator.bind(this)])
    });
  }

  ngOnInit(): void {
  }

  passwordValidator(control: AbstractControl): any {
    const isvalid = control.value !== null && this.registerForm.get('password').value === control.value;
    return {
      validCpass: isvalid
    };
  }

  onSubmit() {
    const userDetails = this.registerForm.value;
    const userData: UserModel = {
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
      items: []
    };
    this.dbService.registerUser(userData).subscribe((data: UserModel) => {
      this.userService.loginCurrentUser(data);
      this.router.navigate(['/home'], { queryParams: { id: data.id }});
    });
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('login');
  }

}
