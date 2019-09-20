import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  // users: any <---- here is where we declare variables to use
  // pets: any;
  // newUser: any;
  constructor(private _httpService: HttpService) { }
  ngOnInit() {
    // this.pets = {
    //   name: "",
    //   type: "",
    //   description: "",
    //   skill1: "",
    //   skill2: "",
    //   skill3: ""
    // }
    // this.getPets();
    // this.getUsers();
    // this.newUser = {
    //   first_name: "",
    //   last_name: "",
    //   email: ""
    // }
    //place in here functions to fire when the page loads
    //like this.getUsers();
  }

  //add functions after this
  // getPets() {
  //   let observable = this._httpService.getPets();
  //   observable.subscribe(data => {
  //     console.log("got all the pets!", data)
  //     this.pets = data;
  //   })
  // }
  // addUser() {
  //   console.log(this.newUser)
  //   let observable = this._httpService.addUser(this.newUser);
  //   observable.subscribe(data => {
  //     console.log("here's the new user!", data)
  //     this.newUser = {
  //       first_name: "",
  //       last_name: "",
  //       email: ""
  //     }
  //     this.getUsers();
  //   })
  // }

}

