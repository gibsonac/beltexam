import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: any;
  thePet: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.thePet = {
      name: "",
      type: "",
      description: ""
      // skill1: "",
      // skill2: "",
      // skill3: ""
    }
  }
  addPet() {
    console.log(this.thePet)
    let observable = this._httpService.addPet(this.thePet);
    observable.subscribe((data: any) => {
      console.log("234123123", data)
      if (data.err) {
        console.log("this was an error", data);
        this.errors = data.errors;
      }
      else {
        if (data.length == 2) {
          this.errors = ["that name already exists!"];
        }
        else {
          console.log("here's the new pet!", data)
          this.thePet = {
            name: "",
            type: "",
            description: ""
          }
          this.goHome();
        }
      }
    })
  }
  goHome() {
    this._router.navigate(['/pets']);
  }

}
