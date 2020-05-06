import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Constants } from '../classes/constants';


@Injectable()
export class AccountService {

  // communicate with web api
  constructor(private http: HttpClient, private router: Router) { }

  // properties needed
  private baseUrlLogin = Constants.apiUrl+'CustomerApi';
  private loginStatus = new BehaviorSubject<boolean>(this.getLoginStatus());
  private username = new BehaviorSubject<string>(localStorage.getItem('username'));
  private userRole = new BehaviorSubject<string>(localStorage.getItem('userRole'));
  private UserId = new BehaviorSubject<string>(localStorage.getItem('UserId'));



  getLoginStatus(): boolean {
    return false;
  }

  get CurrentUserId() {
    return this.UserId;
  }

  get IsLoggedIn() {
    return this.loginStatus;
  }
  get CurrentUsername() {
    return this.username;
  }
  get CurrentUserRole() {
    return this.userRole;
  }
  // Login method that sends the data to out API
  Login(userData) {
    return this.http.post<any>(this.baseUrlLogin + "/LoginWithSocialMedia", userData).pipe(
      map(result => {

        if (result && result.message != null) {
          console.log(result);
          this.loginStatus.next(true);
          localStorage.setItem('email', userData.EmailAddress);
          localStorage.setItem('username', result.username);
          localStorage.setItem('userRole', result.userRole);
          localStorage.setItem('loginStatus', '1');
          localStorage.setItem('UserId', result.id);
          localStorage.setItem('SorubankToken', result.token);
          localStorage.setItem('tokenExpiration', result.expiration);
          localStorage.setItem('PictureUrl', result.pictureUrl);
          //Check console for results
          console.log('We sent a message to our Controller API. It works');
        }
        return result;
      })
    );
  }

  loginWithEmail(username, password) {
    return this.http.post<any>(this.baseUrlLogin + "/LoginWithEmail", { "EmailAddress": username, "Password": password }).pipe(
      map(result => {
        if (result && result.message != null) {
          console.log(result);
          this.loginStatus.next(true);
          localStorage.setItem('username', result.username);
          localStorage.setItem('userRole', result.userRole);
          localStorage.setItem('loginStatus', '1');
          localStorage.setItem('UserId', result.id);
          localStorage.setItem('authToken', result.token);
          localStorage.setItem('tokenExpiration', result.expiration);
          localStorage.setItem('PictureUrl', result.pictureUrl);
        }
        return result;
      })
    );
  }

  sendRegistrationMail(email: string) {
    debugger;
    return this.http.post<any>(this.baseUrlLogin + "/SendCodeToEmailAddress", { "Email": email }).pipe(
      map(result => console.log(result))
    );
  }

  forgotPasswordSendEmail(email: string) {
    debugger;
    return this.http.post<any>(this.baseUrlLogin + "/ForgotPasswordSendEmail", { "Email": email }).pipe(
      map(result => console.log(result))
    );
  }


  checkRegistrationCode(code, email) {
    return this.http.post<any>(this.baseUrlLogin + "/CheckRegistrationCode", { "Code": code, "Email": email }).pipe(
      map(result => {
        if (result && result.message != null) {
          console.log(result);
        }
        return result;
      })
    );

  }

  saveUser(userData) {
    return this.http.post<any>(this.baseUrlLogin + "/SaveUser", userData).pipe(
      map(result => {
        if (result && result.message != null) {
        }
        return result;
      })
    );

  }

  changePasswordWithCode(changePasswordModel) {
    return this.http.post<any>(this.baseUrlLogin + "/ChangePasswordWithCode", changePasswordModel).pipe(
      map(result => {
        if (result && result.message != null) {
        }
        return result;
      })
    );
  }

  changePassword(changePasswordModel) {
    return this.http.post<any>(this.baseUrlLogin + "/ChangePassword", changePasswordModel).pipe(
      map(result => {
        if (result && result.message != null) {
        }
        return result;
      })
    );

  }

  Logout() {
    this.loginStatus.next(false);
    localStorage.setItem('loginStatus', '0');
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpiration');
    localStorage.removeItem('username');
    localStorage.removeItem('UserId');
    localStorage.removeItem('userRole');
    localStorage.removeItem('PictureUrl');
    //Check console for results
    console.log('User Logged out successfully');
  }



}
