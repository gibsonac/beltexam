import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  errors: any;
  thePet: any = {
    name: "",
    type: "",
    description: "",
  };
  id: any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("here is the id that passed through", params['id'])
      this.id = params['id'];
      this.thisPet(params['id']);
    });
  }
  thisPet(id) {
    let observable = this._httpService.showPet(id);
    observable.subscribe(data => {
      console.log("got the pet deets!", data)
      this.thePet = data;
    })
  }
  updatePet(id) {
    let observable = this._httpService.updatePet(id, this.thePet)
    observable.subscribe((data: any) => {
      if (data.err) {
        console.log("this was an error", data);
        if (data.errors[0].includes("E11000 duplicate key error collection")) {
          this.errors = ["that name is already used!"]
        }
        else {
          this.errors = data.errors;
        }
      }
      else {
        if (data.length == 2) {
          this.errors = ["that name already exists!"];
        }
        else {
          console.log("here's my edited pet!", data)
          this.goToDetails(this.id);
        }
      }
    })
  }
  goToDetails(id) {
    this._router.navigate([`/pets/${id}`]);
  }

}
