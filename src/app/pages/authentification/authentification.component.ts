import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/models/authentication-request';
import { AuthenticationResponse } from 'src/app/models/authentication-response';
import { AuthentficationService } from 'src/app/services/authentfication.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
/*export class AuthentificationComponent implements OnInit {
  authenticationRequest: AuthenticationRequest = new AuthenticationRequest();
  loginForm: FormGroup;
  submitted: boolean = false;
  constructor(private service: AuthentficationService, private router: Router, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],

    });*/


export class AuthentificationComponent implements OnInit {
  authenticationRequest: AuthenticationRequest = new AuthenticationRequest();
  errorMsg: string = ""
  path: string = "../assets/img/boxed-bg.jpg";
  data: any;
  form: FormGroup;


  constructor(private authService: AuthentficationService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    localStorage.removeItem("accesstoken")

    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
          ]
        ],
      },
    );
  }
  login() {
    this.authService.authenticate(this.authenticationRequest).subscribe(
      (ress) => {
        this.authService.setUserToken(ress)
        console.log("testRess", ress)
        this.router.navigate(["home"])

      }, error => {
        this.errorMsg = "login ou mot de pass incorect"
      }
    )

  }


  login1() {
    this.authService.loggin(this.form.value).subscribe(
      (ress) => {
        console.log("testRess", ress)
        localStorage.setItem("accesstoken", JSON.stringify(ress))

        this.router.navigate(["home"])

      }, error => {
        this.errorMsg = "login ou mot de pass incorect"
      }
    )

  }

}