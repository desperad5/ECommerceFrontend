import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/shared/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login={email:'',password:''};
  loading = false;
  userData: any[] = [];
	errorMessage: string;
  constructor(private fb: FormBuilder,private router: Router,
    private accountService:AccountService
    ) { }

  ngOnInit() {
    
    
    
  }
  loginWithEmail() {
		/* const controls = this.loginForm.controls;

		if (this.loginForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}; */
		this.loading = true;
    debugger;
		this.accountService.loginWithEmail(this.login.email, this.login.password)
			.subscribe((response) => {
				console.log(response);
				localStorage.setItem("email", this.login.email);
				this.loading = false;
				this.router.navigate(['/home']);
			},
				error => {
					this.loading = false;
					console.log(error);
					this.errorMessage = error.error;
				});
	}

	/* signInWithGoogle(platform: string): void {
		platform = GoogleLoginProvider.PROVIDER_ID;
		this.authService.signIn(platform).then(
			(response) => {
				// Get all user details
				console.log(platform + ' logged in user data is= ', response);
				// Take the details we need and store in an array
				this.userData.push({
					UserId: response.id,
					Provider: response.provider,
					FirstName: response.firstName,
					LastName: response.lastName,
					EmailAddress: response.email,
					PictureUrl: response.photoUrl,
					OauthToken: response.authToken
				});

				// Take the array and send to our account.service.login method
				this.accountService.Login(this.userData[0]).subscribe(
					result => {
						console.log('success', result);
						this.router.navigate(['/home']);
					},
					error => {
						this.errorMessage = error.error;
						console.log(error);
					}
				);
			},
			error => {
				console.log(error);
				this.errorMessage = error.error;
			}
		);
	}

	signInWithFacebook(platform: string): void {
		platform = FacebookLoginProvider.PROVIDER_ID;
		this.authService.signIn(platform).then(
			(response) => {
				console.log(platform + ' logged in user data is= ', response);

				// Take the details we need and store in an array
				this.userData.push({
					UserId: response.id,
					Provider: response.provider,
					FirstName: response.firstName,
					LastName: response.lastName,
					EmailAddress: response.email,
					PictureUrl: response.photoUrl,
					OauthToken: response.authToken
				});

				// Take the array and send to our account.service.login method
				this.accountService.Login(this.userData[0]).subscribe(
					result => {
						console.log('success', result);
						this.router.navigate(['/home']);
						//  this.router.navigateByUrl('/dashboard'); // Main page
						//  this.router.navigateByUrl('/');

					},
					error => {
						this.errorMessage = error.error;
						debugger;
						console.log(error);
					}
				);
			},
			error => {
				console.log(error);
				this.errorMessage = error;
			}
		);
	} */

	signOut(): void {
		this.accountService.Logout();
		console.log('User has signed out');
		window.location.reload();
	}

	public message = false;
	/* sendRegistrationMail() {
		this.message = true;
		this.accountService.sendRegistrationMail(this.emailFormControl.value)
			.subscribe((response) => {
				console.log(response);
			},
				error => {
					console.log(error);
					this.errorMessage = error.error;
				});

	} */
	/* submit() {
		const controls = this.loginForm.controls;

		if (this.loginForm.invalid) {
			Object.keys(controls).forEach(controlName =>
				controls[controlName].markAsTouched()
			);
			return;
		}
		const authData = {
			email: controls.email.value,
			password: controls.password.value
		};

	}


	isControlHasError(controlName: string, validationType: string): boolean {
		const control = this.loginForm.controls[controlName];
		if (!control) {
			return false;
		}

		const result = control.hasError(validationType) && (control.dirty || control.touched);
		return result;
	} */

}
