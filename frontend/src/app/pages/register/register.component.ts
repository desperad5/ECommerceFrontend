import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register={firstName:'',lastName:'',email:'',password:''};
  loading = false;
  constructor(private router: Router,
    private accountService:AccountService) { }

  ngOnInit() {
    this.initRegisterForm();
  }
  initRegisterForm() {
		/* this.registerForm = this.fb.group({
			firstName: ['', Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(100)
			])
			],
			lastName: ['', Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(100)
			])
			],
			email: [{ value: '', disabled: true }, Validators.compose([
				Validators.required,
				Validators.email,
				Validators.minLength(3),
				Validators.maxLength(320)
			]),
			],
			password: ['', Validators.compose([
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(100)
			])
			]
		}); */

  }
  submit() {
		debugger;
		/* const controls = this.registerForm.controls;
		// check form
		if (this.registerForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		} */

		this.loading = true;
    var postData = {
			"Email": this.register.email,
			"FirstName": this.register.firstName,
			"LastName": this.register.lastName,
			"Password": this.register.password,
		};

		this.accountService.saveUser(postData).subscribe(
			(response) => {
				localStorage.setItem('username', response.firstName + " " + response.lastName);
				this.router.navigate(['/home']);
				this.loading = false;

			},
			error => {
				console.log(error);
				this.loading = false;

			}
		);

	}

}
