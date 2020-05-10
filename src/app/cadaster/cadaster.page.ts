import { Component, OnInit } from '@angular/core';
import {HelperService} from '../services/helper.service';
import { HttpClient } from 'selenium-webdriver/http';
import {NgForm} from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cadaster',
  templateUrl: './cadaster.page.html',
  styleUrls: ['./cadaster.page.scss'],
})
export class CadasterPage implements OnInit {
 
  constructor(
    private helper: HelperService,
    //private authentication: AuthenticationService,
    private http: HttpClient) { }

  email = this.getEmail();
  contactField: null;
  messageField: null;

  ngOnInit() {
  }

  getEmail() {
    const email = this.helper.getUrlParameter('email');
    console.log(email);
    return email;
  }

  sendForm(f: NgForm) {
  //   const url = environment.apiUrl + '/saveForm';
  //   const dataIn = {
  //     contact: this.contactField,
  //     message: this.messageField,
  //   //  token: this.authentication.token
  //   };
  //   this.http.post(url, dataIn)
  //     .subscribe(dataOut => {
  //       console.log(dataOut);
  //     }, error => {
  //       console.log(error.message);
  //     });
   }
}