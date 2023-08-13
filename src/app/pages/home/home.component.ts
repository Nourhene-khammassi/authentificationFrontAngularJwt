import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AuthentficationService } from 'src/app/services/authentfication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  token = JSON.parse(localStorage.getItem("accesstoken")!)
  Role: any
  constructor(private authService: AuthentficationService) { }

  ngOnInit(): void {
    console.log("token ", this.token.accessToken)

    const decode = jwtDecode(this.token.accessToken)


    console.log("token ", decode)
    // console.log(this.authService.getUserRole())



  }

}
