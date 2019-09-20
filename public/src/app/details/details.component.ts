import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  thePet: any = {
    name: "",
    type: "",
    description: "",
  };
  liked: Boolean = false;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("here is the id that passed through", params['id'])
      this.thisPet(params['id']);
      this.liked = false;
    });
  }
  thisPet(id) {
    let observable = this._httpService.showPet(id);
    observable.subscribe(data => {
      console.log("got the pet deets!", data)
      this.thePet = data;
    })
  }
  delete(id) {
    let observable = this._httpService.delete(id);
    observable.subscribe(data => {
      console.log("this is the one now adopted!!", data)
      this.goHome();
    })
  }
  goHome() {
    this._router.navigate(['/pets']);
  }
  voteUp(id) {
    console.log(id)
    console.log(this.thePet)
    let observable = this._httpService.voteUp(id, this.thePet)
    observable.subscribe(data => {
      // console.log("here's the updated likes!", data)
      this.thisPet(this.thePet._id)
      this.liked = true;
    })
  }

}
