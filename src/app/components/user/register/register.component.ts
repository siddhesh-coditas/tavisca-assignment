import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonDbService } from 'src/app/services/common-db.service';
import { LocalServiceService } from 'src/app/services/local-service.service';
import { UserService } from 'src/app/services/user.service';
import { BaseComp } from '../../base';
import { UserModel } from '../user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseComp implements OnInit {

  registerForm: FormGroup;
  phonePattern = "[0-9]{10}";

  constructor(
    private router: Router,
    private dbService: CommonDbService,
    private userService: UserService,
    public locServ: LocalServiceService
  ) {
    super(locServ);
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phone: new FormControl(null, []),
      password: new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(16)]),
      cpassword: new FormControl(null, [Validators.required, this.passwordValidator.bind(this)])
    });
  }

  ngOnInit(): void {
  }

  passwordValidator(control: AbstractControl): any {
    const isvalid = control.value !== null && this.registerForm.get('password').value === control.value;
    if(isvalid) {
      control.setErrors({
        validCpass: isvalid
      });
    }
  }

  onSubmit() {
    const userDetails = this.registerForm.value;
    if(this.registerForm.valid) {
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
  }

  redirectToLogin(): void {
    this.router.navigateByUrl('login');
  }

  validatePassword() {
    if (!this.registerForm.get('password').valid) {
      const minErr = this.registerForm.get('password').errors.minlength;
      if(!!minErr) {
        const length = minErr.actualLength;
        const minlength = minErr.requiredLength;
        return length < minlength ? "min" : null; 
      }
      const maxErr = this.registerForm.get('password').errors.maxlength;
      if(!!maxErr) {
        const length = maxErr.actualLength;
        const maxlength = maxErr.requiredLength;
        return length > maxlength ? "max" : null; 
      }
      return false;
    }
    return null;
  }

}
